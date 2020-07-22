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
