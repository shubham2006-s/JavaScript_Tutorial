const selectmenu = document.querySelectorAll("select");
const currenttime = document.querySelector("h1");
const btn = document.querySelector("button");
const context = document.querySelector(".header-child");
let AlarmTime ,isAlarmset=false;
let ring = new Audio('alarm_clock.mp3')

for(let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = ` <option value="${i}">${i}</option>`;
    selectmenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = ` <option value="${i}">${i}</option>`;
    selectmenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for(let i = 2; i > 0; i--) { 
    let ampm = i==1 ? "AM" : "PM";
    let option = ` <option value="${ampm}">${ampm}</option>`;
    selectmenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(()=>{
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h >= 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    currenttime.innerText= `${h}:${m}:${s} ${session}`;

    if(AlarmTime == `${h}:${m} ${session}`){
        ring.play();    
    }
},1000)

function setAlarm(){
    if(isAlarmset){
        AlarmTime="";
        ring.pause();
        context.classList.remove("disable");
        btn.innerText="Set Alarm";
        return isAlarmset = false;
    }
    let timepick = `${selectmenu[0].value}:${selectmenu[1].value} ${selectmenu[2].value}`;

    if(timepick.includes("Hours") || timepick.includes("Minute") || timepick.includes("AM/PM")){
        return alert("please,select a valid time to set alarm")
    }
    isAlarmset = true;
    AlarmTime = timepick;
    context.classList.add("disable");
    btn.innerText="Clear Alarm";
}

btn.addEventListener("click",setAlarm);
