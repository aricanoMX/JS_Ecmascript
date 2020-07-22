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
