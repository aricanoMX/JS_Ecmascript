// Version 8 de ecmascript

const data = {
  frontend: "Oscar",
  backend: "Isabel",
  desing: "Ana",
};

const entries = Object.entries(data);
console.log(entries);

// cuantos elementos contiene un objeto

console.log(entries.length);

// devuelve los valores de un objeto a un arreglo

const data = {
  frontend: "Oscar",
  backend: "Isabel",
  desing: "Ana",
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, "----"));
console.log("food".padEnd(12, "----"));

const obj = {
  name: "oscar",
};

// __________________________________________
// async y await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};
const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFucntion = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFucntion();
