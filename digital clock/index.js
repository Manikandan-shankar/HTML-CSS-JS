const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm1 = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"
    
    if(h>12){
        h = h-12
        ampm = "PM"
    }
    h = h<10 ? "0" + h : h;
    s = s<10 ? "0" + s : s;
    m = m<10 ? "0" + m : m;
    hour.innerText = h;
    minute.innerText = m;
    seconds.innerText = s;
    ampm1.innerText = ampm;
    setTimeout(()=>{
        updateClock()
    }, 1000)
}
updateClock()