//const name = 'Максим';
//const job = 'Font-End разработчик';
//const result1 = name +''+ job;
//const result2 = '${name}${job}';

//задание 1

//const myName = 'dima';
//const programmingLanguage = 'js';
//const courseCreatorName = 'Бренданом Айком';
//const reasonText = 'нравится';
//const numberOfMonth = '6 месяцев';
/*
alert(Всем привет! Меня зовут, ${myName}.)
alert(сейчас я извучаю язык програмирвоова ${programmingLanguage})
alert(на курске по ${programmingLanguage})
alert(у ${courseCreatorName})
alert(я хочу стать разрмабочикаом потому что ${reasonText})
*/

//задание 2

//let myinfoText = "Всем привет! Меня зовут, ${myName}.сейчас я извучаю язык програмирвоова ${ programmingLanguage } на курске по ${ programmingLanguage } у ${ courseCreatorName } `я хочу стать разрмабочикаом потому что ${reasonText}";
//myinfoText = myinfoText.replaceAll("JS", "JAVASCRIPT");
//myinfoText = myinfoText.toUpperCase();

//console.log(myinfoText)
//console.log(myinfoText.length)
//console.log(myinfoText[0])
//console.log(myinfoText[myinfoText.length - 1])

//задание 3

// const userAnswer = prompt('ваш ответ');

//const userName = prompt('Как вас зовут?').toLowerCase().trim();
//alert(userName);

//задание 4

//const userName = prompt('Как вас зовут?').toLowerCase().trim();
//const userAge = Number(prompt('Сколько вам лет?'));
//console.log(Имя: ${userName}, Возраст: ${userAge});
//alert(Ваше имя: ${userName}, Ваш возраст: ${userAge});


//задание 5
/*
let userString = prompt('Введите текст для обрезки:').trim();
let startSliceIndex = parseInt(prompt('Введите индекс, с которого начнется обрезка строки:'));
let endSliceIndex = parseInt(prompt('Введите индекс, которым нужно закончить обрезку строки:'));

console.log(userString.slice(startSliceIndex, endSliceIndex));

let slicedString = userString.slice(startSliceIndex, endSliceIndex);
alert(Введенная строка: ${userString}\nОбрезанная строка: ${slicedString});
*/
//задание 6
/*
let userText = prompt('ВВЕДИТЕ ТЕКСТ').trim();
let wordFromText = prompt ('ВВЕДИТЕ СЛОВО ИЗ ТЕКСТА').trim();

let indexOfWord = userText.indexOf(wordFromText);
let resultString = userText.slice(0, indexOfWord);

alert(`Результат: ${resultString}`);
*/

//ЗАДАНИЕ 7 

let middleIndex = Math.floor(javaScriptDescription.length / 2);
let slicedString = javaScriptDescription.slice(0, middleIndex);