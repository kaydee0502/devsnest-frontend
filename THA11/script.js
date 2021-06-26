const ques = 10;
//const fetch = require('node-fetch');

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
        if (k === rndInd){
            continue
        }
        document.getElementsByClassName(`option${k}`)[0].innerHTML = response.results[i].incorrect_answers[j]
        j+=1
    }
    i++;
    mainData = response.results
}

)

function next(){
    document.getElementsByClassName("pre_correct")[0].classList.remove("pre_correct")

    document.getElementById('question').innerHTML = mainData[i].question
    const rndInd = Math.floor(Math.random() * 4) + 1
    let a = document.getElementsByClassName(`option${rndInd}`)[0]
    a.innerHTML = mainData[i].correct_answer
    a.classList.add("pre_correct")
    console.log(a)
    let j = 0
    for (let k = 1; k<=4; k++){
        if (k === rndInd){
            continue
        }
        document.getElementsByClassName(`option${k}`)[0].innerHTML = mainData[i].incorrect_answers[j]
        j+=1
    }
    i++;
}

function opclick(){}


























