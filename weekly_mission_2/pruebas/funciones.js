// 2. RETURNING FUNCTIONS
const numbers = [1, 2, 3, 4]

const sumArray = (arr) => { // Función que toma una lista
  let total = 0 // Declaro una variable sum = 0

  const sumElementToTotal= (element) => { // función dentro de una función
    total += element // toma la variable sum y suma el valor del argumento element
  } // esta es una definición de función

  arr.forEach(sumElementToTotal) // una lista tiene por defecto ciertos métodos, uno de ellos es forEach
  // forEach aplica una función a cada elemento de la lista
  //
  return total
}

console.log(sumArray(numbers))