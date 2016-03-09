function add() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

        davidsLib.add(num1, num2, function(err, result) {
        if (err) {
            alert('The program Has timed out');
        } else {
            alert('The total of ' + num1 + ' and ' + num2 + ' is ' + result);
        }
    })
}

function subtract() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

        davidsLib.subtract(num1, num2, function(err, result) {
        if (err) {
            alert('The program Has timed out');
        } else {
            alert('The total of ' + num1 + ' minus ' + num2 + ' is ' + result);
        }
    })
}

function multiply() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

        davidsLib.multiply(num1, num2, function(err, result) {
        if (err) {
            alert('The program Has timed out');
        } else {
            alert('The total of ' + num1 + ' x ' + num2 + ' is ' + result);
        }
    })
}

function divide() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

        davidsLib.divide(num1, num2, function(err, result) {
        if (err) {
            alert('The program Has timed out');
        } else {
            alert('The total of ' + num1 + ' divided by ' + num2 + ' is ' + result);
        }
    })
}