/// <reference path="namespacesModules.ts" />
//сверху синтаксис импорта 
// в реакте испольщуют модули

// Использование функций и переменных из пространства имен Utils
const myPass = Utils.getPass("Yauhen", 31);
console.log(myPass); // Выводит: "Yauhen31"

console.log(Utils.SECRET); // Выводит: "123321"
console.log(Utils.PI); // Выводит: 3.14

// Примеры использования isEmpty
console.log(Utils.isEmpty("")); // Выводит: true (пустая строка считается "пустой")
console.log(Utils.isEmpty(123)); // Выводит: false (число 123 не является "пустым")
