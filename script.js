let secHand = document.getElementById('secHand');
let minHand = document.getElementById('minHand');
let hourHand = document.getElementById('hourHand');
let digitalClock = document.getElementById('digital');
setInterval(()=>{
    let date = new Date();
    let sec = date.getSeconds();
    sec = sec<10 ? "0"+sec : sec;
    let min = date.getMinutes();
    min = min<10 ? "0"+min : min;
    let hour = date.getHours();
    hour = hour<10 ? "0"+hour : hour;
    digitalClock.innerHTML = `
    <h1>${hour}:${min}:${sec}</h1>`
    secHand.style.transform = `rotate(${6*sec}deg)`;
    minHand.style.transform = `rotate(${6*min}deg)`;
    hourHand.style.transform = `rotate(${30*hour + min/2}deg)`;
},1000)

var audio = new Audio('./ticking-clock.mp3');

// Set the loop property to true to make it loop
audio.loop = true;

// Play the audio
audio.play();