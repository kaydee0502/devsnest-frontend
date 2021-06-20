
let spray = false;

const elem = document.querySelectorAll(".box").forEach(item => {
    item.addEventListener("mousedown",(e)=>{
        console.log(e.target.className)
        if (e.target.className === "box"){
            return
        }
        spray = true;
        e.target.className === "w" ? e.target.className="r mb" : e.target.className="w mb" 
    });

    item.addEventListener("mouseup",(e)=>{
        spray = false;
    });


    item.addEventListener("mouseover",(e)=>{
        console.log("hover")
        let ts = document.getElementsByClassName("mb").length
        let rs = document.getElementsByClassName("r").length
    
        document.getElementById("stat").innerHTML=`Total Seats : ${ts} || Available Seats : ${rs}`
        
        if (e.target.className === "box"){
            return
        }
        
        if(spray){
        e.target.className === "w" ? e.target.className="r mb" : e.target.className="w mb" 
        }
    });

})


console.log(document.getElementsByClassName("mb"))