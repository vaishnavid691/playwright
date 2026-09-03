import { Locator , Page } from "@playwright/test"
export class CheckoutPage{
    checkout:Locator
    page:Page
    constructor (page:Page){
        this.page=page
        this.checkout = page.locator("#checkout")
    }

async clickCheckoutButton(){
    await this.checkout.click()
}
}
