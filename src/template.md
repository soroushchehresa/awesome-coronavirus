<div align="center">
	<br>
	<img src="https://raw.githubusercontent.com/soroushchehresa/awesome-coronavirus/master/awesome-coronavirus.png" width="450px">
	<br>
	<br>
	<br>
</div>

# Awesome Coronavirus [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) <img src="https://img.shields.io/github/license/soroushchehresa/awesome-coronavirus"> <img src="https://img.shields.io/travis/soroushchehresa/awesome-coronavirus" alt="build status"> [<img src="https://img.shields.io/badge/sponsors-become%20a%20sponsor-blueviolet">](#donation-and-sponsoring)

> Huge collection of useful projects and resources for COVID-19 (2019 novel Coronavirus)

COVID-19 (2019 novel Coronavirus) is a current epidemic as of today. Developers around the world are building applications for the public to get up-to-date and accurate information as quickly as possible. <br>

**If you are interested to add an item to this list, please read the [contribution guidelines](https://github.com/soroushchehresa/awesome-coronavirus/blob/master/contributing.md) first!**


## <%= contents.title %>
<% for (i in contents.list) { %>- [<%= contents.list[i].category %>](#<%= contents.list[i].anchor %>)
<% for (j in contents.list[i].list) { %>  - [<%= contents.list[i].list[j].title %>](#<%= contents.list[i].list[j].anchor %>)
<% } %>
<% } %>


## <%= getToKnow.title %>

| Link  | Description  |
|:------|:-------------|
<% for (i in getToKnow.list) { %>| [<%= getToKnow.list[i].title %>](<%= getToKnow.list[i].url %>) | <%= getToKnow.list[i].description %> |
<% } %>

## <%= openSource.title %>

<% for (i in openSource.list) { %>#### <%= openSource.list[i].category %>

| 🌟     | Repository   | Description  |
|:-----------:|:-------------|:-------------|
<% for (j in openSource.list[i].repositories) { %> | <%= openSource.list[i].repositories[j].stargazers_count %> | [@<%= openSource.list[i].repositories[j].owner.login %>](<%= openSource.list[i].repositories[j].owner.html_url %>)/[**<%= openSource.list[i].repositories[j].name %>**](<%= openSource.list[i].repositories[j].html_url %>) | <%= openSource.list[i].repositories[j].description %> |
<% } %>
<% } %>

## <%= applications.title %>

<% for (i in applications.list) { %>#### <%= applications.list[i].category %>

| Link | Description  |
|:-----|:-------------|
<% for (j in applications.list[i].list) { %>| [<%= applications.list[i].list[j].title %>](<%= applications.list[i].list[j].url %>) | <%= applications.list[i].list[j].description %> |
<% } %>
<% } %>

## <%= education.title %>

| Link  | Description  |
|:------|:-------------|
<% for (i in education.list) { %>| [<%= education.list[i].title %>](<%= education.list[i].url %>) | <%= education.list[i].description %> |
<% } %>

## <%= social.title %>

<% for (i in social.list) { %>#### <%= social.list[i].category %>

| Link      | Description  |
|:----------|:-------------|
<% for (j in social.list[i].list) { %>| [<%= social.list[i].list[j].title %>](<%= social.list[i].list[j].url %>) | <%= social.list[i].list[j].description %> |
<% } %>
<% } %>

## <%= books.title %>

| Link  | Description  |
|:------|:-------------|
<% for (i in books.list) { %>| [<%= books.list[i].title %>](<%= books.list[i].url %>) | <%= books.list[i].description %> |
<% } %>

## <%= researchOutlets.title %>

| Link  | Description  |
|:------|:-------------|
<% for (i in researchOutlets.list) { %>| [<%= researchOutlets.list[i].title %>](<%= researchOutlets.list[i].url %>) | <%= researchOutlets.list[i].description %> |
<% } %>

## <%= interactiveApplications.title %>

| Link  | Description  |
|:------|:-------------|
<% for (i in interactiveApplications.list) { %>| [<%= interactiveApplications.list[i].title %>](<%= interactiveApplications.list[i].url %>) | <%= interactiveApplications.list[i].description %> |
<% } %>

## <%= hackathons.title %>

| Link  | Description  |
|:------|:-------------|
<% for (i in hackathons.list) { %>| [<%= hackathons.list[i].title %>](<%= hackathons.list[i].url %>) | <%= hackathons.list[i].description %> |
<% } %>

## <%= currentStatus.title %>

| Link  | Description  |
|:------|:-------------|
<% for (i in currentStatus.list) { %>| [<%= currentStatus.list[i].title %>](<%= currentStatus.list[i].url %>) | <%= currentStatus.list[i].description %> |
<% } %>

## <%= vaccination.title %>

| Link  | Description  |
|:------|:-------------|
<% for (i in vaccination.list) { %>| [<%= vaccination.list[i].title %>](<%= vaccination.list[i].url %>) | <%= vaccination.list[i].description %> |
<% } %>

## Donation and Sponsoring

You can help me by buying me vitamins to boost my immune system when the Coronavirus outbreak is happening. I would maintain this repository if I were still alive :)

#### Support this project by donating:
<a href="https://www.patreon.com/soroushchehresa">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

#### Join this project as a sponsor:
We have an option to let you sponsor awesome-coronavirus and place your name at the top of the repository readme. Please contact me by [email](mailto:s1996ch@gmail.com) if you are interested in becoming a sponsor.

## Contribution
Contributions are welcomed! Read the [contribution guidelines](https://github.com/soroushchehresa/awesome-coronavirus/blob/master/contributing.md) first.

