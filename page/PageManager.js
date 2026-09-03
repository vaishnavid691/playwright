import { LoginPage } from "./LoginPage";
import { ProductsListingPage } from "./ProductsListingPage";
import { CheckoutPage } from "./CheckoutPage";
import { DetailsPage } from "./DetailsPage";

export class PageManager
{
    constructor(page)
    {
        this.page = page
    }

    getLoginPage()
    {
        return new LoginPage(this.page)
    }

    getProductsListingPage()
    {
        return new ProductsListingPage(this.page)
    }

    getCheckoutPage()
    {
        return new CheckoutPage(this.page)
    }

    getDetailsPage()
    {
        return new DetailsPage(this.page)
    }
}