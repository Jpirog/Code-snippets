// returns the fibonnaci value of the number (n * n-1 etc)
// Jan 2021 - used by Fullstack pre-class and various coding platform problems

const getFactorial = (n) =>{
  return n === 1 ? 1 : n * getFactorial (n-1)
}

let nbr = 12
console.log (`For ${nbr}, its factorial value is ${getFactorial(nbr)}.`)
