import { Locator , Page }  from "@playwright/test"
import{expect} from "@playwright/test"
export class DetailsPage{
    firstName:Locator
    lastName:Locator
    postalCode:Locator
    continueButton:Locator
    finishButton:Locator
    successMessage:Locator
    page:Page
    constructor(page:Page){
        this.page=page
        this.firstName = page.getByPlaceholder("First Name")
        this.lastName = page.getByPlaceholder("Last Name")
        this.postalCode = page.getByPlaceholder("Zip/Postal Code")
        this.continueButton = page.locator("#continue")
        this.finishButton = page.locator("#finish")
        this.successMessage = page.locator(".complete-header")
    }

async finalCheckout(firstName:string,lastName:string,postalCode:string){
    await this.firstName.fill("Vaishnavi")
    await this.lastName.fill("Dinesh")
    await this.postalCode.fill("679523")
    await this.continueButton.click()
    await this.finishButton.click()
}

async orderConfirmation(){
    const confirmMessage:string | null = await this.successMessage.textContent()
    console.log(confirmMessage)
    //await expect(confirmMessage).not.toBeNull();
    await expect(this.successMessage).toHaveText(confirmMessage??"")
    await this.page.pause()
}


}