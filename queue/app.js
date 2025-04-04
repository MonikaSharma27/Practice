let enqueue1 = document.querySelector("#enqueue");
let btn = document.querySelector("#btn");
let display = document.querySelector("#display");


let queue = [];
let currentsize = queue.length;
let maxSize = 5;
const newVal = enqueue1.value;


const enqueue = (newVal) => {
  if (currentsize >= maxSize) {
    alert("Queue is full");
  } else {
    queue[currentsize] = newVal;
    currentsize++;
  }
};
btn.addEventListener("click" ,(evt)=>{
    
    enqueue(newVal)
})

const dequeue = () => {
  for (let i = 0; i < queue.length; i++) {
    queue[i] = queue[i + 1];
  }
  currentsize--;
  queue.length = currentsize;
};

const front = () => {
  if (currentsize > 0) {
    console.log(queue[0]);
  } else {
    console.log("queue is already empty");
  }
};

const rear = () => {
    if (currentsize > 0) {
      console.log(queue[currentsize-1]);
    } else {
      console.log("queue is already empty");
    }
  };

display .addEventListener ("click",(e)=>{
    console.log(queue);
})
enqueue(10);
enqueue(20);
enqueue(30);


