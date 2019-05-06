const expect = require('chai').expect;

module.exports = function () {    
    this.When(/^I navigate to http:\/\/localhost:3000/, () =>{
      driver.get('http://localhost:3000')  
    })

    this.When(/^I provide username, password$/, function () {
      driver.findElement(by.xpath("//input[@id='email']")).sendKeys("dmhuy@tma.com.vn");
      driver.findElement(by.xpath("//input[@id='password']")).sendKeys("123456");
    });

    this.When(/^I click Submit button$/, function () {
      // Write code here that turns the phrase above into concrete actions
      driver.findElement(by.xpath("//button[@id='submit']")).click();
    });
    
    this.Then(/^I should login$/, function () {
      // Write code here that turns the phrase above into concrete actions
      driver.findElement(by.xpath("//pre")).getText().then(function(value){
        expect(value).to.be.eql("{\"message\":\"login successfully\"}");
        driver.sleep(5000)
      })
    });
};