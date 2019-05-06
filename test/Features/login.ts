import { browser, logging, by } from 'protractor';
import { VerifyElement } from '../common_function/verifyElement';
const expect = require('chai').expect;

module.exports = function () {    
    this.When(/^I navigate to "([^"]*)"$/, (text) =>{
      return browser.get('https://google.com')  
    })
    
};