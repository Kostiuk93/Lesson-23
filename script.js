"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello.");
    }
};

const john = Object.create(soldier); //Современный синтаксис. Искользовать его! ЗАПОМНИТЬ!

// const john = {
//     health: 100,
// }

// john.__proto__ = soldier; //устаревший синтаксис, можно встретить в проэктах, но использовать нельзя!

// Object.setPrototypeOf(john, soldier); //Один из  современных синтаксисов. ЗАПОМНИТЬ!

console.log(john.armor);
john.sayHello();