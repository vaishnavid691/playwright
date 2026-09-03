import { test , expect} from '@playwright/test';

//Taking screenshot
/*
test('screenshot', async ({ page }) => {
await page.goto('https://selenium.qabible.in/index.php')
await page.screenshot({ path: 'homepagescreenshots.png' });
await page.pause()
}
)*/

//Visual Compaison - take a screenshot and compare it with the baseline image
test('visual comparison', async ({ page }) => {
await page.goto('https://selenium.qabible.in/index.php')
//await page.screenshot().toMatchSnapshot('One.png');
await expect(await page.screenshot()).toMatchSnapshot('One.png');
await page.pause()
}
)