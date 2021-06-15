const kaato = (arr,r = 1) => {
    return arr.slice(0,r);

}

console.log(kaato([1,2,3,4]))
console.log(kaato([1,2,3,4],2))
console.log(kaato([1,2,3,4],3))