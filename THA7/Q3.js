const getLen = (obj) => {
    return Object.keys(obj).length
}


let myObj = {
    nissan : "gtr",
    mazda : "rx7",
    subaru : "impreza",
    mitsubishi : "lancer evo"
}

console.log(getLen(myObj))
