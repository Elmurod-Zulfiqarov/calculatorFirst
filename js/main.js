var selectedAction = "";
var numberOne = '0';
var input = document.getElementById('screen');
var selectedActionOriginal = '0';

function addNumber(number) {

    if (!input.value.includes('.') || number != '.') {
        if (input.value == '0' && number != '.' || selectedAction.length > 0) {
            input.value = number;
            selectedAction = "";
        } else {
            input.value += number;
        }
    }

}

function action(amal) {
    selectedAction = amal;
    numberOne = input.value;
    selectedActionOriginal = amal;
}


function calc() {

    var result = 0;

    if (selectedActionOriginal == "add") {
        result = parseFloat(numberOne) + parseFloat(input.value);
    } else if (selectedActionOriginal == "subtract") {
        result = parseFloat(numberOne) - parseFloat(input.value);
    } else if (selectedActionOriginal == "divide") {
        result = parseFloat(numberOne) / parseFloat(input.value);
    } else if (selectedActionOriginal == "multiply") {
        result = parseFloat(numberOne) * parseFloat(input.value);
    }

    input.value = result;
}

function clearScreen() {

    selectedAction = "";
    numberOne = 0;
    selectedActionOriginal = "";
    input.value = "0";

}

function square() {

    var dual = 0;
    dual = input.value * input.value;
    input.value = dual;

}

function sqrt() {

    var ildiz = 0;
    ildiz = Math.sqrt(input.value);
    input.value = ildiz;

}

function plusMinus() {

    var inverse;
    if (input.value >= 0) {
        inverse = input.value * (-1);
    } else {
        inverse = (-1) * input.value;
    }
    input.value = inverse;

}

function before() {

    var z = input.value;
    var n = z.length;
    if (n > 1) {
        var end = z.substring(0, n - 1);
        input.value = end;
    } else {
        input.value = 0;
    }

}