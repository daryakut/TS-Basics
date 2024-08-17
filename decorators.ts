// Декоратор класса
const logClass = (constructor: Function) => {
  console.log(constructor); // Выводит конструктор класса
};

@logClass // <-- Применение декоратора к классу
class User6 {
  constructor(public name: string, public age: number) {}

  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}

// /Декоратор logClass применяется к классу User с помощью символа @. Когда TypeScript обрабатывает этот код, он вызывает декоратор и передает ему конструктор класса User.
// После применения декоратора, конструктор класса User будет напечатан в консоль.

// Декоратор метода

function logAction(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log(`Method called: ${String(propertyKey)}`);
}

class Animals {
  constructor(public species: string, public age: number) {}

  @logAction
  public getDetails(): string {
    return `${this.species} is ${this.age} years old.`;
  }
}

const cat = new Animals("cat", 5);
cat.getDetails();

//Декоратор logAction применяется к методу getDetails в классе Animals.
// Его цель — автоматически выполнять дополнительный код всякий раз, когда метод getDetails вызывается.
//  каждый раз при вызове метода getDetails, в консоли будет отображаться сообщение "Method called: getDetails".





// Декоратор поля (свойства)
// Этот декоратор будет применяться к полям класса.
// Он позволяет добавлять дополнительную функциональность к полю,
// в данном случае просто выводить его имя в консоль при инициализации класса.
const logField = (target: Object, fieldName: string | symbol) => {
  console.log(`Field tracked: ${String(fieldName)}`); // Выводим в консоль имя поля, к которому применен декоратор
};

class Vehicle {
  // Применяем декоратор `logField` к полю `vin`.
  // Когда класс `Vehicle` будет создаваться, декоратор автоматически выполнит свою работу и выведет в консоль имя поля `vin`.
  @logField
  vin: number;

  // Конструктор класса `Vehicle` принимает три параметра:
  // make (марка автомобиля), year (год выпуска) и vin (идентификационный номер автомобиля).
  // Конструктор сохраняет значения make и year как свойства класса.
  // Значение vin присваивается соответствующему полю класса, к которому уже применен декоратор.
  constructor(public make: string, public year: number, vin: number) {
    this.vin = vin; // Присваиваем переданный идентификационный номер автомобиля (vin) полю vin класса
  }

  // Метод `getDetails` возвращает строку с информацией о марке и годе выпуска автомобиля.
  public getDetails(): string {
    return `${this.make} was manufactured in ${this.year}.`; // Формируем и возвращаем строку с данными об автомобиле
  }
}

// Создаем экземпляр класса `Vehicle` с конкретными значениями: марка — Toyota, год выпуска — 2020, идентификационный номер — 987654321.
const car = new Vehicle('Toyota', 2020, 987654321);

// Когда создается объект `car`, декоратор сработает и выведет в консоль:
// "Field tracked: vin"
// Это происходит потому, что декоратор автоматически выполняется при создании экземпляра класса.




// Декоратор для метода set (сеттер)
// Этот декоратор будет применяться к методам-сеттерам класса.
// Он позволяет добавлять дополнительную функциональность к методу-сеттеру,
// в данном случае просто выводить его имя в консоль при вызове.

const logSet = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log(propertyKey); // Выводим в консоль имя метода-сеттера, к которому применен декоратор
};

class Cat {
  constructor(public name: string, public age: number) {}

  @logSet // <-- Применяем декоратор к сеттеру `myAge`.
  set myAge(age: number) {
    this.age = age; // Присваиваем новое значение age свойству age класса
  }
}

// Создаем экземпляр класса `Cat` с именем "Whiskers" и возрастом 2 года.
const cat1 = new Cat('Whiskers', 2);

// Вызовем сеттер `myAge`, чтобы обновить возраст кошки до 3 лет.
// Когда сеттер вызывается, декоратор сработает и выведет в консоль:
// "myAge"
cat1.myAge = 3;



// Фабрика декораторов
// Фабрика — это функция, которая создает и возвращает декоратор.
// В данном случае, фабрика принимает один аргумент `value` (тип данных не важен, он может быть любым),
// и возвращает декоратор — функцию, которая принимает `target` (это цель декорации, обычно класс или метод),
// и выполняет декорирующую логику (в данном случае, просто выводит `target` в консоль).

function factory(value: any) {
  // Возвращаем сам декоратор
  return function (target: any) {
    // Логика декоратора: выводим в консоль `target`, который декорируется
    console.log(target);
  };
}


// Применение фабричного декоратора
const configurable = (isConfigurable: boolean) => {
  return (
    target: any,
    methodName: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    descriptor.configurable = isConfigurable; // Устанавливаем свойство `configurable` у метода в зависимости от переданного значения
  };
};

class Animal3 {
  constructor(public species: string, public lifespan: number) {}

  @configurable(true) // <-- Вызов фабрики декораторов с аргументом `true`
  public getInfo(): string {
    return `${this.species} can live up to ${this.lifespan} years.`;
  }
}

const elephant = new Animal3('Elephant', 70);

// Проверяем конфигурируемость метода
Object.defineProperty(elephant, 'getInfo', {
  value: function() {
    return 'This method has been modified!';
  }
});

console.log(elephant.getInfo()); // Выведет: "This method has been modified!"

