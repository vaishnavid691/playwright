import {test,expect} from "@playwright/test";   //import playwright "test" and "expect" , 'test' - lets us create test cases , 'expect' - lets us perform assertions
test("Login Page",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    const username = page.locator("#user-name")
    await username.fill("standard_user")
    const password = page.locator("#password")
    await password.fill("secret_sauce")
    const loginButton = page.locator("#login-button")
    await loginButton.click()

    //Get all products names
    const item = page.locator(".inventory_item_name ")
    const products = await item.allTextContents()
    console.log(products)

    //Selecting the required product
    const itemDescription = await page.locator(".inventory_item_description")
    const myProduct = "Sauce Labs Bolt T-Shirt"
    const count = await item.count()
    console.log(count)

    //Looping and going through all the products
    for (let i=0;i<count;i++){
        if(await itemDescription.locator(".inventory_item_name").nth(i).textContent()===myProduct){
            console.log(await itemDescription.locator(".inventory_item_name").nth(i).textContent())
            await itemDescription.nth(i).locator("text=Add to cart").click()
            break
        }
    }

    //Click on Shopping Cart
    const shoppingCart = page.locator(".shopping_cart_link")
    await shoppingCart.click()

    //Proceed with Checkout
    const checkout = page.locator("#checkout")
    await checkout.click()

    //Enter required details
    const firstName = page.getByPlaceholder("First Name")
    await firstName.fill("Vaishnavi")

    const lastName = page.getByPlaceholder("Last Name")
    await lastName.fill("Dinesh")

    const postalCode = page.getByPlaceholder("Zip/Postal Code")
    await postalCode.fill("679523")

    const continueButton = page.locator("#continue")
    await continueButton.click()

    //Finish the process
    const finishButton = page.locator("#finish")
    await finishButton.click()

    //Validate success message
    //Locates the success message heading
    const successMessage = page.locator(".complete-header")
    const confirmMessage = await successMessage.textContent()
    console.log(confirmMessage)
    await expect(successMessage).toHaveText("Thank you for your order!")

    const successMessage2 = page.locator(".complete-text")
    const confirmMessage2 = await successMessage2.textContent()
    console.log(confirmMessage2)
    await expect(successMessage2).toHaveText("Your order has been dispatched, and will arrive just as fast as the pony can get there!")
    
    await page.pause()
})


