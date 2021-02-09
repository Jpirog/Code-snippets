// code for the Coursera course - Mathematical Thinking in Computer Science
// code shows how to reach any integer using only 3 and 5 coins as long as the number is 8 or above
// numbers below are not always possible

const reduceIt = (amt) =>{

if (amt === 8) return "3,5"
if (amt === 9) return "3,3,3"
if (amt === 10) return "5,5"

return "3," + reduceIt (amt-3)
}

let nbr = 125
console.log (`Reducing ${nbr} to ${ reduceIt(nbr)}.`)
