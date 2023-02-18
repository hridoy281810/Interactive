
document.getElementById('btn-triangle').addEventListener('click',function(){
    const triangleInputFieldB = getInputFieldValueById('triangle-1');
 
    const triangleInputFieldH = getInputFieldValueById('triangle-2');
    if(isNaN(triangleInputFieldB,triangleInputFieldH) ){
        alert('Triangle !!! All your inputs are blank!!! 😡 Please set values ​​to all inputs and try again❤️');
        return;
    }
  if(triangleInputFieldB & triangleInputFieldH){
    const triangleTotalValue = (triangleInputFieldB * triangleInputFieldH * .5).toFixed(2); 
    setTextValueById('triangle-text',triangleTotalValue );
    return;
}
 else{
    alert('Triangle !!! You have given the value to an input 🙆‍♂️. Try again with all values ​​set.🙅‍♂️')
 } 
})

document.getElementById('btn-rectangle').addEventListener('click',function(){
    const rectangleInputFieldW = getInputFieldValueById('rectangle-1');
    const rectangleInputFieldI = getInputFieldValueById('rectangle-2');
    if(isNaN(rectangleInputFieldW,rectangleInputFieldI) ){
        alert('Rectangle !!! All your inputs are blank!!! 😡 Please set values ​​to all inputs and try again❤️');
        return;
    }
    if(rectangleInputFieldW & rectangleInputFieldI){
        const rectangleTotalValue = rectangleInputFieldI * rectangleInputFieldW ;
        setTextValueById('rectangle-text',rectangleTotalValue );
        return;
    }
     else{
        alert('Rectangle !!! You have given the value to an input 🙆‍♂️. Try again with all values ​​set.🙅‍♂️')
     }
})


document.getElementById('btn-parallelogram').addEventListener('click',function(){
    const parallelogramInputFieldB = getInputFieldValueById('parallelogram-1');
    const parallelogramInputFieldH = getInputFieldValueById('parallelogram-2');
    if(isNaN(parallelogramInputFieldB,parallelogramInputFieldH) ){
        alert('Parallelogram !!! All your inputs are blank!!! 😡 Please set values ​​to all inputs and try again❤️');
        return;
    }
    if(parallelogramInputFieldB & parallelogramInputFieldH){
        const parallelogramTotalValue =parallelogramInputFieldB  * parallelogramInputFieldH  ;
        setTextValueById('parallelogram-text',parallelogramTotalValue );
        return;
    }
     else{
        alert('Parallelogram !!! You have given the value to an input 🙆‍♂️. Try again with all values ​​set.🙅‍♂️')
     }
})

document.getElementById('btn-rhombus').addEventListener('click',function(){
    const rhombusInputFieldD1 = getInputFieldValueById('rhombus-1');
    const rhombusInputFieldD2 = getInputFieldValueById('rhombus-2');
    if(isNaN(rhombusInputFieldD1,rhombusInputFieldD2) ){
        alert(' Rhombus !!!  All your inputs are blank!!! 😡 Please set values ​​to all inputs and try again❤️');
        return;
    }
    if(rhombusInputFieldD1 & rhombusInputFieldD2){
        const rhombusTotalValue = (rhombusInputFieldD1 * rhombusInputFieldD2 * .5).toFixed(2);
        setTextValueById('rhombus-text',rhombusTotalValue );
        return;
    }
     else{
        alert('Rhombus !!! You have given the value to an input 🙆‍♂️. Try again with all values ​​set.🙅‍♂️')
     }
    
})

document.getElementById('btn-pentagon').addEventListener('click',function(){
    const pentagonInputFieldP = getInputFieldValueById('pentagon-1');
    const pentagonInputFieldB = getInputFieldValueById('pentagon-2');
    if(isNaN(pentagonInputFieldP,pentagonInputFieldB) ){
        alert('Pentagon !!! All your inputs are blank!!! 😡 Please set values ​​to all inputs and try again❤️');
        return;
    }
    if(pentagonInputFieldP & pentagonInputFieldB){
        const pentagonTotalValue = (pentagonInputFieldP * pentagonInputFieldB * .5).toFixed(2);
    setTextValueById('pentagon-text',pentagonTotalValue );
        return;
    }
     else{
        alert('Pentagon !!! You have given the value to an input 🙆‍♂️. Try again with all values ​​set.🙅‍♂️')
     }
})

document.getElementById('btn-ellipse').addEventListener('click',function(){
    const ellipseInputFieldA = getInputFieldValueById('ellipse-1');
    const ellipseInputFieldB = getInputFieldValueById('ellipse-2');
    if(isNaN(ellipseInputFieldA,ellipseInputFieldB) ){
        alert('Ellipse !!! All your inputs are blank!!! 😡 Please set values ​​to all inputs and try again❤️');
        return;
    }
    if(ellipseInputFieldA & ellipseInputFieldB){
        const ellipseTotalValue = (ellipseInputFieldA * ellipseInputFieldB * 3.14).toFixed(2);
        setTextValueById('ellipse-text',ellipseTotalValue );
        return;
    }
     else{
        alert('Ellipse !!! You have given the value to an input 🙆‍♂️. Try again with all values ​​set.🙅‍♂️')
     }
})
