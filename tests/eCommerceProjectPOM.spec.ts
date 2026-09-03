import {test} from "@playwright/test";
import { PageManager } from "../pageTS/PageManager";
import data from "../utils/OrderData.json";
const dataObject = JSON.parse(JSON.stringify(data))

for(let db of data){
test(`LoginPage${db.myProduct}`,async({page})=>{                //concat - 

const PM = new PageManager(page)

const loginPage = PM.getLoginPage()
await loginPage.goto()
await loginPage.validateLogin(db.Username,db.Password)

const productListingPage = PM.getInventoryListing()
await productListingPage.productListing(db.myProduct)
await productListingPage.clickCart()

const checkoutpage = PM.getCheckoutConfirmation()
await checkoutpage.clickCheckoutButton()

const detailsPage = PM.getFinal()
await detailsPage.finalCheckout(db.FN,db.LN,db.PC)
await detailsPage.orderConfirmation()

await page.pause()
})
}