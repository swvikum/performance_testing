import { step, TestSettings, Until, By, Device, Key, Mouse, ElementHandle ,Locatable, Locator} from '@flood/element'
import assert from 'assert'

/**
 * The Incentivio
 * Version: 2.0
 */
export default () => {
  step('Incentivio Web Ordering Portal: Home', async (browser) => {
    await browser.visit('http://incentivio3.weareshellshock.com/')

    const pageTextVerify = By.visibleText('Find your nearest company location')
    await browser.wait(Until.elementIsVisible(pageTextVerify))
    //assertions

    assert.strictEqual(await browser.title(), "Palm Lane - Web Ordering")

    await browser.takeScreenshot()
  })

  step('Click on Decatur ( QA USE | Lightspeed)', async (browser) => {
    await browser.click(By.xpath('//*[@id="locationsListContainer"]/div[2]/div[2]/div[3]/div[3]/div/div/button'))

    //await browser.click(By.css('[name="instructions"]'))
    ///await browser.wait(2000)
    await browser.type(By.css('[name="instructions"]'), 'CH-65778')

    await browser.click(By.css('[type="submit"]'))
    //await browser.wait(2000)
    const datePickerVerify = By.visibleText('Today')
    await browser.wait(Until.elementIsVisible(datePickerVerify))

    await browser.click(By.css("div.dXWkba> button:nth-child(2)"))

  })

  step('Navigating to Ordering Page)', async (browser) => {
    
    await browser.click(By.css("div.eJRUKU >button:nth-child(25)")) 

    const orderPageTextVerify = By.visibleText('Decatur ( QA USE | Lightspeed)')
    await browser.wait(Until.elementIsVisible(orderPageTextVerify))
    //assert.strictEqual(URL, "http://incentivio3.weareshellshock.com/locations/decatur-qa-use-lightspeed")
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
}
