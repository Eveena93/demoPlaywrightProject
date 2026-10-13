import{test,expect} from '@playwright/test'
test('Dynamic visual testing in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in')
    //await page.waitForLoadState('networkidle')
    //hiding banners and sliders
    await page.locator('.carousel').evaluate((element)=>{
        element.style.display='none'
        
        })
        await expect(page).toHaveScreenshot('obsqura.png',{
            threshold:0.2
    })

})