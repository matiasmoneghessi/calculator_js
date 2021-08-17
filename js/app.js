//variables
//Declaro todas las variables para su posterior uso.
var result = document.getElementById("result");
var zero = document.getElementById("num-0")
var one = document.getElementById("num-1")
var two = document.getElementById("num-2")
var three = document.getElementById("num-3")
var four = document.getElementById("num-4")
var five = document.getElementById("num-5")
var six = document.getElementById("num-6")
var seven = document.getElementById("num-7")
var eight = document.getElementById("num-8")
var nine = document.getElementById("num-9")
var c = document.getElementById("clean")
var sum = document.getElementById("sum")
var substituyon = document.getElementById("subst")
var multip = document.getElementById("multip")
var div = document.getElementById("div")
var equal = document.getElementById("equal")
var operationA;
var operationB;
var operation;

// Button function
zero.onclick = function (e) {
    result.textContent = result.textContent + "0"
}

one.onclick = function (e) {
    result.textContent = result.textContent + "1"
}

two.onclick = function (e) {
    result.textContent = result.textContent + "2"
}

three.onclick = function (e) {
    result.textContent = result.textContent + "3"
}

four.onclick = function (e) {
    result.textContent = result.textContent + "4"
}

five.onclick = function (e) {
    result.textContent = result.textContent + "5"
}

six.onclick = function (e) {
    result.textContent = result.textContent + "6"
}

seven.onclick = function (e) {
    result.textContent = result.textContent + "7"
}

eight.onclick = function (e) {
    result.textContent = result.textContent + "8"
}

nine.onclick = function (e) {
    result.textContent = result.textContent + "9"
}

//Methods 
function clean() {
    result.textContent = ""
}
function reset() {
    result.textContent = ""
    operationA = 0
    operationB = 0
    operation = ""
}
function reset() {

    result.textContent = ""
    operationA = 0;
    operationB = 0;
    operation = ""
}

//Resolve the operation 
function resolve() {
    var res = 0
    switch (operation) {
        case "+":
            res = parseFloat(operationA) + parseFloat(operationB)
            break
        case "-":
            res = parseFloat(operationA) - parseFloat(operationB)
            break
        case "/":
            res = parseFloat(operationA) / parseFloat(operationB)
            break
        case "x":
            res = parseFloat(operationA) * parseFloat(operationB)
            break
    }
    reset()
    result.textContent = res;
}

// calculator operations 
c.onclick = function (e) {
    reset()
}

sum.onclick = function (e) {
    operationA = result.textContent
    operation = "+"
    clean()
}
substituyon.onclick = function (e) {
    operationA = result.textContent
    operation = "-"
    clean()
}
div.onclick = function (e) {
    operationA = result.textContent
    operation = "/"
    clean()
}
multip.onclick = function (e) {
    operationA = result.textContent
    operation = "x"
    clean()
}
equal.onclick = function (e) {
    operationB = result.textContent
    resolve()
}