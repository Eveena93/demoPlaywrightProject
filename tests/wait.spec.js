import {test,expect} from "@playwright/test";

test('Waits',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.waitForLoadState('networkidle')
})