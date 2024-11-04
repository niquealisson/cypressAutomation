export class registerPage{

weblocators={

    firstName:'#input-firstname',
    lastName:'#input-lastname',
    email:'#input-email',
    telephone:'#input-telephone',
    password:'#input-password',
    confirmPassword:'#input-confirm',
    policyCheckbox:'input[type="checkbox"]',
    continue:'input[type="submit"][value="Continue"]',


}

openURL(){
    cy.visit(Cypress.env('URL'));
}


enterFirstName(FName){
    cy.get(this.weblocators.firstName).clear().type(FName)
}

enterLastName(LName){
    cy.get(this.weblocators.lastName).clear().type(LName)
}

enterEmail(email){
    cy.get(this.weblocators.email).clear().type(email)
}

enterTelephone(phoneNo){
    cy.get(this.weblocators.telephone).clear().type(phoneNo)
}

enterPassword(password){
    cy.get(this.weblocators.password).clear().type(password)
}

enterConfirmPassword(confirmPassword){
    cy.get(this.weblocators.confirmPassword).clear().type(confirmPassword)
}

checkPolicyCheckbox(){
    cy.get(this.weblocators.policyCheckbox).check()
}

clickOnContinue(){
    cy.get(this.weblocators.continue).click()
}

}