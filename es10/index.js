let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

// devuelve una matriz con cualquier sub mastriz aplanada
console.log(array.flat(2));

let array = [1, 2, 3, 4, 5];
// mapea cada elemento y luego devuelve un elemento
console.log(array.flatMap((value) => [value, value * 2]));

//  permite eliminar espacios en blanco al inico de un sting
let hello = "    hello world";
console.log(hello);
console.log(hello.trimStart());

//  permite eliminar espacios en blanco al final de un sting
let hello = "hello world      ";
console.log(hello);
console.log(hello.trimEnd());

// OPCIONAL CATCH BINDING
// ahorita viene por default el valor de error en el catch  en caso de que olvidemos agregarlo
try {
} catch {
  error;
}

// from entries
// permite tranformar elementos de clave valor en objetos

let entries = [
  ["name", "oscar"],
  ["age", 32],
];
console.log(Object.fromEntries(entries));

//objetos de tipo simbolo que permite entrar a una descripcion
let mySymbl = `My symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);
