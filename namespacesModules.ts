namespace Utils {
  export const SECRET: string = "123321";
  export const PI: number = 3.14;

  export const getPass = (name: string, age: number): string => `${name}${age}`;

  export const isEmpty = <T>(data: T): boolean => !data;
}
console.log(Utils.SECRET);
console.log(Utils.getPass("a", 2));
console.log(Utils.isEmpty(123));        // Выводит: false
//namespace — это способ группировки связанных переменных, функций, классов или интерфейсов под одним именем. Это помогает организовывать код и предотвращать конфликты имен.
// В данном примере все, что объявлено внутри namespace Utils, будет доступно через этот namespace как часть единого контекста.
const PI = 6; //это ок потому что не пересекается с PI из namrspace
 