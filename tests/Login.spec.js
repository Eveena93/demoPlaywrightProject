import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
//import TestData from '../utils/TestData.json' with {type :'json'}
import {readExcelFile} from '../utils/excelRead.js' //importing the excelRead.js file to read the data from excel file
import {faker} from '@faker-js/faker' //importing the faker library to generate random data
//Test 1 : valid username & valid password
test('SauceDemo allows login with a valid username and password', async ({ page })=>{
   
    const usernamevalue= await readExcelFile(2,1) //reading the data from excel file
    const passwordvalue= await readExcelFile(2,2) //reading the data from excel file
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
test.only('To verify that the SauceDemo application allows login with a invalid username and invalid password' ,async({page})=>{
    
    const usernamevalue=faker.person.fullName()
    const passwordvalue=faker.internet.password()
   //const usernamevalue=TestData.invalidusername
   //const passwordvalue=TestData.invalidpassword
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
//workers : used for parallel execution : 4 testcases use 4 workers and open 4 browser windows for execution parallely 
//retry mechanism : tests failing due to flaky testcases : testcases failing without any issue in script : due to env ,connections etc
//retry 2 : means failed test taking retry chances to execute again 
//codegen : tool of playwright. record the actions and generate the script . it is not capable of doing POM 
//command : npx playwright codegen <application url>
//codegen : mainly uses data test locators not like xpath , id : example of codegen code
/*import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});
*/
//copilot : enable copilot chat in vscode for code completion
//allure commandline : npm install allure-commandline --save-dev
//allure report command : npx allure generate allure-results --clean 
//allure report open command : npx allure open allure report