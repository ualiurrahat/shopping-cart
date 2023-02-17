
// task:plus button work for button-case-plus
// 1. add event listener to btn case plus 
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updatecaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});
// task: minus button work for button-case-minus
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
     updatecaseTotalPrice(newCaseNumber);
     calculateSubTotal();
});