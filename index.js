const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isrunning = false;

function start(){

    if(!isrunning){
        starttime = Date.now() - elapsedtime;//time since epoch
        timer = setInterval(update,10);
        isrunning =true;
    }
}
function stop (){
    if(isrunning){
        clearInterval(timer);
        elapsedtime =Date.now - starttime;
        isrunning =false;
    }

}
function reset(){
    clearInterval(timer);
    starttime=0;
    elapsedtime =0;
    isrunning =false;
    display.textContent=("00:00:00:00");
}
function update (){
    const currenttime = Date.now();
    elapsedtime =currenttime -starttime;
    let hours = String(Math.floor(elapsedtime/(1000*60*60))).padStart(2,"0");
    let minutes = String(Math.floor(elapsedtime/(1000*60)%60)).padStart(2,"0");
    let seconds =String(Math.floor(elapsedtime/1000 % 60)).padStart(2,"0");
    let  milli =  String(Math.floor(elapsedtime%1000 / 10)).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milli}`;
}
