/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T extends string | symbol, U extends any> {
  key: T;
  value: U;
}

class KeyValueComponent{
  constructor(private keyValue: KeyValuePair <string | symbol, any>){}
}
export {};