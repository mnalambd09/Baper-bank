// function getwithdrawFieldValueById(inputFieldId){
//     const withdrawInput = document.getElementById(inputFieldId);
//     const withdrawInputString = withdrawInput.value;
//     const withdrawInputValue = parseFloat(withdrawInputString);
//     withdrawInput.value = '';
//     return withdrawInputValue;
// }

// function getwithdrawTextValueById(textFieldId){
//     const preWithdrawAmount = document.getElementById(textFieldId);
//     const preWithdrawAmountString = preWithdrawAmount.innerText;
//     const preWithdrawAmountValue = parseFloat(preWithdrawAmountString);
//     return preWithdrawAmountValue; 
// }

// function setTextElementValueById(preWithdraw, newWithdraw){
//     const preWithdrawTotal = document.getElementById(preWithdraw);
//     preWithdrawTotal.innerText = newWithdraw;
// }

// document.getElementById('btn-withdraw').addEventListener('click', function(){
//     const newWithdrawAmount = getwithdrawFieldValueById('withdraw-field');
//     const preWithdrawAmount = getwithdrawTextValueById('withdraw-total');
//     const withdrawTotal = preWithdrawAmount + newWithdrawAmount;
//     setTextElementValueById('withdraw-total', withdrawTotal);

//     const preBalance = getwithdrawTextValueById('balance-total');
//     const totalMainBalance = preBalance - newWithdrawAmount;
//     setTextElementValueById('balance-total', totalMainBalance);
// })

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getinputFieldById('withdraw-field');
    const preWithdrawAmount = getTextFieldById('withdraw-total');
    const withdrawTotal = preWithdrawAmount + newWithdrawAmount;
    setTextElementValueById('withdraw-total', withdrawTotal);

    const preBalance = getTextFieldById('balance-total');
    const totalMainBalance = preBalance - newWithdrawAmount;
    setTextElementValueById('balance-total', totalMainBalance);
})