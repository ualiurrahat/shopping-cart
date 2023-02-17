// task:plus button work for button-mobile-plus
// 1. add event listener to btn case plus 
document.getElementById('btn-mobile-plus').addEventListener('click', function () {
    const newMobileNumber = updateMobileNumber(true);
    updateMobileTotalPrice(newMobileNumber);
    calculateSubTotal();
});
// task: minus button work for button-mobile-minus
document.getElementById('btn-mobile-minus').addEventListener('click', function () {
    const newMobileNumber = updateMobileNumber(false);
     updateMobileTotalPrice(newMobileNumber);
     calculateSubTotal();
});