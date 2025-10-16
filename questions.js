// let num = 15;  // you can change the number

// if (num % 3 === 0 && num % 5 === 0 && num % 10 !== 0) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// let a = 5;
// let b = 10;

// console.log("Before swapping: a =", a, ", b =", b);

// // Swapping without using third variable
// a = a + b;
// b = a - b;
// a = a - b;

// console.log("After swapping: a =", a, ", b =", b);


// let a = 5;
// let b = 10;
// let temp;

// console.log("Before swapping: a =", a, ", b =", b);

// // Swapping using third variable
// temp = a;
// a = b;
// b = temp;

// console.log("After swapping: a =", a, ", b =", b);




// function isPrime(num) {
//   if (num <= 1) {
//     return false; // 0 and 1 are not prime
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false; // divisible by another number
//     }
//   }

//   return true; // prime number
// }

// // Example usage
// console.log(isPrime(7));  // true
// console.log(isPrime(10)); // false





// function isprime(num){
//     if(num<2) return false;
//     for(let i=2; i<=Math.sqrt(num);i++){
//         if(num%i===0) return false;
//     }
//     return true;
// }
// console.log(isprime(19));



// function createCounter() {
//   let count = 0;
//   return function() {
//     count++;
//     console.log("Function called", count, "times");
//   };
// }

// const counter = createCounter();

// counter(); // Function called 1 times
// counter(); // Function called 2 times
// counter(); // Function called 3 times






// function createCounter() {
//   let count = 0; // private variable, remembered by closure
//   return function() {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3










// function countVowels(word) {
//     // Convert word to lowercase to handle both uppercase and lowercase letters
//     word = word.toLowerCase();
//     // Define vowels
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     // Initialize count
//     let count = 0;

//     // Loop through each character in the word
//     for (let char of word) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// // Example usage:
// console.log(countVowels("Hello")); // Output: 2
// console.log(countVowels("OpenAI")); // Output: 3







// // Store address as a multi-line string using backticks
// let address = `Sonali Rout 
// Jajpur,
//  Odisha,
//   India`;

// console.log(address);








// function toUpperCaseString(str) {
//   return str.toUpperCase();
// }
// let text = "hello world";
// let result = toUpperCaseString(text);

// console.log("Original String:", text);
// console.log("Uppercase String:", result); //phn





// export function add(a,b){
//   return a+b;
// }
// export function substract(a,b){
//   return a-b;
// }
// export function multiple(a,b){
//    return a*b;
// }
// export function divide(a,b){
//   if(b===0){
//     return "error:division by zero";
//   }
//   return a/b;
// }



// let a=[1,5,6]
// console.log(a.length-1)


//print odd no. using array
// let numbers=[];
// for(let i=51;i<=99;i++){
//   if(numbers[i]%2!==0){
//   numbers.push(i)
//   }
// }
//   console.log(numbers);




// let name="SONALI ROUT";
// let vowels=name.match(/[aeiou]/gi);
// let consonant=name.match(/[^aeiou\s]/gi);
// //let nonvowels=name.match(/[^aeiou\s]/gi);
// let vowelsArray=vowels||[];
// console.log(vowels)
// //console.log("nonvowels:"nonvowel)
// console.log(consonant)



arr=[48,12,66,68,01]
// function arrayalter(arr)
// arr=[];

for(i=0;i<arr.length;i+=2){
    arr.push(arr[i])
}
        console.log(i)

