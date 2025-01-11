//loops

// for (let i=0 ; i<10 ; i++){
//   console.log(i)
 
// }


// for (let i=10 ; i>=1 ; i--){
//   console.log(i)
 
// }

// let i=1
// while (i<10) {
//   console.log(i)
//   i++
// }

// let i=10
// while (i>=1) {
//   console.log(i)
//   i--
// }

// let i= 1
// do {
//   console.log(i)
//   i++
// } while (i<10);


// let a = prompt ("enter a number ")
// let fact = 1


// for (let i=1; i<=a; i++){
// fact *= i

// }
// console.log(fact)




// for (let i=0; i<=20; i++){
//  if(i%2===0) {
//     console.log(i ,"number is even")
//  }else{
//     console.log(i, "number is odd")
//  }
   
// }

// let a = prompt("enter number")

// for (let i=1; i<=10; i++){
//  let tab= a*i
//  console.log(tab)
// }

// let a = prompt("enter number")
// let sum=0
// for (let i=0; i<=a; i++){
   
//     sum+=i
// }
// console.log(sum)

// let prime = 1

// for (let i=1; i<=10; i++){
//    if(  i%i==0){
//     console.log ( i, "number is not prime")
//    }else {
//     console.log ( i, "number is  prime")
//    }
// }


//nested loops

// let n= 3;
// for(let i=1; i<=n; i++){
//   let row = " ";
//   for(let j=1; j<=n; j++){
//     row+= j+" ";
//   }console.log(row)
// }

// let n= 4;
// for(let i=1; i<=n; i++){
//   let row = " ";
//   for(let j=1; j<=n; j++){
//     row+="* ";
//   }console.log(row)
// }

//  let n= 4;
//  let ch = 65;
 
// for(let i=0; i<n; i++){
//  let row= " "
//   for(let j=0; j<n; j++){
//     row+= String.fromCharCode(ch)+" ";
//     ch++
//   }console.log(row)
//   ch =65+(i+1)*4
// }


// let num=1
// let n=3
// for(let i=0; i<n; i++){
//   let row="";
//   for(let j=0; j<n; j++){
//    row+=num+" "
//    num++
//   }
//     console.log(row)
// }

// let ch =65;
// let rows = 5;
// let cols = 5;

// for(let i=0; i<rows; i++){
//   let row = ""
//   for(let j=0; j<cols; j++){
//     row+= String.fromCharCode(ch)+" "
//     ch++;
//   }
//   console.log(row)
// }



// let n=10;
// for(let i=0; i<n; i++){
//   let row="";
//   for(let j=0; j<i+1; j++){
//      row+="*  "
//   }console.log(row)
// }


// let n=4;
// for(let i=0; i<n; i++){
//   let row="";
//   for(let j=0; j<i+1; j++){
//      row+=i+1
//   }console.log(row)
// }


// let ch = 65;
// let n=5;
// for (let i=0; i<n; i++){
//   let row=""
//   for(let j=0; j<i+1; j++){
//   row+=String.fromCharCode(ch)+" "
//   ch++
//   }
//   console.log(row)
// }


// let n = 5;
// for(let i=0; i<n; i++){
//   let row = ""
//   for(let j=1; j<i+1; j++){
//      row+=j+" "
//   }console.log(row)
// }


// let n=5;
// for(let i=0; i<n; i++){
//   let row = ""
//   for(let j=i+1; j>0; j--){
//     row += j + " "
//   }console.log(row)
// }


// let n= 4;
// let num =1
// for(let i=0; i<n; i++){
//   let row = "";
//   for(let j=0; j<i+1; j++){
//     row+=num+" "
//     num++
//   }console.log(row)
// }


// let n=4;
// for(let i=0; i<n; i++){
//   let row = "";
//   for(let j=0; j<i; j++){
//     row+="  "
//   }
//   for(let j=0; j<n-i; j++){
//     row+=i+1+" "
//   }
//   console.log(row)
// }


//  let n=4;
//  let ch = 65
// for(let i=0; i<n; i++){
//   let row = "";
//   for(let j=0; j<i; j++){
//     row+="  "
//   }
//   for(let j=0; j<n-i; j++){
//     row+=String.fromCharCode(ch)+" "
//     ch++
//   }
//   console.log(row)
// }


// let n=5;
// for(let i=0; i<n; i++){
//   let row =" ";
//   for(let j=0; j<n-i-1; j++){
//      row+=" ";
//   }
//    for (let j = 1; j <= i+1; j++) {
//     row += j;
//   }
//   for(let j=i; j>=1; j--){
//     row+=j;
//   }
//   console.log(row)

// }


// let n=4;
// for(let i=0; i<n; i++){
//     let row=""
//     for(let j=0; j<n-i-1; j++){
//         row+=" "
//     }
//     row+="*"
//     if(i!=0){
//         for(let j=0; j<2*i-1; j++){
//             row+=" "
//         }
//        row+="*"
//     }console.log(row)
// }
// for(let i=0; i<n-1; i++){
//     let row=""
//     for(let j=0; j<i+1; j++){
//         row+=" "
//     }
//     row+="*"
//     if(i!=n-2){
//         for(let j=0; j<2*n-i-5; j++){
//             row+=" "
//         }
//        row+="*"
//     }console.log(row)
// }


// let n=6;
// for(let i=0; i<n; i++){
//     let row = ""
//     for(let j=0; j<i+1; j++){
//         row+="*"
//     }
//      for(let j=0; j<n-1-i; j++){
//         row+="  "
//      }
//      for(let j=0; j<i+1; j++){
//         row+="*"
//      }console.log(row)
// }
// for(let i=0; i<n-1; i++){
//     let row = ""
//     for(let j=0; j<n-1-i; j++){
//         row+="*"
//     }
//      for(let j=0; j<i+1; j++){
//         row+="  "
//      }
//      for(let j=0; j<n-1-i; j++){
//         row+="*"
//      }console.log(row)
// }


