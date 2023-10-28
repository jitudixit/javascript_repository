const person = {name : 'fred', age: 87};

const arrObj = Object.entries(person);
console.log(Object.fromEntries(arrObj));