


class languagesField {

  languageFieldLocator = '//*[@id="language-selector"]';
  saveBtnLocator = '//*[text()="Save"]';
  englishSelectedLocator = '//*[text()="English (United States)"]';
  guardarBtnLocator = '//*[text()="Guardar"]';





  //Functions 

  async selectEspañolDropdown() {

    const espanolLanguageField = await $(this.languageFieldLocator);
    await browser.pause(2000);
    await $(espanolLanguageField).selectByIndex(1);


  }

  async saveButton() {

    await $(this.saveBtnLocator).click();


  }

  async selectEnglishDropdown() {

    const englishLanguageField = await $(this.languageFieldLocator);

    await englishLanguageField.selectByIndex(0);


  }


  async clickGuardarButton() {

    await $(this.guardarBtnLocator).click();

 }

 
}




module.exports = languagesField;
