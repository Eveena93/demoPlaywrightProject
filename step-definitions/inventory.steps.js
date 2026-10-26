import {Given,When,Then,Before,After,BeforeAll,AfterAll,BeforeStep,AfterStep,Status,setDefaultTimeout} from '@cucumber/cucumber'
import {chromium} from 'playwright'
import assert from 'assert'
setDefaultTimeout(30000) 

let browser
let context
let page

BeforeAll(async function(){
    browser=await chromium.launch({headless:false,slomo:1000})
})

AfterAll(async function(){
    if(browser){
        await browser.close()
    }
})

Before(async function(){
    context=await browser.newContext()
    page=await context.newPage()
})

After(async function(scenario){
    try{
        if(scenario.result.status===Status.FAILED){
            const screenshot=await page.screenshot()
            this.attach(screemshot,'image/png')
        }
    }
    catch(err){
        console.log('After hook error',err.message)
    }
    finally{
        if(context){
            await context.close()
        }
    }
    
})

BeforeStep(async function(){
    console.log('The step started')
})

AfterStep(async function(){
    console.log('The step finished')
})

Given('The user is on application login page',async function(){
    await page.goto('https://www.saucedemo.com/',{
        waitUntil:'load',
        timeout:30000
    })
})

When('The user enters username {string} and password {string}', async function(usernameval,passwordval){
    const username=page.locator('#user-name')
    await username.fill(usernameval)
    const password=page.locator('#password')
    await password.fill(passwordval)
    const loginButton=page.locator('#login-button')
    await loginButton.click()
})

Then('The user should see {string}',async function(result){
    if(result==='Inventory page'){
        await page.waitForURL('https://www.saucedemo.com/inventory.html',{timeout:10000})
    }
    else if(result==='Error message'){
        const error=await page.locator('[data-test="error"]').textContent()
        assert.ok(error.includes('Epic sadface'))
    }
})

Then('Inventory item count should be {string}',async function(itemcount){
    if(itemcount==='0')return
    const items=await page.locator('.inventory_item').count()
    assert.strictEqual(items,Number(itemcount))
})