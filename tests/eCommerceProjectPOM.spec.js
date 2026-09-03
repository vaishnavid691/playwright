import test,{expect} from "@playwright/test";
import { PageManager } from "../page/PageManager";
import data from "../utils/OrderData.json";

const dataObject = JSON.parse(JSON.stringify(data))
for(let db of data){
test(`LoginPage${db.myProduct}`,async({page})=>{                //concat - 

    const PM = new PageManager(page)

    const loginPage = PM.getLoginPage()
    await loginPage.goto()
    await loginPage.validateLogin(db.Username,db.Password)

    const productListingPage = PM.getProductsListingPage()
    await productListingPage.productListing(db.myProduct)
    await productListingPage.clickCart()

    const checkoutpage = PM.getCheckoutPage()
    await checkoutpage.clickCheckoutButton()

    const detailsPage= PM.getDetailsPage()
    await detailsPage.finalCheckout(db.FN,db.LN,db.PC)
    await detailsPage.orderConfirmation()

    await page.pause()
})
}