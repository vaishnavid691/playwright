import {LoginPage} from "./LoginPage.ts"
import { ProductsListingPage} from "./ProductsListingPage.ts"
import { CheckoutPage} from "./CheckoutPage.ts"
import { DetailsPage } from "./DetailsPage.ts"
import { Page } from "@playwright/test"

export class PageManager{
    page:Page
    loginPage:LoginPage
    inventoryListing:ProductsListingPage
    checkoutConfirmation:CheckoutPage
    final:DetailsPage

    constructor(page:Page){
        this.page=page
        this.loginPage = new LoginPage(page)
        this.inventoryListing = new ProductsListingPage(page)
        this.checkoutConfirmation = new CheckoutPage(page)
        this.final = new DetailsPage(page)
    }

    getLoginPage(){
        return this.loginPage
    }

    getInventoryListing(){
        return this.inventoryListing
    }

    getCheckoutConfirmation(){
        return this.checkoutConfirmation
    }

    getFinal(){
        return this.final
    }
}