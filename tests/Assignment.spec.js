import{test} from '@playwright/test'
test('Simple Form',async({page})=>{
    await page.goto('https://selenium.qabible.in')
    await page.locator('.nav-item').nth(1).click()
    await page.locator('.list-group-item').nth(0).click()
    await page.locator('#single-input-field').fill("Hello World!!")
    await page.locator("//button[text()='Show Message']").click()
    await page.locator('#value-a').fill("Value A")
    await page.locator('#value-b').fill("Value B")
    await page.locator("//button[text()='Get Total']").click()


})

test('Checkbox Demo',async({page})=>{
     await page.goto('https://selenium.qabible.in')
     await page.locator('.nav-item').nth(1).click()
     await page.locator('.list-group-item').nth(1).click()
     await page.locator('#gridCheck').check()
     await page.locator('#check-box-one').check()
     await page.locator('#check-box-two').check()
     await page.locator('#check-box-three').check()
     await page.locator('#check-box-four').check()
     await page.locator('#check-box-three').uncheck()
     await page.locator("//button[text()='Select All']").click()

})

test('Radio Buttons Demo',async({page})=>{
    await page.goto('https://selenium.qabible.in')
    await page.locator('.nav-item').nth(1).click()
    await page.locator('.list-group-item').nth(2).click()
    await page.locator('#inlineRadio2').click()
    await page.locator("//button[text()='Show Selected Value']").click()
    await page.locator('#inlineRadio21').click()
    await page.locator('#inlineRadio23').click()
    await page.locator("//button[text()='Get Results']").click()

})

test('Select Input',async({page})=>{
    await page.goto('https://selenium.qabible.in')
    await page.locator('.nav-item').nth(1).click()
    //await page.locator('.list-group-item').nth(3).click()
    await page.locator("//a[text()='Select Input']").click()
    await page.locator('#single-input-field').selectOption({label:'Green'})

})