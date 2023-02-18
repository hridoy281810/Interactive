// function 1
function getInputFieldValueById(inputFiel){
    const inputFieldElement = document.getElementById(inputFiel);
    const inputFieldValueString = inputFieldElement.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputFieldElement.value = inputFieldValue;
    inputFieldElement.value = '';
    return inputFieldValue;
}
 // function 2
function setTextValueById(textId,NewValue){
    const textElement = document.getElementById(textId);
    textElement.innerText = NewValue;  
}

// function 3
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
