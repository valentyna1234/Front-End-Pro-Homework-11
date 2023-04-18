//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
//'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
//Вихідний рядок та символи для видалення задає користувач.

function removeChars(string, chars) {

    let result ='';
    for (let i = 0;  i < string.length; i++) {
        let char = string[i];
        let found = false;
        for (let j = 0; j < chars.length; j++) {
            if (char === chars[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result += char;
        }
    }
    return result;
}

let string = prompt("Enter the string");
let charsSimple = prompt("Enter the chars for delet from the string");
let chars = charsSimple.split('');

let func = removeChars(string, chars);
console.log(`Task 4: `, func);







