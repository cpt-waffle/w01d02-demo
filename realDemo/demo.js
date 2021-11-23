// We are tasked to create a program that takes 
// in any number of command line arguments
// which will be numbers, and adds them toghether 
// in and returns a sum of all the numbers.


const sum = function(arr) {
    let result = 0;
    console.log(arr);
    for (let i = 0; i <= arr.length - 1; i++) {
        result = result + Number(arr[i]);
    }
    return result;
}
const arr = process.argv.slice(2);
const result = sum(arr);
console.log("The sum is: ", result);
