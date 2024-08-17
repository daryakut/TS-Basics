// Интерфейс User
interface User7 {
  name: string; // Свойство name должно быть строкой
}

// Создаем объект user, используя утилиту Readonly<T> на основе интерфейса User.
// Это делает все свойства объекта user неизменяемыми (только для чтения).
const user7: Readonly<User7> = {
  name: "Yauhen", // Инициализируем свойство name значением 'Yauhen'
};

// Попытка изменить значение свойства name приведет к ошибке,
// так как объект user имеет тип Readonly<User>, и его свойства нельзя изменять.
// user7.name = "Max"; // Ошибка: невозможно присвоить новое значение свойству, доступному только для чтения


interface User8 {
  name: string;
  age: number;
  email: string;
}

// Создаем тип, в котором все свойства User становятся необязательными
const updateUser: Partial<User8> = {
  name: "John", // Мы можем указать одно или несколько свойств, но не обязаны указывать все
};


//Утилита Required<T> делает все свойства типа T обязательными.
interface User0 {
  name?: string;
  age?: number;
}

// Создаем тип, в котором все свойства User становятся обязательными
const createUser: Required<User0> = {
  name: "Alice",
  age: 30, // Все свойства теперь обязательны
};


//Утилита Pick<T, K> создает новый тип, выбирая подмножество свойств из типа T.

interface User11 {
  name: string;
  age: number;
  email: string;
}

// Создаем тип, который включает только свойства name и email из User
const userContact: Pick<User11, "name" | "email"> = {
  name: "Eve",
  email: "eve@example.com",
};

// Omit<T, K>
// Утилита Omit<T, K> создает новый тип, исключая определенные свойства из типа T.

// Создаем тип, который включает все свойства User, кроме email
const userWithoutEmail: Omit<User11, "email"> = {
  name: "Charlie",
  age: 35,
};

// Record<K, T>
// Утилита Record<K, T> создает тип объекта, ключами которого являются значения типа K, а значениями — тип T
type Role = "admin" | "user" | "guest";

// Создаем тип, в котором каждому ключу из Role соответствует значение типа number
const rolesCount: Record<Role, number> = {
  admin: 5,
  user: 100,
  guest: 50,
};

// Exclude<T, U>
// Утилита Exclude<T, U> создает тип, исключая из типа T все члены, которые являются типом U.

type Status = 'active' | 'inactive' | 'suspended';

// Создаем тип, который исключает 'suspended' из Status
type ActiveStatus = Exclude<Status, 'suspended'>;

const status1: ActiveStatus = 'active'; // Допустимо
// const status2: ActiveStatus = 'suspended'; // Ошибка: "suspended" исключен



// Extract<T, U>
// Утилита Extract<T, U> создает тип, включающий только те члены типа T, которые также являются типом U.
type Status1 = 'active' | 'inactive' | 'suspended';

// Создаем тип, который включает только 'active' и 'inactive' из Status
type NonSuspendedStatus = Extract<Status, 'active' | 'inactive'>;

const status11: NonSuspendedStatus = 'active'; // Допустимо
// const status2: NonSuspendedStatus = 'suspended'; // Ошибка: "suspended" не включен


// NonNullable<T>
// Утилита NonNullable<T> исключает из типа T null и undefined.
type Name1 = string | null | undefined;

// Создаем тип, который исключает null и undefined
type ValidName = NonNullable<Name>;

const name2: ValidName = 'David'; // Допустимо
// const name2: ValidName = null; // Ошибка: null исключен



// ReturnType<T>
// Утилита ReturnType<T> создает тип, представляющий собой тип возвращаемого значения функции T.
function createUser2() {
  return { name: "Eve", age: 28 };
}

// Создаем тип на основе возвращаемого значения функции createUser
type User22 = ReturnType<typeof createUser2>;

const newUser2: User22 = {
  name: "Eve",
  age: 28,
};

// 11. InstanceType<T>
// Утилита InstanceType<T> создает тип, представляющий тип экземпляра конструктора T.


class Animal1 {
  species = 'Tiger';
  lifespan11 = 20;
}

// Создаем тип на основе экземпляра класса Animal
type AnimalType = InstanceType<typeof Animal1>;

const animalInstance: AnimalType = new Animal1();
// 12. Parameters<T>
// Утилита Parameters<T> создает тип, представляющий типы параметров функции T в виде кортежа.

// Пример:


function describeAnimal(species: string, lifespan: number): string {
  return `The ${species} has a lifespan of ${lifespan} years.`;
}

// Создаем тип на основе параметров функции describeAnimal
type DescribeAnimalParams = Parameters<typeof describeAnimal>;

const animalParams: DescribeAnimalParams = ['Lion', 15];
// 13. ConstructorParameters<T>
// Утилита ConstructorParameters<T> создает тип, представляющий типы параметров конструктора класса T в виде кортежа.

// Пример:

class Plant {
  constructor(public type: string, public height: number) {}
}

// Создаем тип на основе параметров конструктора класса Plant
type PlantParams = ConstructorParameters<typeof Plant>;

const plantArgs: PlantParams = ['Fern', 120];
const newPlant = new Plant(...plantArgs);

// 14. ThisType<T>
// Утилита ThisType<T> помогает задавать контекст this в объектах.

// Пример:


interface Garden {
  plants: string[];
  showPlants(): void;
}

const gardenOps: ThisType<Garden> = {
  showPlants() {
    console.log(`This garden has: ${this.plants.join(', ')}`);
  },
};

// Создаем объект `garden` с явной типизацией
const garden: Garden = {
  plants: ['Roses', 'Tulips'],
  showPlants: gardenOps.showPlants, // Явно присваиваем метод showPlants
};

garden.showPlants(); // Выведет: "This garden has: Roses, Tulips"
// // Зачем вообще нужен ThisType<T>?
// В более сложных сценариях, когда у вас есть объект, определяющий набор методов, которые будут использовать контекст this, ThisType<T> позволяет TypeScript корректно анализировать и подсказывать типы в этих методах. В приведенном вами примере использование ThisType<Garden> позволяет указать, что метод showPlants будет использовать свойства объекта garden, такие как plants.

// В вашем коде ThisType<T> не обязателен, но он делает код более явным и типобезопасным, если вы планируете использовать объект gardenOps в других местах или передавать его в другие объекты.