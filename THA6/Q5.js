function maxer(arr){
    let hash = {}
    
    arr.forEach(element => {
        if (!hash.hasOwnProperty(element)){
            hash[element] = 0
        }
        hash[element] += 1
    });

    return Object.keys(hash).reduce((a, b) => hash[a] > hash[b] ? a : b);
}

console.log(maxer([1,2,3,4,5,6,4,3,3,4,4,4,3,4,4,4]))