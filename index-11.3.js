//Написати функцію заповнення даними користувача двомірного масиву. 
//Довжину основного масиву і внутрішніх масивів задає користувач. 
//Значення всіх елементів всіх масивів задає користувач.

function arrayAdd() {
    let array = [];
    let parentArray = prompt("Enter the length of the main array");
    for(let i = 0; i < parentArray; i++) {
        array.push([]);
        let childArray = prompt("Enter the length of the internal arrays " + (i + 1));
        for(let j = 0; j < childArray; j++) {
            let element = prompt("Enter element values ​​for the " + (j) + " array index");
            array[i].push(element);
        }
    }
    console.log(`Task 3: `, array);
}
let functionResult = arrayAdd();
