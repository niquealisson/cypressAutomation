import { registerPage } from "../../pages/registerPage";
const registerObj = new registerPage();
import registerData from "../../fixtures/registerData"; 

describe('test automation', () => {
    it('register flow', () => {
        registerObj.openURL();
        registerObj.enterFirstName(registerData.firstName); 
        registerObj.enterLastName(registerData.lastName); 
        registerObj.enterEmail(registerData.email); 
        registerObj.enterTelephone(registerData.telephone); 
        registerObj.enterPassword(registerData.password); 
        registerObj.enterConfirmPassword(registerData.confirmPassword);
        registerObj.checkPolicyCheckbox();
        registerObj.clickOnContinue();
    });
});
