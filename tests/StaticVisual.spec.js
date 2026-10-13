import{test,expect} from '@playwright/test'
test('Static visual testing in playwright',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    //baseline screenshot
    //await page.waitForLoadState('networkidle') --incase if page is not loading
    await expect(page).toHaveScreenshot('Saucedemo1.png',{
        threshold:0.2
    })


})