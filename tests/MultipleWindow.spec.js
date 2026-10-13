import{expect, test} from '@playwright/test'
test('Handling multiple windows in playwright',async({page,context})=>{
    await page.goto("https://demo.guru99.com/popup.php")
    const window=context.waitForEvent('page')
    const clickHerelink=page.locator("//a[text()='Click Here']")
    await clickHerelink.click()
    const newWindow=await window
    await newWindow.waitForLoadState()
    const email=newWindow.locator("//input[@name='emailid']")
    await email.fill('eveenaedison1993@gmail.com')
    const submitButton=newWindow.locator("//input[@name='btnLogin']")
    await submitButton.click()



})