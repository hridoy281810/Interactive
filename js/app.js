
document.getElementById('btn-triangle').addEventListener('click',function(){
    const triangleInputFieldB = getInputFieldValueById('triangle-1');
    const triangleInputFieldH = getInputFieldValueById('triangle-2');
    const triangleTotalValue = (triangleInputFieldB * triangleInputFieldH * .5).toFixed(1);
    const triangleResult =  document.getElementById('triangle-text');
    triangleResult.innerText = triangleTotalValue;
    // return totalValue;  
})

document.getElementById('btn-rectangle').addEventListener('click',function(){
    const rectangleInputFieldW = getInputFieldValueById('rectangle-1');
    const rectangleInputFieldI = getInputFieldValueById('rectangle-2');
    const rectangleTotalValue = rectangleInputFieldI * rectangleInputFieldW ;
    const rectangleResult =  document.getElementById('rectangle-text');
    rectangleResult.innerText = rectangleTotalValue;
})
document.getElementById('btn-parallelogram').addEventListener('click',function(){
    const parallelogramInputFieldB = getInputFieldValueById('parallelogram-1');
    const parallelogramInputFieldH = getInputFieldValueById('parallelogram-2');
    const parallelogramTotalValue =parallelogramInputFieldB  * parallelogramInputFieldH  ;
    const parallelogramResult =  document.getElementById('parallelogram-text');
    parallelogramResult.innerText = parallelogramTotalValue;
})

document.getElementById('btn-rhombus').addEventListener('click',function(){
    const rhombusInputFieldD1 = getInputFieldValueById('rhombus-1');
    const rhombusInputFieldD2 = getInputFieldValueById('rhombus-2');
    const rhombusTotalValue = (rhombusInputFieldD1 * rhombusInputFieldD2 * .5).toFixed(1);
    const rhombusResult =  document.getElementById('rhombus-text');
    rhombusResult.innerText = rhombusTotalValue;
    
})
