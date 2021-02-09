// code for the Coursera course - Mathematical Thinking in Computer Science
// code returns the factorial for a given number

const factorial = (nbr) =>{

    if (nbr < 0) return ` - number must not be negative (${nbr} given)`
    if (nbr <= 1) return 1
    
    return nbr * factorial (nbr-1)
    }
    
let nbr = 10
console.log (`Factorial for ${nbr} is ${ factorial(nbr)}.`)
    