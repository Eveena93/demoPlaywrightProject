import{expect, test} from '@playwright/test'
test('Calendar validation in playwright',async({page})=>{
    await page.goto("https://selenium.qabible.in")
    await page.locator('.nav-item').nth(2).click()
    const dateInput=page.locator('#single-input-field')
    await dateInput.click()
    await expect(page.locator('.datepicker-dropdown')).toBeVisible()
    const targetYear=1997
    const switchButton=page.locator('.datepicker-switch:visible')
    await switchButton.click()
    await switchButton.click()
    let attempts=10
    while(attempts--){
        const decadeText=await switchButton.innerText() //to fetch decade text 2020-2029
        const startYear=parseInt(decadeText.split('-')[0].trim())// trim to 2020
        if (targetYear>=startYear&&targetYear<=startYear+9)
        break
        await page.locator('.prev:visible').click()
    
    }
    await page.locator('.year:visible').filter({hasText:'1997'}).click()
    await page.locator('.month:visible').filter({hasText:'Sep'}).click()
    await page.locator('.day:not(.old):not(.new)',{hasText:/^14$/}).click()// the class for old month days -disabled is old day and it is two seperate classes , so select old
    const showButton=page.locator('#button-one')
    await showButton.click()
})