import { step, TestSettings, Until, By, Device, Key, Mouse, ElementHandle, Locatable, Locator } from '@flood/element'
import assert from 'assert'


/**
 * The Incentivio
 * Version: 2.0
 */
export default () => {
    step('Incentivio Web Ordering Portal: Load Home Page', async (browser) => {
        await browser.visit('http://incentivio3.weareshellshock.com/')

        const pageTextVerify = By.visibleText('Find your nearest company location')
        await browser.wait(Until.elementIsVisible(pageTextVerify))
        //assertions

        assert.strictEqual(await browser.title(), "Palm Lane - Web Ordering")

        await browser.takeScreenshot()
    })

    step('Navigate to Signup Page', async (browser) => {
        await browser.click(By.css('#root > header > div > div > button:nth-child(1)'))

        await browser.click(By.css('div.Atfvz > button.lightBorder'))

        await browser.takeScreenshot()
    })

    step('Fill Signup and Create New User', async (browser) => {
        var random = Math.floor(Math.random() * 100000);
        var email = "aetincentivioperformance+" + random + "@gmail.com";
        //firstname
        await browser.type(By.css('[name="firstName"]'), 'fname')
        //lastname
        await browser.type(By.css('[name="lastName"]'), 'lname')
        //referralCode
        await browser.type(By.css('[name="referralCode"]'), '0001')
        //email
        await browser.type(By.css('[name="email"]'), email)
        //password
        await browser.type(By.css('[name="password"]'), 'Test@123')
        //confirmpassword
        await browser.type(By.css('[name="confirm_password"]'), 'Test@123')
        //confirmpassword
        await browser.type(By.css('[name="phone_number"]'), '0000000000')
        //tick rules and regulation check box
        //await browser.focus(By.css('input.jss990[name="agree_terms"]'));
        //change to form
        await browser.press(Key.TAB)
        // await browser.wait(1000)use
        await (await browser.findElement(By.xpath('//input[@name="agree_terms"]'))).click();


    })

    step('Submit Signup Form', async (browser) => {
        //click on signup button
        await browser.click(By.css('button[type="submit"]'));

        const TextsignupVerify = By.visibleText('My Account')
        await browser.wait(Until.elementIsVisible(TextsignupVerify))

        //assert.strictEqual((await browser.findElement(By.css("button[data-testid="testTogglerButton"]:nth-child(1)"),'My Account'))
        await browser.takeScreenshot()
    })

    step('Logout From the System', async (browser) => {
        //click on signup button
        await browser.click(By.css('button[data-testid="testTogglerButton"]:nth-child(1)'));
        //button.iDckyw[data-testid="testButton"]
        await browser.click(By.css('button.iDckyw[data-testid="testButton"]'));

        const TextsignupVerify = By.visibleText('Login')
        await browser.wait(Until.elementIsVisible(TextsignupVerify))

        //assert.strictEqual((await browser.findElement(By.css("div.jQqcGy>button:nth-child(1)"),'My Account'))
        await browser.takeScreenshot()
    })


}

export const settings: TestSettings = {
    loopCount: -1,
    description: 'Incentivio - Web Ordering Portal',
    screenshotOnFailure: true,
    disableCache: true,
    clearCache: true,
    clearCookies: true,
    actionDelay: 1.5,
    stepDelay: 2.5,
    viewport: { width: 1300, height: 600 }
}
