import{Given,When,Then} from '@cucumber/cucumber'
import assert from 'assert'
import{chromium} from 'playwright'
//setDefaultTimeout(30000) //set the default timeout for the test case to 60 seconds

let browser
let page


//copy from feature file and paste here to implement the step definition
Given('The user is on the login page',async function(){
    browser=await chromium.launch({headless:false,slomo:1000})
    page=await browser.newPage() 
    await page.goto('https://www.saucedemo.com/')
    
})

When('The user enters valid username and valid password',async function(){
    const username=page.locator('#user-name')
    await username.fill('standard_user')
    const password=page.locator('#password')
    await password.fill('secret_sauce')
    
       
})

When('The user enters invalid username and invalid password',async function(){
    const username=page.locator('#user-name')
    await username.fill('standard_user12')
    const password=page.locator('#password')
    await password.fill('secret_sauce12')
    
       
})

When('The user clicks the login button',async function(){
    const loginButton=page.locator('#login-button')
    await loginButton.click()
})

Then('The user should navigate to the inventory page',async function(){
    await page.waitForURL('https://www.saucedemo.com/inventory.html')
    assert.ok(page.url().includes('https://www.saucedemo.com/inventory.html'))
    await browser.close() // to close browser after execution of the test case
})

Then('An error message should be displayed', async function () {
    const errorMessage = page.locator('[data-test="error"]')
    await errorMessage.waitFor()
    assert.ok(await errorMessage.isVisible())
    assert.ok(await errorMessage.textContent(),'Epic sadface: Username and password do not match any user in this service')
    await browser.close()
})

//npx cucumber-js --import step-definitions/login.steps.js Features/login.feature --publish-quiet
//parameterized BDD : hooks > are block of code that executed at specific pointsduring the test execution
//before all : once before all scenarios
//after all : once after all scenarios
//before : before every scenario
//after : after every scenario
//steps : given , when , then
//before step , after step
//In a feature file there can be any no: of scenarios 
//you can group scenarios and run specific tests with the help of tag (eg : tag =smoke , tag =regression , tag=sanity)
//command to run using tags : px cucumber-js --import step-definitions/login.steps.js Features/login.feature --tags "@ValidLogin"
//command to run using retry mechanism : px cucumber-js --import step-definitions/login.steps.js Features/login.feature --retry 2