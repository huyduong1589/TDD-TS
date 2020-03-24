import { browser, logging, by } from 'protractor';
import { VerifyElement } from '../common_function/verifyElement';

describe('Login Page Test', function() {
  let page: VerifyElement;
  
  beforeEach(async function() {
    await browser.restart();
    page = new VerifyElement(browser);
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    await browser.get("http://localhost:3000");
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
  it('Should login with valid credentials', async function() {
    await page.inputToElement("//input[@id='email']", "");
    await browser.sleep(1000);
    await page.inputToElement("//input[@id='password']", "123456");
    await browser.sleep(1000);
    await page.clickElement("//button[@id='submit']");
    await browser.sleep(1000);
    var ele = await browser.findElement(by.xpath("//pre"));
    expect(ele.getText()).toEqual("{\"message\":\"login successfully\"}");
    await browser.sleep(1000);
    // ele.getText().then(async function(value){
    //     console.log(value)
    // })
  });

  it('Should login failed with invalid credentials', async function(){
      await page.inputToElement("//input[@id='email']", "");
      await browser.sleep(1000);
      await page.inputToElement("//input[@id='password']", "123456");
      await browser.sleep(1000);
      await page.clickElement("//button[@id='submit']");
      await browser.sleep(1000);
      var ele = await browser.findElement(by.xpath("//pre"));
      expect(ele.getText()).toEqual("{\"message\":\"login failed\"}");
      await browser.sleep(1000);

  })
});
