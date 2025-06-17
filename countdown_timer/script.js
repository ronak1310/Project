const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")

const newYears = "1 jan 2026";

function countdown()  {
    const newYearsdate=new Date(newYears);
    const currentDate=new Date();
    const totalSeconds=(newYearsdate-currentDate)/1000;//result in millisec /1000 to convert in seconds
    const days=Math.floor(totalSeconds/3600/24);//First totalSeconds / 3600 converts seconds to hours.Then / 24 converts hours to days.Math.floor() rounds it down to get whole days.
    const hours=Math.floor(totalSeconds/3600)%24;//Gets total hours then % 24 gives the remaining hours after full days are removed.
    const mins=Math.floor(totalSeconds/60)%60;//Gets total minutes.% 60 gives the remaining minutes after full hours are removed.
    const seconds=Math.floor(totalSeconds)%60;//gets total seconds and gives remaining seconds after full minutes are removed.

    daysEl.innerHTML=formatTime(days);
    hoursEl.innerHTML=formatTime(hours);
    minsEl.innerHTML=formatTime(mins);
    secondsEl.innerHTML=formatTime(seconds);
}

function formatTime(time){
    return  time<10?(`0${time}`):time;
}

countdown();
setInterval(countdown,1000);