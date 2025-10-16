// Initialize three arrays
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];

// Print original arrays
// console.log("Original Arrays:");
// console.log("Array 1:", array1);
// console.log("Array 2:", array2);
// console.log("Array 3:", array3);

// // Pop values from arrays and store in new array
// let newArray = [];
// newArray.push(array1.pop());
// newArray.push(array2.pop());
// newArray.push(array3.pop());

// // Print popped values
// console.log("\nPopped Values:");
// console.log(newArray);

// // Add new array to array1
// array1 = array1.concat(newArray);

// // Print updated array1
// console.log("\nUpdated Array 1:");
// console.log(array1);




// let a={a:1, b:2, c:3}
// let b={a:4, b:5, c:6}
// let c={a:7, b:8, c:9}
// let d=[a,b,c,]
// //console.log(d)
// //d.pop(d[0]);
// //d.splice([2]);
// for(i=0;i<=2;i++)
// d.pop(d[1]);
// console.log(d)




// let a=[1,2,3,4,5]
// for(i=0;i<=a.length;i++) 
//     console.log(a)








// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function printPrimes(arr) {
//   const primeNumbers = arr.filter(isPrime);
//   console.log(primeNumbers);
// }

// // Example usage:
// const arr = [19,17,16,14,2222,21];
// console.log("Prime numbers in the array:");
// printPrimes(arr);









let name=["Sonali" ,"Sony" ,"Sona" , "Asmita" , "Rani"]
let vowels=name.match(/[aeiou]/gi);
let vowelsArray=vowels||[];
console.log(vowels)