const delKeys = (obj,key) => {
    delete obj[key]
}


let myObj = {
    nissan : "gtr",
    mazda : "rx7",
    subaru : "impreza",
    mitsubishi : "lancer evo"
}


delKeys(myObj,"mazda")
console.log(myObj)