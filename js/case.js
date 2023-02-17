
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

// task:plus button work for button-case-plus
// 1. add event listener to btn case plus 
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    const caseTotalPriceElement = document.getElementById('case-total-price');
    const newCaseTotalPrice = newCaseNumber*59;
    caseTotalPriceElement.innerText = newCaseTotalPrice;
});

// task: minus button work for button-case-minus
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    const caseTotalPriceElement = document.getElementById('case-total-price');
    const newCaseTotalPrice = newCaseNumber*59;
    caseTotalPriceElement.innerText = newCaseTotalPrice;
});