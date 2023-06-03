const endDate = " 11 Sept 2023 11:51 PM";

document.getElementById("end-date").innerText = endDate;

const input = document.querySelectorAll("input");

clock();
function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    if(diff < 0)return;
    
    console.log(now);
    console.log(end);
    input[0].value = Math.floor(diff/3600/24);
    input[1].value = Math.floor(diff/3600)%24;
    input[2].value = Math.floor(diff/60)%60;
    input[3].value = Math.floor(diff)%60;
    if(diff < 0){
        timeout();
    }

}

setInterval(
    () =>{
        clock();
    },1000
)

function timeout(){
    input[0].value = 00;
    input[1].value = 00;
    input[2].value = 00;
    input[3].value = 00;
}