const obj = {
  name: "oscar",
  age: 32,
  country: "mx",
};
// lo que vamos a hacer es el operador de reposo para extraer los elementos

let { country, ...all } = obj;
console.log(all);

// utilizaremos el operador de propagacion para anidar ambos elementos
const obj = {
  name: "Oscar",
  age: 32,
};

const obj1 = {
  ...obj,
  country: "MX",
};

console.log(obj1);

// PROMESA
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  // .finally permiete ejecutar un bloque de codigo segun sea el caso, y asi se muestra cuando se ejecuto la respuesta
  .finally(() => console.log("Finalizo"));

// se añadieron mejora en REGEX

const regexData = /([0-9]{4}-([0-9]{2}))-([0-9]{2})/;
const match = regexData.exec("2018-04-30");
const year = match[1];
const month = match[2];
const day = match[8];

console.log(year, month, day);
