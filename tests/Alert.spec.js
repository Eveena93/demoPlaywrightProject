import{expect, test} from '@playwright/test'
test('Alerts in playwright',async({page})=>{
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    //handle alert dialog before appearing
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toBe('I am a Javascript alert box!')
        await dialog.accept()
    })

    const clickmeButton=page.locator("//button[@class='btn btn-success']")
    await clickmeButton.click()
})