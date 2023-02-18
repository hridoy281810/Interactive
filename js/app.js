
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
