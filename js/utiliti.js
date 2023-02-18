
function getInputFieldValueById(inputFiel){
    const inputFieldElement = document.getElementById(inputFiel);
    const inputFieldValueString = inputFieldElement.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputFieldElement.value = inputFieldValue;
    return inputFieldValue;
}
