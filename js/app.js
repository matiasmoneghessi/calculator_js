var operationA
var operationB
var operation
var division = null


function getElement() {
    count = document.getElementById('previous')
    result = document.getElementById('current')
    cero = document.getElementById('n0')
    one = document.getElementById('n1')
    two = document.getElementById('n2')
    three = document.getElementById('n3')
    four = document.getElementById("n4")
    five = document.getElementById("n5")
    six = document.getElementById("n6")
    seven = document.getElementById("n7")
    eight = document.getElementById("n8")
    nine = document.getElementById("n9")
    c = document.getElementById("opC")
    plus = document.getElementById("opSum")
    less = document.getElementById("opSub")
    multiplication = document.getElementById("opMult")
    division = document.getElementById("opDiv")
    equal = document.getElementById("opEqual")
}

function onClick() {
    cero.onClick = function (e) {
        count.textContent = count.textContent + '0'
    }

    one.onclick = function (e) {
        count.textContent = count.textContent + '1'
    }

    two.onclick = function (e) {
        count.textContent = count.textContent + '2'
    }

    three.onclick = function (e) {
        count.textContent = count.textContent + '3'
    }

    four.onclick = function (e) {
        count.textContent = count.textContent + '4'
    }

    five.onclick = function (e) {
        count.textContent = count.textContent + '5'
    }

    six.onclick = function (e) {
        count.textContent = count.textContent + '6'
    }

    seven.onclick = function (e) {
        count.textContent = count.textContent + '7'
    }

    eight.onclick = function (e) {
        count.textContent = count.textContent + '8'
    }

    nine.onclick = function (e) {
        count.textContent = count.textContent + '9'
    }

    c.onclick = function (e) {
        reset()
    }

    plus.onclick = function (e) {
        operationA = count.textContent
        operation = '+'
        clean()
    }

    less.onclick = function (e) {
        operationA = count.textContent
        operation = "-"
        clean()
    }

    division.onclick = function (e) {
        operationA = count.textContent
        operation = '/'
        clean()
    }

    multiplication.onclick = function (e) {
        operationA = count.textContent
        operation = 'x'
        clean()
    }

    equal.onclick = function (e) {
        operationB = count.textContent
        resolve()
    }
}

function clean() {
    count.textContent = ''
}

function reset() {
    count.textContent = ''
    result.textContent = ''
    operationA = 0
    operationB = 0
    operation = ''
}

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
    result.textContent = res
}

window.onload = function () {
    getElement()
    onClick()
    clean()
    reset()
    resolve()
}