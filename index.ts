// array type
let list: number[] = [1, 2, 3];

//generic type
let list2: Array<number> = [1, 2, 3];

//tuple type
let x: [string, number];
x = ["hello", 10];
let y: [string, boolean] = ["eee", false];

//enum
enum Directions {
  Up, // по умолчанию как индексы в массиве
  Down,
  Left = 8,
  Right, //из-за того что предыдущий имеет значение 8 тут автоматически будет 9
}
Directions.Up; //0
Directions.Left; //8
Directions.Right; //9
Directions[1]; //Down

// Custom name for keys
enum links {
  youtube = "https://youtube.com/",
  vk = "https://vk.com/",
  facebook = "https://facebook.com/",
}
// Using
console.log(links.vk); // "https://vk.com/"

var links2; // Объявляем переменную для хранения значений из перечисления

// Самовызывающаяся функция (IIFE) для создания перечисления (enum)
(function (links2) {
  // Присваиваем каждому ключу соответствующее строковое значение (URL)
  links["youtube2"] = "https://youtube.com/";
  links["vk2"] = "https://vk.com/";
  links["facebook2"] = "https://facebook.com/";
})(links2 || (links2 = {})); // Если links уже существует, используем его; иначе создаем новый объект

// Теперь объект links содержит три свойства с URL-адресами
// Пример использования:
// console.log(links.youtube); // "https://youtube.com/"

// object type
const create = (o: object | null): void => {};
create({ a: 1 });

//multiple types for one value (union)
let id: number | string;
id = 10;
id = "addf";

//type
type Name = string;
let myName: Name = "aaa";

//functions
const createPassword = (name?: string, age: number | string = 20): string =>
  `${name}${age}`;

//REST
const createSkills = (name: string, ...skills: Array<string>) =>
  `name : ${name}, skills: ${skills}`;

//object
let user: any = {
  name: "Vasya",
  age: 30,
};

let user2: { name: string; age: number } = {
  name: "Vasya",
  age: 30,
};

type Person = {
  name: string;
  age: number;
  nickName?: string;
  getPass?: () => string;
};

let user3: Person = {
  name: "Vasya",
  age: 30,
  nickName: "vasjan",
};
let admin: Person = {
  name: "Vasya",
  age: 30,
  getPass(): string {
    return this.name;
  },
};

