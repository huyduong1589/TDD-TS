import {by, protractor, ProtractorBrowser, ProtractorExpectedConditions, ElementFinder, WebElement} from 'protractor'

export class VerifyElement{
    curBrowser:ProtractorBrowser
    timeOut:number
    until:ProtractorExpectedConditions

    constructor(browser){
        this.curBrowser=browser
    }

    async verifyElementPresentByXpath(xpath:string){
        var ele = await this.curBrowser.element(by.xpath(xpath));
        expect(ele.isPresent()).toBe(true);
    }

    async verifyElementIsRequired(xpath:string){
        var ele = await this.curBrowser.element(by.xpath(xpath));
        expect(ele.getAttribute('required')).toEqual("true");
    }

    async inputToElement(xpath:string, data: string){
        var ele = await this.curBrowser.element(by.xpath(xpath));
        ele.sendKeys(data);
    }

    async clickElement(xpath:string){
        var ele = await this.curBrowser.element(by.xpath(xpath));
        ele.click();
    }
}

