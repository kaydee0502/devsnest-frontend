setInterval(() => {

    let d = new Date();

    hr = d.getHours()
    min = d.getMinutes()
    sec = d.getSeconds()
    hr_rot = 30 * hr + min/2;
    min_rot = 6*min;
    sec_rot = 6*sec;
    console.log(hr_rot,min_rot,sec_rot)
    console.log(hour,minute,second)


    //let hour = document.getElementById("hour");
    //let minute = document.getElementById("minute");
    //let seconds = document.getElementById("seconds");

    hour.style.transform = "rotate(" + hr_rot + "deg)";
    minute.style.transform = "rotate(" + min_rot + "deg)";
    second.style.transform = "rotate(" + sec_rot + "deg)";

    var digitalTime = document.getElementById("time");
    digitalTime.innerHTML = hr + ":" + min + ":" + sec; 



},1000);