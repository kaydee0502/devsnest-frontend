let us_uchihas = [
    "itachi.jpg",
    "obito.jpg",
    "sasuke.jpg",
    "madara.jpg",
    "shisui.jpg",
    "fugaku.jpg",

    "itachi_s.jpg",
    "obito_s.jpg",
    "sasuke_s.jpg",
    "madara_s.jpg",
    "shisui_s.jpg",
    "fugaku_s.jpg",
]

function shuffle(uchihas,places){
    console.log(uchihas,places);
    for (let i=0; i<places; i++){

        let psuedoIndex = Math.floor(Math.random()*places);
        if (psuedoIndex === i){
            continue;
        }
        console.log(psuedoIndex,i,uchihas)
        let a = uchihas[psuedoIndex];
        uchihas[psuedoIndex]=uchihas[i];
        uchihas[i] = a;
        
     
        } 

    return uchihas;



}

function comp(str){

}


let fC = null;
let sC = null;

function handleCardClick(card){
    if (card.classList.contains("done")){
        return
    }
    card.classList.toggle('rotate')

 if (fC === null){
     fC = card
}
else if(sC === null){
    sC = card
}
else{
    card.classList.toggle('rotate')
    return
}
if (fC !==null && sC!==null){
    if (fC.getAttribute("data-value") !== sC.getAttribute("data-value") ){
        console.log("unmatch")

        setTimeout(() => {

            fC.classList.remove('rotate')
            sC.classList.remove('rotate')
            fC = null
            sC = null

            
        },1000)
    }
    else{
        if (fC.classList.contains("rotate")){
            fC.classList.add('done')
        }
        if (sC.classList.contains("rotate")){
            sC.classList.add('done')
        }
     fC = null
     sC = null

    }
    


}


}

let shuffled_uchihas = shuffle(us_uchihas,us_uchihas.length)


for (const uchiha of shuffled_uchihas) {
    let card = document.createElement("div");
    card.className = "flip-card";
    card.setAttribute("data-value", uchiha.split(".")[0].split("_")[0]);
    card.innerHTML = `
      <div class="flip-card-inner">
          <div class="flip-card-front"><img src="uchiha.jpg" alt="Avatar" style="width:250px;height:180px;"></div>
          <div class="flip-card-back"><img src="${uchiha}" alt="Avatar" style="width:250px;height:180px;"></div>
      </div>`;
    document.getElementById("gameCards").appendChild(card);
    card.addEventListener("click", (e) => handleCardClick(card));
  }