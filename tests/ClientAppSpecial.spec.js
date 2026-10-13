const { test,expect } = require("@playwright/test");

test("ClientApp login", async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.getByRole("button",{name:'Login'}).click()
    await page.waitForLoadState('networkidle')
    await page.locator(".inventory_item_name").first().waitFor()
    const titles=await page.locator(".inventory_item_name").allTextContents()
    console.log(titles)
    const productname="Sauce Labs Backpack"
    const product=page.locator(".inventory_item_name")
    const count=await product.count()
    console.log(count)
    for(let i=0;i<count;i++){
        if(await product.nth(i).textContent()===productname){
            await page.locator(".inventory_item").nth(i).getByRole("button",{name:'Add to cart'}).click()
            break
        }

    }
    //await page.getByRole("link",{name:'shopping_cart_container'}).click()
    await page.locator("#shopping_cart_container").click()
    await page.getByRole("button",{name:'Checkout'}).click()
    await page.getByPlaceholder("First Name").fill("Eveena")
    await page.getByPlaceholder("Last Name").fill("Edison")
    await page.getByPlaceholder("Postal Code").fill("L4Z 4J1")
    await page.getByRole("button",{name:'Continue'}).click()
    await page.locator(".inventory_item_name").waitFor()
    await expect(page.getByText("Item total: $29.99")).toBeVisible()
    await page.getByRole("button",{name:'Finish'}).click()
    await expect(page.getByText("Thank you for your order!")).toBeVisible()
    await page.pause()
})