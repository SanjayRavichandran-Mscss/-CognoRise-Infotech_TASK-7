const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const start = document.getElementById('start');
const reset = document.getElementById('reset');

const disp = document.getElementById('disp');

var interval = null;
var total = 0;

totalValue = ()=>{
    total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value);

}




Timer = () =>{
    totalValue();
    total--;

    if(total >= 0){
        var hr = Math.floor(total/3600);
        var mt = Math.floor(total/60 - (hr*60));
        var sc = total - ((hr*3600) + (mt*60));

        hour.value = hr <= 9 ? "0" + hr : hr;

        minute.value = mt<= 9 ? "0" + mt : mt;
        second.value = sc<= 9 ? "0" + sc : sc;
    }
    else{
        disp.innerText = "Time Over !"
    }
}

start.addEventListener('click',()=>{
    clearInterval(interval)
    setInterval(Timer,1000);

    disp.innerText = "Timer Started";

    hour.classList.add('pointer-none');
    minute.classList.add('pointer-none');
    second.classList.add('pointer-none');

    start.classList.add('pointer-none');
});

reset.addEventListener('click',()=>{
    disp.innerText = "Timer";
  
        hour.value = 0;
        minute.value = 0;
        second.value = 0;
        // clearInterval(interval);

        hour.classList.remove('pointer-none');
        minute.classList.remove('pointer-none');
        second.classList.remove('pointer-none');

        start.classList.remove('pointer-none');
       
        window.location.reload();   //Refresh the Page
})