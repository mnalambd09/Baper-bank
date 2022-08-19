// functional deposit calculation

// function getInputFieldValueById(inputFieldId){
//     const inputField = document.getElementById(inputFieldId);
//     const inputFieldValueString = inputField.value;
//     const inputFieldValue = parseFloat(inputFieldValueString);
//     inputField.value = '';
//     return inputFieldValue;
// }

// function getTextElementById(innerTextId){
//     const innerTextField = document.getElementById(innerTextId);
//     const innerTextFieldString = innerTextField.innerText;
//     const innerTextValue = parseFloat(innerTextFieldString);
//     return innerTextValue;
// }

// function setTextElementValueById(elementId, newValue){
//     const textElement = document.getElementById(elementId);
//     textElement.innerText = newValue;
// }

// document.getElementById('btn-deposit').addEventListener('click', function(){
//     const newDepositAmount = getInputFieldValueById('deposit-field');
//     const preDepositTotal = getTextElementById('deposit-total');
//     const newDepositTotal = preDepositTotal + newDepositAmount;
//     setTextElementValueById('deposit-total', newDepositTotal);
// })

// practice 


document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getinputFieldById('deposit-field');
    const preDepoAmount = getTextFieldById('deposit-total');
    const depositTotal = newDepositAmount+preDepoAmount;
    setTextElementValueById('deposit-total', depositTotal);
    
    const preBalance = getTextFieldById('balance-total');
    const totalBalance = newDepositAmount + preBalance;
    setTextElementValueById('balance-total', totalBalance);
   
})
