// Feb 5, 2021
// this is from the Discrete Mathematics course from Coursera (their code is in Python)
// it solves the chess board/queens problem from week 2
// it returns valid combinations for various size chess boards
// it works fine through size=12 but slows dramatically after that
// sample output:
// [1, 3, 5, 0, 2, 4] "works"
// [2, 5, 1, 4, 0, 3] "works"
// [3, 0, 4, 1, 5, 2] "works"
// [4, 2, 0, 5, 3, 1] "works"
// "For size " 6 "there are" 4 "solutions"


let size=6 // put the chess board size here
let totSolutions=0
  
const isSolution = (perm) =>{ // columns the queens are in (rows are the index positions)
  for (let row=0; row < size; row++){  
    let col=perm[row]    
    for (let nextRow=row+1; nextRow < size; nextRow++){ 
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
    if (isSolution(perm)){
        totSolutions += 1;
        console.log(perm, "works")
        // insert a quit() here if only one valid combination is needed
    }
    return
  }
  
  for (let i=0; i < n; i++){
    if (!perm.includes(i)){
      perm.push(i)
      gen_perms(perm,n)
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
