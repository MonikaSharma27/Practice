// stack push 

let arr = [];
let currentSize = arr.length;
let max= 5;

function push(newval){
    if(currentSize>=max){
        alert("stack is full"+newval)
    }
    arr[currentSize]= newval;
    currentSize+=1;
}

// stack pop

function pop(){
    lastRemovedItem = arr[currentSize-1];
        currentSize-=1;
        arr.length=currentSize;
       return lastRemovedItem;
    
}

let reverseStr = (item)=>{
for (let i=0; i<item.length; i++){
    push(item[i])
}
for (let i=0; i<item.length; i++){
   item[i]=pop();
}
}


let str = "moni";
str = str.split("");
reverseStr(str)
console.log(str.join(""))






//Reverse string 






