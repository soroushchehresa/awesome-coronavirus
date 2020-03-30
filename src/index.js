'use strict';

const fs = require('fs');
const GitHubApi = require('github');
const ejs = require('ejs');

require('dotenv')
  .config();

const DEBUG = process.env.NODE_ENV === 'development';
const GITHUB_AUTH_TOKEN = process.env.GITHUB_AUTH_TOKEN;

const templateFilePath = `${__dirname}/template.md`;
const outputFilePath = `${__dirname}/../README.md`;

const getToKnowData = require('../data/get-to-know.json');
let openSourceProjectsData = require('../data/open-source-projects.json');
const applicationsData = require('../data/applications.json');
const socialData = require('../data/social.json');
const researchOutletsData = require('../data/research-outlets.json');
const interactiveApplicationsData = require('../data/interactive-applications.json');
const currentStatusData = require('../data/current-status.json');
const contentsData = require('../data/contents.json');
const educationData = require('../data/education.json');
const booksData = require('../data/books.json');

const github = new GitHubApi({
  debug: DEBUG,
  followRedirects: false,
  timeout: 10000,
  Promise: Promise,
});

github.authenticate({
  type: 'oauth',
  token: GITHUB_AUTH_TOKEN,
});

const repositories = openSourceProjectsData.list
  .map(item => {
    const fetchReposPromise = item.repositories
      .map(async data => {
        let info;
        if (typeof data === "string") {
          info = {repo: data};
        } else {
          info = data;
        }
        const separatedRepoPath = info.repo.split('/');
        const repo = await github.repos.get({
          user: separatedRepoPath[0],
          repo: separatedRepoPath[1],
        });
        return {repo, info};
      });
    const allSettled = fetchReposPromise.map(p => Promise.resolve(p)
      .then(
        val => ({ state: 'fulfilled', value: val }),
        err => ({ state: 'rejected', reason: err })));
    return Promise
      .all(allSettled)
      .then(rawResult => {
        const result = rawResult
          .filter(({ state, value, reason }) => {
            if (state === 'fulfilled' && value && value.repo.name && value.repo.owner) {
              return true;
            }
          })
          .map(({ value }) => value);
        return {
          category: item.category,
          repositories:
            result
              .sort((a, b) => a.repo.stargazers_count < b.repo.stargazers_count ? 1 : -1)
              .map(r => ({
                stargazers_count: r.repo.stargazers_count,
                owner: r.repo.owner,
                name: r.info.subdir ?
                  `${r.repo.name}/${r.info.subdir}` : r.repo.name,
                html_url: r.info.subdir ?
                  `${r.repo.html_url}/tree/${r.repo.default_branch}/${r.info.subdir}` :
                  r.repo.html_url,
                description: r.info.description || r.repo.description
              })),
          anchor: item.anchor || item.category.toLowerCase(),
        };
      });
  });

Promise
  .all(repositories)
  .then(openSourceList => {
    const data = {
      contents: contentsData,
      openSource: { list: openSourceList, title: openSourceProjectsData.title },
      getToKnow: getToKnowData,
      applications: applicationsData,
      social: socialData,
      researchOutlets: researchOutletsData,
      interactiveApplications: interactiveApplicationsData,
      currentStatus: currentStatusData,
      education: educationData,
      books: booksData,
    };
    const template = fs.readFileSync(templateFilePath, 'utf8');
    const markdown = ejs.render(template, data);
    fs.writeFileSync(outputFilePath, markdown);
  })
  .catch(error => {
    console.error(error);
  });
