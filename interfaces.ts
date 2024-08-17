interface Human {
  name: string;
  age?: number;
  readonly id: string;
}
type Humanoid = {
  name: string;
  age: number;
};

const misha: Human = {
  name: "Misha",
  id: "123",
};
// misha.id = "111"; // нельщя менять readonly


// Расширение интерфейса
interface Person1 {
  name: string;
  age: number;
  [propName: string]: any;  // Индексная подпись, позволяющая добавлять произвольные свойства
}

const john: Person1 = {
  name: 'John',
  age: 30,
  occupation: 'Developer',  // Интерфейс не контролирует это свойство
  hobby: 'Photography',
  money: 0 // Интерфейс не контролирует это свойство
};



// Интерфейс для класса
interface User2 {
  name: string;
  age: number;
  getPass(): string;
}

// Создание класса на основе интерфейса "User"
class Yauhen implements User2 {
  name: string = 'Yauhen';
  age: number = 31;
  nickName: string = 'webDev';  // <-- Не входит в интерфейс

  getPass(): string {
    return `${this.name}${this.age}`;
  }
}


//  класс на основе несколькиз интерфейсов
// Интерфейс, описывающий сущность человека
interface Person3 {
  firstName: string;
  age: number;
}

// Отдельный интерфейс с одним методом
interface Credentials {
  getCredentials(): string;
}

// Класс, реализующий оба интерфейса
class Employee implements Person3, Credentials {
  firstName: string = 'John';
  age: number = 25;

  // Реализация метода getCredentials, который объединяет имя и возраст
  getCredentials(): string {
    return `${this.firstName}${this.age}`;
  }
}


// насследование интерфейсов и классов вместе

// Интерфейс, описывающий базовое животное
interface Animal {
  species: string;
  age: number;
}

// Интерфейс, расширяющий базовое животное и добавляющий метод
interface Pet extends Animal {
  getSound(): string;
}

// Класс, реализующий интерфейс Pet
class Dog11 implements Pet {
  species: string = 'Dog';
  age: number = 5;

  // Реализация метода getSound, который возвращает звук, издаваемый животным
  getSound(): string {
    return `Woof! My name is ${this.species}, and I am ${this.age} years old.`;
  }
}
