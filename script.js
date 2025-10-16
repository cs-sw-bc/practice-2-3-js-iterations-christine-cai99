/*
  =============================================
  🧩 JavaScript Loop Practice Assignment
  =============================================
  Goal: Get comfortable writing for, while, and do...while loops in real-life scenarios.
  Each section has 3 short exercises.
  Write your code below each section comment.
  ---------------------------------------------
  */

  // 🔹 PART A – FOR LOOPS
  // 1. Counting Up:
  //    Print numbers from 1 to 20 using a for loop.
  
 for(let x=1;x<21;x++){
  console.log(x);
 }

  // 2. Multiples of 5:
  //    Print all multiples of 5 from 5 to 50.
  //    Hint: use i += 5 instead of i++.
  
for(let y=5;y<51;y +=5){
  console.log(y);
}


  // 3. Sum of First 10 Numbers:
  //    Use a for loop to calculate the sum of numbers from 1 to 10 and display the total.

let total =0;

for(let z=1; z<=10;z++){
  total +=z;
}

console.log(total);


  // 🔹 PART B – WHILE LOOPS
  // 1. Password Checker (simulated):
  //    Keep checking a variable `input` until it matches "open".
  //    You can simulate this with an array like ["wrong", "nope", "open"].
  
// let input = null;
//   while (input != "open"){
//     input = prompt ("Enter an input:");
//   }


  // 2. Add Until Finish:
  //    Keep adding numbers in an array until the word "Finish" appears.
  

const values = [3, 7, 2, 9, "Finish"];
let sum = 0;
let index =0;

while (values[index] !== "Finish"){
  sum += values[index];
  index +=1;
}

console.log(sum);


  // 3. Countdown:
  //    Start from 10 and keep counting down until you reach 0.
  //    Print each number on a new line.


let number =10;
while (number>=0){
  console.log(number);
  number = number -1;
}





  // 🔹 PART C – DO...WHILE LOOPS
  // 1. Guessing Game (simulation):
  //    Generate a random number between 1–10 using:
  //       Math.floor(Math.random() * 10) + 1
  //    Keep “guessing” until you get 5. The loop should run at least once.

let random;
do{
  random = Math.floor(Math.random() * 10) + 1;
  console.log("Keep guessing");
}while (random != 5);


  
  // 2. Menu Simulation:
  //    Show a fake menu at least once (like “1. Play  2. Exit”) and exit when option = 2.

// let option;
// do{
//   console.log("1. Play  2. Exit")
//   option = Number(prompt("Please select an option:"));
// }while(option != 2);




// 3. Number Input Validation:
  //    Ask for a number greater than 10.
  //    Keep re-checking until it’s valid (simulate input with variables).

// let i;
// do{
//   i=Number(prompt("Enter a number that is greater than 10"));
// }while(i<=10);

  // 🔹 PART D – BONUS: LOOP CONTROL
  // 1. Break Example:
  //    Loop numbers 1–10. Stop completely when the number is 7.
  
for(let n =1; n<=10; n++){
  if (n==7){
    break;
  }
  console.log(n);
}


  // 2. Continue Example:
  //    Loop numbers 1–10. Skip printing when the number is 5.

for(let n=1; n<=10; n++) {
  if (n===5) {
    continue;
  }
  console.log(n);
}

  // 3. Combined:
  //    Print numbers 1–20, skip even numbers, but stop entirely when you hit 17.

for(let n=1; n<=20; n++){
  if(n%2===0){
    continue;
  }
  if(n==17){
    break;
  }
  console.log(n);
}



  // ✅ Submission
  // - Submit a single .html file containing your solutions.
  // - Include comments describing which loop type you used.
  // - Use console.log() or document.write() to display results.
