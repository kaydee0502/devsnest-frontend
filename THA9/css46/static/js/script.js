
let spray = false;

const elem = document.querySelectorAll(".box").forEach(item => {
    item.addEventListener("mousedown",(e)=>{
        console.log(e.target.className)
        if (e.target.className === "box"){
            return
        }
        spray = true;
        e.target.className === "w" ? e.target.className="r" : e.target.className="w" 
    });

    item.addEventListener("mouseup",(e)=>{
        spray = false;
    });


    item.addEventListener("mouseover",(e)=>{
        console.log("hover")
        console.log(e.target.className)
        if (e.target.className === "box"){
            return
        }
        
        if(spray){
        e.target.className === "w" ? e.target.className="r" : e.target.className="w" 
        }
    });

})


