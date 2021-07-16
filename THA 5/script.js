
let prev = ""
let curr = ""


function append(val = ""){
    let signs = {"*":true,"-":true,"/":true,"+":true}

    if (val in signs && calculator.displayDN.value[calculator.displayDN.value.length-1] in signs){
        return
    }

    calculator.displayDN.value += val
    calculator.displayUP.value = eval(calculator.displayDN.value) 

}

function res(){
    let toEval = ""

  
    toEval+=calculator.displayDN.value
    console.log(toEval)
    let ans = eval(toEval)
    calculator.displayDN.value = ans
}