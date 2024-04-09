//задание 1



var existedUserLogin = "the_best_user";
var existedUserPassword = "12345678";


var userLogin = prompt("Введите логин");
var userPassword = prompt("Введите пароль");


userLogin = userLogin.trim();
userPassword = userPassword.trim();


if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
    alert("Добро пожаловать, " + userLogin);
} else {
    alert("Логин и (или) Пароль введены неверно!");
}


//задание 2
/*
const correctAnswers = 0;
const incorrectAnswers = 0;

let answer = Number(prompt("Сколько будет 2 + 2?"));
if (answer === 4) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

answer = Number(prompt("Сколько будет 2 * 2?"));
if (answer === 4) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

answer = Number(prompt("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"));
if (answer === 1) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

answer = Number(prompt("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"));
if (answer === 12) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

answer = Number(prompt("Сколько будет 2 + 2 * 2?"));
if (answer === 6) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);
*/


//задание 3
/*
function askQuestion() {
    var question1 = confirm('JavaScript появился в 1995 году?');
    if (question1) {
      alert('Верно');
    } else {
      alert('Неверно. JavaScript появился в 1995 году.');
    }
  
    var question2 = confirm('Спецификация JavaScript называется ECMAScript?');
    if (question2) {
      alert('Верно');
    } else {
      alert('Неверно. Спецификация JavaScript называется ECMAScript.');
    }
  
    var question3 = confirm('JavaScript был создан за 1 месяц?');
    if (question3) {
      alert('Неверно. JavaScript был создан за 10 дней.');
    } else {
      alert('Верно');
    }
  }
  */

//задание 4
/*
do {
    let newStudent = prompt('Введите имя нового студента');
    if (newStudent) {
        console.log(`Добро пожаловать, ${newStudent}!`);
    }
    i++;
} while (i < 3);
*/

//задание 5

// let sum = 0;

// for(let i = 0; i <= 100; i++){
//   sum += i;
// }

// alert(sum);