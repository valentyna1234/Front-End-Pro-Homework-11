//Дано масив з елементами різних типів. 
//Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function calculateArr() {
  let array = ['hi', 5, 'good morning', 10, 'good evening', 20, 'hello', 'good night', 5, 10];
  let sum = 0;
  let count = 0;

  for(let i = 0; i < array.length; i++){
    if (!isNaN(array[i])) {
      count += 1;
      sum += array[i];
    }
  }
  return  arithmeticMean = sum / count;
}

let result = calculateArr();
console.log(`Task 1: Result: `, result);
