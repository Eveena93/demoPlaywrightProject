import { expect } from "@playwright/test"
export class LoginPage{
    //element declaration
    constructor(page){
        this.page=page //this > used to refer current page object
        this.userName=page.locator('#user-name')
        this.password=page.locator('#password')
        this.loginButton=page.locator('#login-button')
        this.errormessage=page.locator('.error-message-container')
       
    }
    //action declaration : methods
    async navigateToApplication(){
        await this.page.goto('https://www.saucedemo.com/') 
    }
    async fillUsernameOnUsernameField(usernamevalue){
        await this.userName.fill(usernamevalue)
    }
    async fillPasswordOnPasswordField(passwordvalue){
        await this.password.fill(passwordvalue)
    }
    async clickOnLoginButton(){
        await this.loginButton.click()
    }
    async validateSucessfulLogin(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
        await expect(this.page.locator('.title')).toHaveText('Products')
        
    }
    async validateUnsuccessfulLogin(){
         await expect(this.errormessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
    }

}