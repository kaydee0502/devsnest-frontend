const ques = 10;
//const fetch = require('node-fetch');
let score = 0
let url = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"

let mainData = null

async function getData(){
   const response = await fetch(url);
   const body = await response.json();
   return body

}


mainData = getData()
//setTimeout(() => {},2000)
let i = 0
mainData.then((response) => {

    console.log(response)
    document.getElementById('question').innerHTML = response.results[i].question
    const rndInd = Math.floor(Math.random() * 4) + 1
    let a = document.getElementsByClassName(`option${rndInd}`)[0]
    a.innerHTML = response.results[i].correct_answer
    a.classList.add("pre_correct")
    console.log(a)
    let j = 0
    for (let k = 1; k<=4; k++){
        let e = document.getElementsByClassName(`option${k}`)[0]
        e.addEventListener("click", (elm) => opclick(e));
        
        if (k === rndInd){
            continue
        }
        e.innerHTML = response.results[i].incorrect_answers[j]
        j+=1
    }
    i++;
    mainData = response.results
}

)

function next(){
    if (i >= ques){
        alert(`go home bruh! your score was ${score}`)
    }
    document.getElementsByClassName("pre_correct")[0].classList.remove("pre_correct")
    let cs = document.getElementsByClassName("correct")[0] 
    let ws = document.getElementsByClassName("wrong")[0]
    if (cs !== undefined){
        cs.classList.remove("correct")
        console.log(cs)

    }
    if (ws !== undefined){
        ws.classList.remove("wrong")
        console.log(ws)
    }

    document.getElementById('question').innerHTML = mainData[i].question
    const rndInd = Math.floor(Math.random() * 4) + 1
    let a = document.getElementsByClassName(`option${rndInd}`)[0]
    a.innerHTML = mainData[i].correct_answer
    a.classList.add("pre_correct")
    console.log(a)
    let j = 0
    for (let k = 1; k<=4; k++){
        let e = document.getElementsByClassName(`option${k}`)[0]
      
        if (k === rndInd){
            continue
        }
        e.innerHTML = mainData[i].incorrect_answers[j]
        j+=1
    }
    i++;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function opclick(option){
    console.log(option)
    if (option.classList.contains("pre_correct")){
        option.classList.add("correct")
        score++
    }
    else{
        option.classList.add("wrong")
        document.getElementsByClassName("pre_correct")[0].classList.add("correct")
    }

    await sleep(2000)
    next()
}


























