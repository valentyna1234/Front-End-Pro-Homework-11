//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
//У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
//Вивести результат математичної дії, вказаної в змінній znak.
//Обидва числа і знак виходять від користувача.
    
function doMath(x, znak, y) {
    x = Number(prompt('Enter the first value.' ));
    y = Number(prompt('Enter the second value.' ));
    znak = prompt( 'Enter option you want to do: +, -, *, /, % or ^' );
    let result;

    switch (znak) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;  
        case "%":
            result = x % y;
            break;
        case "^":
            result = Math.pow(x,y);
            break;    
    }

    return result;
}

let functionResultSecond = doMath();
console.log(`Task 2: `, functionResultSecond);