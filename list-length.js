// code for the Coursera course - Mathematical Thinking in Computer Science
// code returns the length of an array using recursion

const listCount = (arr) =>{

    if (arr.length === 0) return 0
    
    return 1 + listCount(arr.splice(1))
    }
    
let arr = [4,5,3,2,7,8,'a','f','hhhhh',4,3,-1,12.5]
console.log (`Count of array ${arr} is ${ listCount(arr)}.`)
    