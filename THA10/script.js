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

let shuffled_uchihas = shuffle(us_uchihas,us_uchihas.length)


for (const uchiha of shuffled_uchihas) {
    let card = document.createElement("div");
    card.className = "flip-card";
    card.setAttribute("data-value", uchiha);
    card.innerHTML = `
      <div class="flip-card-inner">
          <div class="flip-card-front"><img src="uchiha.jpg" alt="Avatar" style="width:250px;height:180px;"></div>
          <div class="flip-card-back"><img src="${uchiha}" alt="Avatar" style="width:250px;height:180px;"></div>
      </div>`;
    document.getElementById("gameCards").appendChild(card);
    //card.addEventListener("click", (e) => handleCardClick(card));
  }