
class siteFeedback {


siteFeedbackLocator = '//*[text()="Site Feedback"]';

thankYouFeedBackLocator = '//*[@id="int-thankyou-heading"]';



async clickSiteFeedback(){


await $(this.siteFeedbackLocator).click();

}

}
 

 




    




module.exports = siteFeedback;