import { SECRET, PI, getPass, isEmpty } from "./modules";

// Используем импортированные функции и переменные
console.log(SECRET);                    // Выводит: "123321"
console.log(PI);                        // Выводит: 3.14
console.log(getPass("a", 2));           // Выводит: "a2"
console.log(isEmpty(123));              // Выводит: false

const myPI = 6;   // Это ок, так как myPI здесь не пересекается с PI