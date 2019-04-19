import { browser, logging, by } from 'protractor';
import { VerifyElement } from '../common_function/verifyElement';

describe('workspace-project App', function() {
  let page: VerifyElement;
  
  beforeEach(function() {
    page = new VerifyElement(browser);
  });

  afterEach(async function() {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });


  // Function
  it('should see email, password input boxes and submit button', async function() {
    browser.waitForAngularEnabled(false);
    await browser.get("http://localhost:3000");
    await browser.sleep(5000);

    page.verifyElementByXpath("//input[@id='email']"); // Verify input box with id "email" is shown on page => This means dev should code an input box with id "email"

    page.verifyElementByXpath("//input[@id='password']"); // Verify input box with id "password" is shown on page => This means dev should code an input box with id "email"

    page.verifyElementByXpath("//button[@id='submit']"); // Verify button with id "submit" is shown on page => This means dev should code an input box with id "email"
  });
});
