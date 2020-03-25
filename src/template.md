<div align="center">
	<br>
	<img src="/awesome-coronavirus.png" width="600px">
	<br>
	<br>
	<br>
	<hr>
	<p>
	<h2>Sponsors</h2>
	<div align="left">
		<a href="https://starhub.soroushapps.com"><img src="https://i.imgur.com/H5SELmm.png" width="270px"></a>
		<a href="#s1996chgmailcom"><img src="https://i.imgur.com/hkIMxlF.png" width="170px"></a>
	</div>
	<br>
        <br>
	</p>
	<hr>
	<br>
	<br>
</div>

<br>

# Awesome Coronavirus [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) <img src="https://img.shields.io/travis/soroushchehresa/awesome-coronavirus" alt="build status">

> Useful projects and resources for COVID-19 (2019 novel Coronavirus)

COVID-19 (2019 novel Coronavirus) is a current epidemic as of today. Developers around the world are building applications for the public to get up-to-date and accurate information as quickly as possible. <br>
If you are a developer, you may also be able to contribute to some of these projects.


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

| :star2:     | Repository   | Description  |
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

## <%= currentStatus.title %>

| Link  | Description  |
|:------|:-------------|
<% for (i in currentStatus.list) { %>| [<%= currentStatus.list[i].title %>](<%= currentStatus.list[i].url %>) | <%= currentStatus.list[i].description %> |
<% } %>

## Donation and Sponsoring

Donate me with buying me some vitamins to boost my immune system during the coronavirus outbreak, I would maintain this repository if I was alive :) 

#### Bitcoin
<img src="https://i.imgur.com/9IgberJ.png" width="120" >

`1CddWa57gyqTQEgf5oiQ4DbpLufAiEyMTm`

#### Patreon
<a href="https://www.patreon.com/soroushchehresa">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

<hr>

You can become a sponsor of `awesome-coronavirus` and be placed at the top of this page under the logo. For this offer please contact me with the following Email address:
#### `s1996ch@gmail.com`

## Contribution
Contributions welcome! Read the [contribution guidelines](https://github.com/soroushchehresa/awesome-coronavirus/blob/master/contributing.md) first.

