const getLen = (obj) => {
    return Object.keys(obj).length
}


let myObj = {
    nissan : { name: "gtr", isOk: true, maxSpeed : 220},
    mazda : {name:"rx7", isOk: true, maxSpeed: 200},
    subaru : {name:"impreza", isOk:false, maxSpeed: 180},
    mitsubishi : {name:"lancer evo", isOk: true, maxSpeed: 210}
}


let ents = Object.entries(myObj)

ents.sort((a,b) => {
    return b[1].maxSpeed - a[1].maxSpeed
})

let newObj = {}

for (i of ents){
    newObj[i[0]] = i[1] 
}

console.log(newObj)