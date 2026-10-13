import{test,expect} from '@playwright/test'
test('Handling alerts in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/javascript-alert.php')
    //handling alert dialog before appearing
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toBe('Press a button!')
        await dialog.dismiss() // to click cancel button on the alert dialog
    })

    const clickButton=page.locator("//button[@class='btn btn-warning']")
    await clickButton.click()
    await expect(page.locator('#confirm-demo')).toHaveText('You pressed Cancel!')
})