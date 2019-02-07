"use strict";

//объект
let persone = {
	name: "John",
	age: 25,
	isMarried: false
};

console.log(persone);

//массив
let arr = ['orange.png','plum.jpg','apple.bmp'];
console.log(arr[0]);

//alert("hello world");

// let answer = confirm("Are you here?");
// console.log(answer);

// let answer = +prompt("Есть ли вам 18?", "Да");
// console.log(typeof(answer));

// console.log("arr" + " object"); //строка
// console.log(4 + " object"); //тоже строка

let incr = 10, //инкремент
		decr = 10; //декримент

// console.log(++incr); //Префиксный инкремент
// console.log(--decr); //Префиксный декремент

console.log(incr++); //Постфиксный инкремент
console.log(decr--); //Постфиксный декремент

console.log(5%2); //остаток от деления
console.log("2" == 2); //сравнение по значению true
console.log("2" === 2); //сравнение по типам данных false

let isChecked = true,
		isClose = false;

console.log(isChecked && isClose); // оператор сравнения