const cloneArr = (arr) => {
    return [...arr]
}

let a = [3,4,5];
let b = cloneArr(a);
console.log(a,b,a===b)