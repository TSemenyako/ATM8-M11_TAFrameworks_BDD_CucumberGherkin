"use strict";
const { When} = require('cucumber');

When('I click Data Entry menu and select {string} template', async function (templateName) {
    await this.page.openDataEntryFormByTemplateName(templateName);
    return this.getPage('data_entry_form');
});