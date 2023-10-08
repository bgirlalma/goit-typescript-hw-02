/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type PageInfoOne = {
  title: string,
  likes: number,
  accounts: string[],
  status: 'open',
  details?: {
    createAt: Date,
    updateAt: Date,
  }
}

const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

type PageInfoTwo = {
  title: string,
  likes: number,
  accounts: string[],
  status: 'close',
}

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export {};