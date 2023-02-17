
// function to update case number for button-case
function updateCaseNumber(isIncrease) {
    // get case number value from btn case input field
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    // convert value into integer
    const previousCaseNumber = parseInt(caseNumberString);
    // calculate new case number
    let newCaseNumber;
    if (isIncrease) {
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
    if (isIncrease) {
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