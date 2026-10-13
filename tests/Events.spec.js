import{test,except} from '@playwright/test'
test('Events in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
    const mousehover=page.locator('#others')
    await mousehover.hover()
})