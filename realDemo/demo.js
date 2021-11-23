// We are tasked to create a program that takes 
// in any number of command line arguments
// which will be numbers, and adds them toghether 
// in and returns a sum of all the numbers.


const arr = process.argv.slice(2);
let sum = 0;
console.log(arr);
for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + Number(arr[i]);
}

console.log("The sum is: ", sum);
