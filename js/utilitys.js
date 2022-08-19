function getinputFieldById(inputFieldId){
    const depoinField = document.getElementById(inputFieldId);
    const depoinFieldString = depoinField.value;
    const depoinFieldVelue = parseFloat(depoinFieldString);
    depoinField.value = '';
    return depoinFieldVelue;
}

function getTextFieldById(textFieldId){
    const predepoTextField = document.getElementById(textFieldId);
    const predepoTextFieldString = predepoTextField.innerText;
    const depopreValue = parseFloat(predepoTextFieldString);
    return depopreValue;
}

function setTextElementValueById(preValue, NewValue){
    const textElement = document.getElementById(preValue);
    textElement.innerText = NewValue;
}