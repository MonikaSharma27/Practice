// function welcome (){
//   let name = prompt("Dear user, please enter your name: ");
//   alert(`Welcome ${name}! This program will help you to check a number.`);
//   intro()
// }

// function intro (){
//   let choice = parseInt (prompt("1: To continue\n2: To exit"));
//   if (choice===1){
//     toss();
//   }else if (choice===2){
//     alert("Exit");
//   }else {
//        alert("Invalid option");
//        intro();
//        }
 
// }

// function toss(){
//   let num = parseInt (prompt("please enter a number to check number is negative or positive"))
//   if (num>0){
//     alert("Number is postive")
//   }else if(num==0){
//     alert("Number is negative")
//   }
//   intro();

// }
// welcome();





// let studentName = prompt("Enter student name: ");
// let rollNumber = prompt("Enter roll number: ");
// let marks = [];

// for (let i = 1; i <= 5; i++) {
//   marks.push(parseInt(prompt(`Enter marks for subject ${i}: `)));
// }

// // Average marks calculate karna
// let averageMarks = 0;
// for (let i = 0; i < marks.length; i++) {
//   averageMarks += marks[i];
// }
// averageMarks /= marks.length;

// // Grade calculate karna
// let grade;
// if (averageMarks >= 90) {
//   grade = "A";
// } else if (averageMarks >= 80) {
//   grade = "B";
// } else if (averageMarks >= 70) {
//   grade = "C";
// } else if (averageMarks >= 60) {
//   grade = "D";
// } else {
//   grade = "F";
// }

// // Marksheet print karna
// console.log(`Student Name: ${studentName}`);
// console.log(`Roll Number: ${rollNumber}`);
// console.log("Marks:");
//  for (let i = 0; i < marks.length; i++) {
//   console.log(`  Subject ${i + 1}: ${marks[i]}`);
// }
// console.log(`Average Marks: ${averageMarks}`);
// console.log(`Grade: ${grade}`);




// let welcome=()=>{
// let Name = prompt("Enter account holder name");
// let Ac = prompt("Enter Your Account Number");
// let balance = parseInt (prompt("Enter initial balance"));
// let choice = parseInt (prompt("Enter your choice: \n1. Deposit \n2. Withdrawal \n3. Check Balance \n4. Exit "))


// let deposit =()=>{
//     let amount = parseInt( prompt("Enter amount to deposit"));
//     balance += amount;
//       console.log("New balance is:"  + balance);
// }

// let withdrawal =()=>{
//     let amount = parseInt (prompt("Enter amount to withdraw"));
//     if(balance>=amount){
//         balance-=amount;
//         console.log("New balance is:"  + balance);
//     }else{
//         console.log("Insufficient balance")
//     }
// }

// let checkBalance =()=>{
//     console.log("Current balance is:"  + balance);
//       let again =parseInt( prompt("1: To continue\n2: To exit"))
//       if(again === 1){
//         welcome()
//       }else if(again === 2){
//         alert("existing..")
//       }
// }

// if (choice ===1){
//     deposit();
// }else if (choice===2){
//     withdrawal();
// }else if (choice === 3){
//     checkBalance();
// }else if( choice === 4){
//     alert("Existing...")
// }else{
//     console.log("Invalid option")
// }

// }
// welcome()


