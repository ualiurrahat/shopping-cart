// add event listener to btn case plus 
document.getElementById('btn-case-plus').addEventListener('click', function(){
    console.log("clicked");
    // get value from btn case input field
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value; 
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber+1;
    caseNumberField.value = newCaseNumber;
});