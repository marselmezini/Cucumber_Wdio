
class siteFeedback {


siteFeedbackLocator = '//*[text()="Site Feedback"]';





async clickSiteFeedback(){


await $(this.siteFeedbackLocator).click();

}

}
 

 




    




module.exports = siteFeedback;