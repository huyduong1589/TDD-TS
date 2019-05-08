import { browser, logging, by } from 'protractor';
import { VerifyElement } from '../common_function/verifyElement';

describe('Login Page Test', function() {
  let page: VerifyElement;
  
  beforeEach(async function() {
    page = new VerifyElement(browser);
    browser.waitForAngularEnabled(false);

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
  it('should redirect to change password page after clicking change password button', async function() {
      await browser.get("http://3.1.217.123:1313/");
      await browser.driver.manage().window().maximize();
      await page.clickElement("//a[@id='changePass']"); //element id=....
      await browser.sleep(1000);
      await browser.getCurrentUrl().then(function(value){
          console.log(value);
          expect(value).toBe("http://3.1.217.123:1313/changepassword"); //redirect to ....
      })
  });
  
  it('should change passsword after providing credential and clicking submit button', async function(){
      await browser.get("http://3.1.217.123:1313/changepassword");
      await browser.driver.manage().window().maximize();
      await page.inputToElement("//input[@id='email']", "dmhuy@tma.com.vn"); // input e
      await page.inputToElement("//input[@id='oldpass']", "123456");
      await page.inputToElement("//input[@id='newpass']", "DEMO1234");
      await browser.sleep(1000);
      await page.clickElement("//button[@id='submit']"); //button
      await browser.sleep(1000);
      await browser.findElement(by.xpath("//pre")).getText().then(function(value){
          console.log(value);
          expect(value).toBe("{\"message\":\"Change password successfully\"}"); //
      })
  })
});
