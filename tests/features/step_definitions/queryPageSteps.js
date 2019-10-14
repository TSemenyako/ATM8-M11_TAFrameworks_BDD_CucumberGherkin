"use strict";
const { Given, When, Then } = require('cucumber');

Given('I am on the Query screen', async function () {
    return this.getPage("query");
});

When('I search for {string} query in Query List', async function (queryName) {
    return this.page.searchQueryByName(queryName);
});

When('I click on the {string} query in Query List', async function (queryName) {
    return this.page.runQuery(queryName);
});

Then('I see {string} query label', async function (queryName) {
    this.assert.equal(await this.page.queryResults.getQueryLabel(), queryName);
});

Then('I see grid is loaded', async function () {
    this.assert.equal(await this.page.queryResults.isGridDisplayed(), true);
});