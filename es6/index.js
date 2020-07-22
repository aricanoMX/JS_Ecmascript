// ___________________________________
// Funciones
// ___________________________________

// ES5
function newFunction(name, age, country) {
  var name = name || "Oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

// ES6
function newFunction2(name = "oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}
newFunction2();
newFunction2("Ricardo", 23, "CO");

// ___________________________________
// Template literals (para unir varios elementos)
// ___________________________________

// ES5
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// ___________________________________
// Multilinea Strings
// ___________________________________

// ES5
let lorem = "lorem lorem lorem lorem lorem Ipsum\n" + "Hello world.";
console.log(lorem);

// ES6
let lorem2 = `ahora lo que tenemos que hacer es solamente
saltar linea y automaticamente se actualizara a un salto de linea normal.
`;
console.log(lorem2);
// ___________________________________
// Destructuracion de elementos
// ___________________________________

// ES5
let person = {
  name: "Oscar",
  age: 32,
  country: "MX",
};
console.log(person.name, person.age, person.country);

// ES6
let { name, age, country } = person;
console.log(name, age, country);

// ___________________________________
// Propagacion
// ___________________________________

let team1 = ["Oscar", "Julian", "Armando"];
let team2 = ["Mirella", "Linda", "Rosalva"];

// ES5
let education = [
  "David",
  "Oscar",
  "Julian",
  "Armando",
  "Mirella",
  "Linda",
  "Rosalva",
];
console.log(education);

// ES6
let education2 = ["David", ...team1, ...team2];
console.log(education2);

// Variables y Scope global y local

{
  var global = "Global Var";
}

// con let solo esta disponible en el scope
{
  let globalet = "Global Let";
  console.log(globalet);
}

console.log(global);

const a = "b";
a = "a";
console.log(a);
var a = "b";
a = "a";
console.log(a);

// variables

//ES5
let name = "oscar";
let age = 32;
let country = "MX";

obj = { name: name, age: age };
console.log(obj);

//ES6
obj2 = { name, age };
console.log(obj2);

// Arrow Functions = funciones de tipo flecha

const names = [
  { name: "Oscar", age: 32 },
  { name: "Yessica", age: 27 },
];
// para mostrarlos usamos el metodo map

//ES5
let listOfNames = names.map(function (item) {
  console.log(item.name);
});

//ES6
let listOfNames2 = names.map((item) => console.log(item.name));

// const listOfName3 =(name, age,country)=>{
//   ...
// }

// const listOfName4 = name =>{
//   ...
// }

const square = (num) => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("wiiiiii");
    } else {
      reject("Upss!! algo salio mal");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// continuando con el aprendizaje de ecmascipt 6
// constructor
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}
const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from "./module";
hello();

//generator
function* helloWorld() {
  if (true) {
    yield "hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
