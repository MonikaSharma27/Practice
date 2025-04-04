// recursion

// const funct = (n)=>{
//     if (n==0){
//         return 1
//     }
//     else{
//        return n*funct(n-1)
//     }

// }
//  console.log (funct(5))

// const sum = (n) =>{
//     if (n==0){
//         return 0 ;
//     }else{
//         return n+sum(n-1)
//     }
// }
// console.log (sum(5))



// indirect recursion



// let money = 100;
// let totalapple = 0;

// const buyapple = (x) => {
//     if(x>0){
//         console.log("i have",x, "rs",totalapple)
//         buymore(x);
//     }
//   else{
//     console.log("I dont have money ", totalapple)
//   }
// };

// const buymore = (x) => {
//     totalapple++
//     buyapple(x-10)
// };
// buyapple(money);




//head and tail recursion

// const funct =(x)=>{
//     console.log(x)///head recursiom
// if(x>0){
//     funct(x-1)
// }
// console.log(x)//tail recursion
// }
// funct(5)




//reverse array 

let arr =  [1,6,8,0]
let temp;

const customreverse =(arr,start,end)=>{
    console.log(arr)
    if(start<=end){
        temp=arr[start];
        arr[start]= arr[end];
        arr[end]=temp
        customreverse(arr,start+1, end-1)
    }

}
customreverse(arr, 0, arr.length-1)
