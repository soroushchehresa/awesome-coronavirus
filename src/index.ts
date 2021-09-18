import fs from 'fs';
import {Octokit as GitHubAPI, } from '@octokit/rest';
import ejs from 'ejs';
import dotenv from 'dotenv';
import getToKnowData from '../data/get-to-know.json';
import openSourceProjectsData from '../data/open-source-projects.json';
import applicationsData from '../data/applications.json';
import socialData from '../data/social.json';
import researchOutletsData from '../data/research-outlets.json';
import interactiveApplicationsData from '../data/interactive-applications.json';
import currentStatusData from '../data/current-status.json';
import contentsData from '../data/contents.json';
import educationData from '../data/education.json';
import booksData from '../data/books.json';
import hackathonsData from '../data/hackathons.json';
import vaccinationData from '../data/vaccination.json';

dotenv.config();

const github = new GitHubAPI({
  followRedirects: false,
  timeout: 10000,
  Promise: Promise,
  auth: process.env.GITHUB_AUTH_TOKEN,
  // log: console,
});

const repositories = openSourceProjectsData.list
  .map(async (item: any) => {
    const fetchReposPromise = item.repositories
      .map((repoPath: string) => {
        const separatedRepoPath = repoPath.split('/');
        return github.rest.repos.get({
          owner: separatedRepoPath[0],
          repo: separatedRepoPath[1],
        });
      });
    const allSettled = fetchReposPromise.map((p: any) => Promise.resolve(p)
      .then(
        val => ({ state: 'fulfilled', value: val }),
        err => ({ state: 'rejected', reason: err })));
    const rawResult = await Promise
      .all(allSettled);
    const result = rawResult
      .filter(({ state, value: value_1 }: any) => {
        if (state === 'fulfilled' && value_1 && value_1.data && value_1.data.name && value_1.data.owner) {
          return true;
        }
      })
      .map(({ value: value_2 }: any) => value_2);
    return {
      category: item.category,
      repositories: result.sort((a: any, b: any) => a.stargazers_count < b.stargazers_count ? 1 : -1),
      anchor: item.anchor || item.category.toLowerCase(),
    };
  });

Promise
  .all(repositories)
  .then((openSourceList: object) => {
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
      hackathons: hackathonsData,
      vaccination: vaccinationData,
    };
    const template = fs.readFileSync(`${__dirname}/template.md`, 'utf8');
    const markdown = ejs.render(template, data);
    fs.writeFileSync(`${__dirname}/../README.md`, markdown);
  })
  .catch(error => {
    console.error(error);
  });
