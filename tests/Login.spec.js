import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import TestData from '../utils/TestData.json'
//Test 1 : valid username & valid password
test.only('To verify that the SauceDemo application allows login with a valid username and valid password' ,async({page})=>{
   
    const usernamevalue=TestData.validusername
    const passwordvalue=TestData.validpassword
    const login=new LoginPage(page) //constructor invoking
    await login.navigateToApplication()
    await login.fillUsernameOnUsernameField(usernamevalue)
    await login.fillPasswordOnPasswordField(passwordvalue)
    await login.clickOnLoginButton()
    await login.validateSucessfulLogin()
    
})

//Test 2 : invalid username & valid password
test('To verify that the SauceDemo application allows login with a invalid username and valid password' ,async({page})=>{
    
    const usernamevalue=TestData.invalidusername
    const passwordvalue=TestData.validpassword
    const login=new LoginPage(page) //constructor invoking
    await login.navigateToApplication()
    await login.fillUsernameOnUsernameField(usernamevalue)
    await login.fillPasswordOnPasswordField(passwordvalue)
    await login.clickOnLoginButton()
    await login.validateUnsuccessfulLogin()
})

//Test 3 : valid username & invalid password
test('To verify that the SauceDemo application allows login with a valid username and invalid password' ,async({page})=>{
    
    const usernamevalue=TestData.validusername
    const passwordvalue=TestData.invalidpassword
    const login=new LoginPage(page) //constructor invoking
    await login.navigateToApplication()
    await login.fillUsernameOnUsernameField(usernamevalue)
    await login.fillPasswordOnPasswordField(passwordvalue)
    await login.clickOnLoginButton()
    await login.validateUnsuccessfulLogin()
})

//Test 4 : invalid username & invalid password
test('To verify that the SauceDemo application allows login with a invalid username and invalid password' ,async({page})=>{
    
    const usernamevalue=TestData.invalidusername
    const passwordvalue=TestData.invalidpassword
    const login=new LoginPage(page) //constructor invoking
    await login.navigateToApplication()
    await login.fillUsernameOnUsernameField(usernamevalue)
    await login.fillPasswordOnPasswordField(passwordvalue)
    await login.clickOnLoginButton()
    await login.validateUnsuccessfulLogin()
})


//page designing technique : POM (Page Object Model)
//Application is collection of several pages 
//One page : page class, page.spec.js