
function getInputFieldValueById(inputFiel){
    const inputFieldElement = document.getElementById(inputFiel);
    const inputFieldValueString = inputFieldElement.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputFieldElement.value = inputFieldValue;
    inputFieldElement.value = '';
    return inputFieldValue;
}
 
function setTextValueById(textId,NewValue){
    const textElement = document.getElementById(textId);
    textElement.innerText = NewValue; 

}

