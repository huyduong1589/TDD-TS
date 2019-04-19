import {by, protractor, ProtractorBrowser, ProtractorExpectedConditions, ElementFinder} from 'protractor'

export class VerifyElement{
    curBrowser:ProtractorBrowser
    timeOut:number
    until:ProtractorExpectedConditions

    constructor(browser){
        this.curBrowser=browser
    }

    async verifyElementByXpath(xpath:string){
        var ele = await this.curBrowser.element(by.xpath(xpath));
        expect(ele.isPresent()).toBe(true);
    }
}

