

class thankYou {

    thankYouFeedbackLocator = '//h1[@id="int-thankyou-heading"]';


    async thankYouFeedback() {
        await browser.pause(2000);
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
        const thanksPage = await $(this.thankYouFeedbackLocator);
        await thanksPage.waitForDisplayed({ timeout: 2000 });
        return await thanksPage.isDisplayed();

    }





}
module.exports = thankYou;


