"use strict";
const { When, Then } = require('cucumber');

When('I fill fields:', async function (table) {
    let data = table.rowsHash();
    await this.page.fillRequiredFields(data);
});

When('I click Save button', async function () {
    return this.page.save();
});

Then('New Data Entry Form screen should be opened', async function () {
    this.assert.equal(await this.page.isDefPageDisplayed(), true);
});

Then('successful toast message should be displayed', async function () {
    this.assert.equal(await this.page.toastMessageIsDisplayed(), true);
    return this.page.closeToastMessage();
});

Then('Record ID should be displayed', async function () {
    this.assert.equal(await this.page.recordIDIsDisplayed(), true);
});


