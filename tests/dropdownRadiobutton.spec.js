import{test} from '@playwright/test'
test('handling dropdown in playwright',async({page})=>{
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    const dropDown=page.locator("#dropdowm-menu-1")
    //await dropDown.selectOption({index:2})
    //await dropDown.selectOption({value:'C#'})
    await dropDown.selectOption({label:'SQL'})

})

test('handling checkbox in playwright',async({page})=>{
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    const checkBox=page.locator("//input[@value='option-1']")
    await checkBox.check()
    //await checkBox.uncheck()
    //assertion - checkbox
    console.log(await checkBox.isChecked())
    //to check url : tohaveurl , to check title : tohavetitle

})

test('handling radiobutton in playwright',async({page})=>{
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    const radioButton=page.locator("//input[@value='yellow']")
    await radioButton.click()
    

})