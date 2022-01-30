var data = 0;
  

// document.getElementById("counting").innerText = data;
  

function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}

function decrement() {
    if(data-1 < 0){
        return;
    }
    data = data - 1;
    document.getElementById("counting").innerText = data;
}

// Digital Clock
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    const currentTime = hour + ":" + min + ":" + sec + am_pm;
    console.log(currentTime)
    document.getElementById("clock").innerText = currentTime;
}

setInterval(() =>{
    showTime();
}, 100);