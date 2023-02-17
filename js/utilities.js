
// function to update case number for button-case
function updateCaseNumber(isIncrease) {
    // get case number value from btn case input field
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    // convert value into integer
    const previousCaseNumber = parseInt(caseNumberString);
    // calculate new case number
    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    // set the new case number value on case number field.
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
// function to calculate total price for cases.
function updatecaseTotalPrice(newCaseNumber)
{
    const caseTotalPriceElement = document.getElementById('case-total-price');
    const newCaseTotalPrice = newCaseNumber*59;
    caseTotalPriceElement.innerText = newCaseTotalPrice;
}
// function to updatee mobile number.
function updateMobileNumber(isIncrease) {
    // get mobile number value from mobile input field
    const mobileNumberField = document.getElementById("mobile-number-field");
    const mobileNumberString = mobileNumberField.value;
    // convert value into integer
    const previousMobileNumber = parseInt(mobileNumberString);
    // calculate new case number
    let newMobileNumber;
    if (isIncrease === true) {
        newMobileNumber = previousMobileNumber + 1;
    }
    else {
        newMobileNumber = previousMobileNumber - 1;
    }
    // set the new mobile number value on mobile number field.
    mobileNumberField.value = newMobileNumber;
    return newMobileNumber;
}
// function to calculate total price for mobiles.
function updateMobileTotalPrice(newMobileNumber)
{
    const mobileTotalPriceElement = document.getElementById('mobile-total-price');
    const newMobileTotalPrice = newMobileNumber*1219;
    mobileTotalPriceElement.innerText = newMobileTotalPrice;
}
// function to get value as numbers from an element
function getElementValueById(elementId)
{
    const elementField = document.getElementById(elementId);
    const elementValueString = elementField.innerText;
    const elementValue = parseInt(elementValueString);
    return elementValue;
}
// function to set value as numbers of an element
function setElementValueById(elementId, newValue)
{
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}
// function to calculate total amount: subtotal,tax,final-total
function   calculateSubTotal()
{
    const mobileTotalPrice = getElementValueById('mobile-total-price');
    const caseTotalPrice = getElementValueById('case-total-price');

    const subTotalPrice = mobileTotalPrice+caseTotalPrice;
    // set the total price to sub-total
    setElementValueById('sub-total', subTotalPrice);
    // calculate tax: as 12% of the bill
    const taxPriceString = (subTotalPrice*0.12).toFixed(2);
    const taxPrice = parseFloat(taxPriceString);
    // set tax price
    setElementValueById('tax-total', taxPrice);

    // set final price
    const finalPrice = subTotalPrice + taxPrice;
    // set final price
    setElementValueById('final-total', finalPrice);
}