// Определение обобщенной функции
const getter = <T>(data: T): T => data;

// getter<number>(10).length; // Ошибка: Свойство 'length' не существует у типа '10'
getter<string>("test").length; // Работает: Выводит 4



// Обобщенный класс
class Container<T, K> { // могут быть как разные типы так и один
  constructor(public item1: T, public item2: K) {}

  public getCombined(): string {
    return `${this.item1}${this.item2}`;
  }
}

const fruitContainer = new Container('Apple', 'Orange');
const numberContainer = new Container(100, 200);
const mixedContainer = new Container("qqqqq", 200);

console.log(fruitContainer.getCombined()); // "AppleOrange"
console.log(numberContainer.getCombined()); // "100200"
console.log(mixedContainer.getCombined()); //"qqqqq200"




// Определяем обобщенный тип 'A' с ключевым словом 'extends'
class Box<B, A extends number> {
  constructor(public content: B, public quantity: A) {}

  public getDescription(): string {
    return `${this.content} - ${this.quantity}`;
  }

  public getDoubleQuantity(): number {
    return this.quantity * 2;
  }
}

const appleBox = new Box('Apples', 10);
const numberBox = new Box(123, 50);

// const errorBox = new Box('Oranges', 'twenty'); // Ошибка: второй параметр должен быть числом
