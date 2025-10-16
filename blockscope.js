// if (true) {
// let blockScopedVar = "I am block-scoped";
// console.log(blockScopedVar); 
// }


// function testBlockScope() {
//   if (true) {
//     let x = 10;
//     const y = 20;
//     console.log("Inside block: x =", x); 
//     console.log("Inside block: y =", y); 
//   }

// }

// testBlockScope();



function testBlockScope() {
  let x;
  const y = 20; 

  if (true) {
    x = 10; 
    console.log("Inside block: x =", x); 
    console.log("Inside block: y =", y); 
  }

  console.log("Outside block: x =", x); 
  console.log("Outside block: y =", y); 
}

testBlockScope(); 
