/////////// traversal

// let arr= [1,56,78,89];

 
//  console.log(arr)
// document.write(arr[3])



/////////////insert

// let arr = [1,2,3];
// arr.push(3);
// console.log(arr);

//without push ()

// let arr =[1,2,3,5,5];
//  let newel = [];
//  for(let i=0; i<arr.length; i++){
//     newel[i]=arr[i]
//  }
//  newel[5] = 6;
//  console.log(newel)


// let arr = [1,2,3,5];
// let newEl = [];
// for(let i = 0; i<arr.length; i++){
//     newEl[i]=arr[i]
//     newEl[i+1] = arr[i]
//     newEl[3]=4
// }
// console.log(newEl)



// let arr = [1,2,3,4];
//     arr.splice(2,1)
// console.log(arr);


////////// Delete 

// let positionInput = document.querySelector("#position")
// let btn = document.querySelector("#remove")


// btn.addEventListener("click", () => {
//     let arr = [1,2,3,4,5,6,7,0,8,9];
//     let position= parseInt(positionInput.value);
//     for  (let i=position; i<arr.length; i++ ){
//      arr[i]=arr[i+1];
//     }arr.length--;
//     console.log(arr)
// })


///// search element

// let arr = [1,2,4,4,7,8];
// let target = 4;
// let index=[]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]===target){
//         index.push(i)
//     }
// }console.log(index)


//////merge element

// let arr1 = [1,2,3,4,];
// let arr2= [5,6,7];
// let arr = []

// for(let i=0; i<arr1.length; i++){
//    arr[i]=arr1[i]
// }for(let i=0; i<arr2.length; i++){
//     arr[arr1.length+i]=arr2[i]
// }
// console.log(arr)


// let arr1 = [1,4,8,9,10];
// let arr2= [3,2,5,6];
// let arr = [];

// let i=0
// let j=0;
// let k=0;

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i] < arr2[j]){
//         arr[k] =arr1[i];
//         i++
//     }else{
//         arr[k]=arr2[j];
//         j++
//     }
//     k++
// }
// while(i<arr1.length){
//     arr[k]=arr1[i];
//     i++;
//     k++;
// }
// console.log(arr)


// let arr1 = [1,4,8,9,10];
// let arr2 = [3,2,5,6,11,12];
// let arr = [];

// i=0;
// j=0;
// k=0;

// while (i<arr1.length && j<arr2.length) {
//    if(arr1[i]<arr2[j]){
//     arr[k]=arr1[i]
//     i++
//    }else{
//     arr[k]=arr2[j]
//     j++
//    }
//    k++
// }
// while(j<arr2.length){
//     arr[k]=arr2[j]
//     j++
//     k++
// }
// //arr=arr.reverse()
// console.log(arr)






