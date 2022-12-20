let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

// function errorAlert() {
//     if (result.value = "") {
//     alert("Please enter a value in both boxes.");
//     }
// }

// let calcPlus = () => {result.value = +num1 + +num2;};

function calculatePlus() {
     result.value =
     +num1.value + +num2.value;
}
function calculateMinus() {
    result.value =
    +num1.value - +num2.value;
}
function calculateMultiply() {
    result.value =
    +num1.value * +num2.value;
}
function calculateDivide() {
    result.value =
    +num1.value / +num2.value;
}
function calculateReset() {
    result.value = "",
    num1.value = "",
    num2.value = ""
}
// function calculatePercent() {
//     result.value =
//     +num1.value % +num2.value;
// }

document.getElementById("calcBtnAdd").addEventListener('click', calculatePlus);
document.getElementById("calcBtnMin").addEventListener('click', calculateMinus);
document.getElementById("calcBtnMul").addEventListener('click', calculateMultiply);
document.getElementById("calcBtnDiv").addEventListener('click', calculateDivide);
document.getElementById("calcBtnReset").addEventListener('click', calculateReset);
// document.getElementById("calcBtnPrc").addEventListener('click', calculatePercent);