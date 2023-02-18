
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
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
