export class CheckoutPage{
    constructor (page){
        this.page=page
        this.checkout = page.locator("#checkout")
    }

async clickCheckoutButton(){
    await this.checkout.click()
}
}
