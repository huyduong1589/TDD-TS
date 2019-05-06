import { browser, logging, by } from 'protractor';
import { VerifyElement } from '../common_function/verifyElement';

describe('Login Page Test', function() {
  let page: VerifyElement;
  
  beforeEach(async function() {
    page = new VerifyElement(browser);
    browser.waitForAngularEnabled(false);
    await browser.get("http:localhost:3000");
    await browser.sleep(5000);
  });

  afterEach(async function() {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });


  // Function
  it('should see email, password input boxes and submit button and required', async function() {

    page.verifyElementPresentByXpath("//input[@id='email']"); // Verify input box with id "email" is shown on page => This means dev should code an input box with id "email"

    page.verifyElementPresentByXpath("//input[@id='password']"); // Verify input box with id "password" is shown on page => This means dev should code an input box with id "email"

    page.verifyElementPresentByXpath("//button[@id='submit']"); // Verify button with id "submit" is shown on page => This means dev should code an input box with id "email"
  
    page.verifyElementIsRequired("//input[@id='email']");

    page.verifyElementIsRequired("//input[@id='password']");

  });
});
