import{test} from '@playwright/test'

test('Locators in playwright',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    const usernameField=page.locator('#user-name') //id locator > uses #
    //const passwordfield=page.locator('.input_error form_input') //class locator> uses .
    const passwordField=page.locator("//input[@id='password']")
    const loginButton=page.locator("//input[@id='login-button']")
    //await usernamefield.type('Eveena')//type : does not have the ability to erase the previous data
    //await usernamefield.type('Edison')
    //fill
    await usernameField.fill('standard_user')
    await passwordField.fill('secret_sauce')
    //click
    await loginButton.click()
    //special locators
    //aria-accessible rich internet applications

    await page.pause()


})

// relative xpath :  syntax : //tagname[@attribute='attribute value'] | *[@id="user-name"]
// x path using text : //tagname[text()='sample text']
// absolute xpath : selection from root node


test('Special locators in playwright',async({page})=>{
    await page.goto("https://groceryapp.uniqassosiates.com/admin/login")
    const userName=page.locator("//input[@name='username']")
    await userName.fill("admin")
    const password=page.locator("//input[@name='password']")
    await password.fill("admin")
    const signinButton=page.locator("//button[text()='Sign In']")
    await signinButton.click()
    await page.goto("https://groceryapp.uniqassosiates.com/admin/list-admin")
    //await page.getByRole("button").nth(5).click()
    await page.getByText('Active').nth(1).click()

    await page.pause()

})