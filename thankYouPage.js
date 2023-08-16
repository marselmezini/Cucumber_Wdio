
class thankYou {

    thankYouFeedbackLocator = '#int-thankyou-heading';


    async thankYouFeedback() {

        return await $(this.thankYouFeedbackLocator).isDisplayed();

    }





}
module.exports = thankYou;


