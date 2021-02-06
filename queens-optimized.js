// Feb 5, 2021
// this is from the Discrete Mathematics course from Coursera (their code is in Python)
// it solves the chess board/queens problem from week 2
// it returns valid combinations for various size chess boards
// it works fine through size=20 - this is  the optimized method - doing incremental checks rather than after the entire permutation is built
// sample output:
// [1, 3, 5, 0, 2, 4] "works"
// [2, 5, 1, 4, 0, 3] "works"
// [3, 0, 4, 1, 5, 2] "works"
// [4, 2, 0, 5, 3, 1] "works"
// "For size " 6 "there are" 4 "solutions"

let size=16
let totSolutions=0
  
const isSolution = (perm,mySize) =>{ // columns the queens are in
  for (let row=0; row < mySize; row++){  
    let col=perm[row]    
    // check remaining entries
    for (let nextRow=row+1; nextRow < mySize; nextRow++){ 
      let nextCol = perm[nextRow]
      if (Math.abs(row-nextRow) === Math.abs(col-nextCol)) {
        return false;
      }
    }
  }
  return true
}  

const gen_perms = (perm, n) => {
  if (perm.length === n){
    if (isSolution(perm,size)){
        if (n === size) totSolutions += 1;
        //console.log(perm, "works");
//        throw new Error("Solution found - terminating")
    }
    return
  }
  
  for (let i=0; i < n; i++){
    if (!perm.includes(i)){
      perm.push(i)
      // major difference to optimize: check for a valid solution so far and only proceed if it exists
      if (isSolution(perm,perm.length)){
        gen_perms(perm,n)
      }
      perm.pop()
    }
  }
}

const dt = new Date();
console.log("\nProgram starting for board size", size, "at", dt.toString(), "\n");
const start = Date.now();

gen_perms([],size)
console.log("For size ",size,"there are",totSolutions,"solutions")

const endTime = Date.now() - start;
console.log(`Elapsed time = ${Math.floor(endTime / 1000)} seconds\n`);
