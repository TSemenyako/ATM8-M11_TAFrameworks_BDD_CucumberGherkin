"use strict";
const { setWorldConstructor } = require('cucumber');
const PageFactory = require('../../../../utils/page_objects/pageFactory');
const chai = require('chai');

function CustomWorld() {
  this.assert = chai.assert;
  this.page = null;

  this.getPage = function(pageName) {
    this.page = PageFactory.getPage(pageName);
    return this.page;
  }
}

setWorldConstructor(CustomWorld)