const ques = 10;
//const fetch = require('node-fetch');

let url = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"

let dat = null
fetch(url)
  .then( res => res.json() )
  .then( data => {

    

    console.log(typeof data.results)
    let i = 0


    
    for (const i in data.results) {
        console.log(data.results[i].question)
        document.getElementById("question").innerHTML = data.results[i].question
    }


  } );

































