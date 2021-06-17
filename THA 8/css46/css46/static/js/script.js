const elem = document.getElementsByClassName("box")
console.log(elem)
elem[0].addEventListener("click",(e)=>{
    console.log(e.target.className)
    if (e.target.className === "box"){
        return
    }
    e.target.className === "w" ? e.target.className="r" : e.target.className="w" 
});
