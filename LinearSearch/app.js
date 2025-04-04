let inputBox = document.querySelector("#inputBox");
let btn = document.querySelector("#btn");

let data = [10,50,67,78,90,56,34];




btn.addEventListener("click", (evt)=>{
    let find = +inputBox.value;
    let pos =undefined ;
    for(let i=0; i<data.length; i++){
        if (data[i]===find){
            pos=i
            break;
        }
    }
    if(pos !== undefined){
        alert("element position is " + pos)
    }else{
        alert("element not found")
    }
})
