// Feb 9, 2021
// code for the Coursera course - Mathematical Thinking in COmputer Science
// code shows how to reach any integer using only 5 and 7 coins as long as the number is 24 or above
// numbers below are not always possible

const change = (amt) =>{

    if (amt < 24) return `*** Number must be at least 24 - received ${amt}`
    if (amt === 24) return "5,5,7,7"
    if (amt === 25) return "5,5,5,5,5"
    if (amt === 26) return "5,7,7,7"
    if (amt === 27) return "5,5,5,5,7"
    if (amt === 28) return "7,7,7,7"
    if (amt === 29) return "5,5,5,7,7"
    if (amt === 30) return "5,5,5,5,5,5"
    
    return "7," + change(amt-7)    
}
    
    let nbr = 98
    console.log (`Reducing ${nbr} to ${ change(nbr)}.`)
    