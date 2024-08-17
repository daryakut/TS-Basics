export const SECRET: string = "123321";
export const PI: number = 3.14;

export const getPass = (name: string, age: number): string => `${name}${age}`;

export const isEmpty = <T>(data: T): boolean => !data;
