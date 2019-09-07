const calcNumber = document.querySelectorAll('.calc-btn');
const calcOperator = document.querySelectorAll('.calc-opr');
const displayInput = document.querySelector('#calc-input');
const clearBtn = document.querySelector('.clear-btn')
const calcResult = document.querySelector('.calc-eql')
const displayResult = document.querySelector('#calc-result');

let calcArray = [];
// let arrtwo = [];
function appendDiv(){
    var btn = this.textContent
    var ans = calcArray.push(btn)
    displayInput.innerHTML = calcArray.join("")
}

function appendOperator(){
    if (calcArray.length === 0){
        displayResult.innerHTML = 0
    } else {
        var btn = this.textContent
        var ans = calcArray.push(btn)
        displayInput.innerHTML = calcArray.join("")
    }
}

// NUMBERS BUTTON EVENT
    for (var i = 0; i < calcNumber.length; i++) {
        calcNumber[i].addEventListener("click", appendDiv)
      }

// OPERATOR BUTTON EVENT
for (var j = 0; j < calcOperator.length; j++) {
    calcOperator[j].addEventListener("click", appendOperator)
}

// EQUALS TO BUTTON EVENT
calcResult.addEventListener('click', function() {
    if(calcArray.length === 0){
        displayResult.innerHTML = 0
    } else {
        var ans = calcArray.join("")
        displayResult.innerHTML = eval(ans)
    }
})

// CLEAR BUTTON
clearBtn.addEventListener('click', function() {
    calcArray.splice(0, calcArray.length)
    displayResult.innerHTML = 0
    displayInput.innerHTML = 0
})

