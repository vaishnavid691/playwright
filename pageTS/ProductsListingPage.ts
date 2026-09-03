import { Locator , Page } from "@playwright/test"
export class ProductsListingPage{
    page:Page
    item:Locator
    itemDescription:Locator
    shoppingCart:Locator
    constructor(page:Page){
        this.page=page
        this.item = page.locator(".inventory_item_name")
        this.itemDescription = page.locator(".inventory_item_description")
        this.shoppingCart = page.locator(".shopping_cart_link")
    }

    async productListing(myProduct:string)
    {
        const products = await this.item.allTextContents()
        console.log(products)

        const count = await this.item.count()

        for (let i=0;i<count;i++)
        {
            if(await this.itemDescription.locator(".inventory_item_name").nth(i).textContent()===myProduct)
            {
                console.log(await this.itemDescription.locator(".inventory_item_name").nth(i).textContent())
                await this.itemDescription.nth(i).locator("text=Add to cart").click()
                break
            }
        }
    }

    async clickCart()
{
    await this.shoppingCart.click()
}
}