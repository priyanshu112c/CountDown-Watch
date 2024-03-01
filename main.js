// const enddate = '03 march 2024 05:00PM'
const buttons = document.getElementById("mybtn")
const inputs = document.querySelectorAll("input")

buttons.addEventListener("click",()=>{
    var x = document.getElementById("inputenter").value;
    // var y = document.getElementById("write").value;
    
    if(x.length!=0){
        document.getElementById("write").innerHTML = "Event start : "+x;
    }
    


// document.getElementById('end-date').innerHTML = enddate;



const clock = () => {
    const enddate = document.getElementById("inputenter").value;
    // const end = new Date(enddate);
    // const now = new Date();
    const date = new Date(enddate)
    console.log(date)
    const enddatetime = date.getTime();
    const now1 = new Date();
    const nowdatetime = now1.getTime();
    const different = (enddatetime - nowdatetime)
    const diff = (different) / 1000;
    // console.log(diff)

    if (diff < 0) return;
    inputs[1].value = Math.floor(diff / (24 * 3600));
    inputs[2].value = Math.floor((diff / 3600) % 24);
    inputs[3].value = Math.floor((diff / 60) % 60);
    inputs[4].value = Math.floor(diff) % 60;
}

setInterval(() => {
    clock();
}, 1000)
})