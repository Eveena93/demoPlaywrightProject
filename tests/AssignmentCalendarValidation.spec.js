import{test,expect} from '@playwright/test'
test('Handling calendar validations in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/date-picker.php')
    const dateInput=page.locator('#single-input-field')
    await dateInput.click() //Open the Calendar
    await expect(page.locator('.datepicker-dropdown')).toBeVisible() //Verify Calendar Appears
    const targetYear=1870 //Set Target Year
    const switchButton=page.locator('.datepicker-switch:visible')//Locate Calendar Header
    await switchButton.click() //Move From Day View to Year View
    await switchButton.click()
    let attempts=15
    //Loop Until Correct Decade Appears
    while(attempts--){
        const decadeText=await switchButton.innerText() //Read the Decade
        const startYear=parseInt(decadeText.split('-')[0].trim()) //Extract Starting Year
        if (targetYear>=startYear&&targetYear<=startYear+9) //Check if Target Year Exists in Current Decade
        break  //Stop the Loop
        await page.locator('.prev:visible').click() //Otherwise Go to Previous Decade
    
    }
    await page.locator('.year:visible').filter({hasText:'1870'}).click() //Select Year 1870
    await page.locator('.month:visible').filter({hasText:'Oct'}).click() //Select October
    await page.locator('.day:not(.old):not(.new)',{hasText:/^20$/}).click() //Select Day 20
    const showButton=page.locator('#button-one') //locate and click show button
    await showButton.click()
})
