let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

// function errorAlert() {
//     if (result.value = "") {
//     alert("Please enter a value in both boxes.");
//     }
// }

// advanced function
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
function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        let key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    let regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

document.getElementById("calcBtnAdd").addEventListener('click', calculatePlus);
document.getElementById("calcBtnMin").addEventListener('click', calculateMinus);
document.getElementById("calcBtnMul").addEventListener('click', calculateMultiply);
document.getElementById("calcBtnDiv").addEventListener('click', calculateDivide);
document.getElementById("calcBtnReset").addEventListener('click', calculateReset);
