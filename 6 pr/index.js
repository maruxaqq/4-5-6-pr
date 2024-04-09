//Задание 1
// function getName1(name) {
//     console.log("Привет, " + name);
//   }
//   getName1("Мотя");

//   const getName2 = function(name) {
//     console.log("Привет, " + name);
//   };
//   getName2("Исидор");

//   const getName3 = (name) => {
//     console.log("Привет, " + name);
//   };
//   getName3("Олег");

//Задание 2

// function getSumOfNumbers(number, type) {
//   let summ = 0;
//   if (type == "even") {
//     for (let i = 0; i <= number; i + 2) {
//       summ += number;
//       number -= 2;
//     }
//     return summ;
//   } else if (type == "odd") {
//     for (let i = 0; i <= number; i++) {
//       if (i % 2 == 1) {
//         summ += i;
//       }
//     }
//     return summ;
//   } else if (type == "") {
//     for (let i = 0; i <= number; i++) {
//       summ += i;
//     }
//     return summ;
//   }
// }

// console.log(getSumOfNumbers(10, "odd"));
// console.log(getSumOfNumbers(10, "even"));
// console.log(getSumOfNumbers(10, ""));

//задача 3

function getDivisorsCount(a) {
    let count = 0;
    for (let i = 1; i <= a; i++) {
      if (a % i === 0) {
        count++;
      }
    }
  
    return count;
  }
  console.log(getDivisorsCount(5));