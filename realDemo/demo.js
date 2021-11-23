// We are tasked to create a program that takes 
// in any number of command line arguments
// which will be numbers, and adds them toghether 
// in and returns a sum of all the numbers.


/////////////
// How on earth am i able to add numbers?
console.log(4 + 4);
// how do i have multiple numbers ?
let num1 = 1;
let num2 = 2;
let num3 = 3;
const arr = [10,10,20,30,40]
console.log(arr);
// how do i go through EVERY SINGLE NUMBER in the array?
//  use a for loop!!
let sum = 0;
for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + Number(arr[i]);
}

console.log("The sum is: ", sum);


// what are these "command line arguments"?
// how do i utilize this?
// how do i display all of this out?