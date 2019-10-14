"use strict";
var {After, Before, setDefaultTimeout} = require('cucumber');
setDefaultTimeout(180000);

Before(async function () {
    await this.getPage('sign_in');
    await this.page.open();
    return this.page.fillCredentials();
  });

After(async function () {
    return this.page.signOut();
});