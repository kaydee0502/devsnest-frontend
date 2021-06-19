const getLen = (obj) => {
    return Object.keys(obj).length
}


let myObj = {
    nissan : { name: "gtr", isOk: true},
    mazda : {name:"rx7", isOk: true},
    subaru : {name:"impreza", isOk:false},
    mitsubishi : {name:"lancer evo", isOk: true}
}

for (let i of Object.keys(myObj)){
    if (myObj[i].isOk){
        console.log(myObj[i].name + " is Ok" )
    }
    else{
        console.log(myObj[i].name + " is not in good condition")
    }

}
