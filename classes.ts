//Classes
class User {
  public name: string = "Vasya"; // public: Доступно всем, из любого места, как внутри класса, так и снаружи
  private age: number; // private: Доступно только внутри самого класса, не доступно снаружи
  protected nickName: string; // protected: Доступно внутри класса и в классах-наследниках, но не снаружи класса
  readonly pass: number; // readonly: Можно установить только при создании объекта или в конструкторе, не может быть изменено после

  constructor(name: string, age: number, nickName: string, pass: number) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
    this.pass = pass; // Инициализация свойства pass, оно может быть установлено только один раз
  }
  getAge(): number {
    return this.age; // Можно использовать private свойство внутри класса
  }
}
const user4 = new User("John Doe", 30, "johndoe", 33);

//компактный способ создать класс
class User2 {
  constructor(name: string, age: number, nickName: string, pass: number) {}
}

// геттеры и сеттеры

class User1 {
  private age: number = 20; // Приватное свойство, доступное только внутри класса

  constructor(public name: string) {} // Конструктор, инициализирующий публичное свойство name

  // Метод для установки значения приватного свойства age
  setAge(age: number) {
    this.age = age;
  }

  // Сеттер для изменения значения приватного свойства age
  set myAge(age: number) {
    this.age = age;
  }

  // Геттер для получения значения приватного свойства age
  get myAge(): number {
    return this.age;
  }
  //  обычный публичный метод для получения значения:
  getAge(): number {
    return this.age;
  }
}

// Создание экземпляра класса User
const yauhen = new User1("Yauhen");

// Изменение возраста с помощью метода setAge
yauhen.setAge(30);
console.log(yauhen.myAge); // Выводит: 30

// Изменение возраста с помощью сеттера myAge
yauhen.myAge = 31;
console.log(yauhen.myAge); // Выводит: 31

//получение возраста
console.log(yauhen.getAge());
console.log(yauhen.myAge);

// static
class User3 {
  static secret = 12345; // Статическое свойство, общее для всех экземпляров класса

  constructor(public nickname: string, public age: number) {} // Конструктор класса

  // Метод для получения пароля, который включает имя пользователя и секрет
  getPass(): string {
    return `${this.nickname}${User3.secret}`; // Доступ к статическому свойству через имя класса
  }
}

// Создание экземпляра класса User
const yauhenn = new User3("Yauhen", 30);

// Вызов метода getPass
console.log(yauhenn.getPass()); // Выводит: "Yauhen12345"

// Доступ к статическому свойству напрямую через класс
console.log(User3.secret); // Выводит: 12345

// наследование!!!!
class Vasya extends User3 {
  constructor(age: number) {
    super("vasya", age); //   испольщуем super для вызова родительского конструктора и передаем туда  Васю
  }
  getPass(): string {
    return ` hello ${this.nickname}${this.age}${User3.secret}`; // Доступ к статическому свойству через имя класса
  }
}

// Создание экземпляров классов
const max = new User3("Max", 20);
const vasya = new Vasya(31);
console.log(vasya);
console.log(max);
console.log(vasya.getPass());


// абстрактные класс
// Пример абстрактного класса

abstract class User5 {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(this.name);
  }

  abstract getPass(): string;
}

// Ошибка: нельзя создать экземпляр абстрактного класса
// const max = new User5('Max', 20);  // Это вызовет ошибку

class Admin extends User5 {
  // Реализация абстрактного метода
  getPass(): string {
    return `${this.name}${this.age}`;
  }
}

// Создание экземпляра класса-наследника
const admin1 = new Admin('Alice', 30);
console.log(admin1.getPass()); // Выводит: "Alice30"
