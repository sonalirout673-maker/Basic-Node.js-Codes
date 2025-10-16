// function hoistingExample() {
//     console.log(x); // undefined, not ReferenceError!
//     var x = 5;
//     console.log(x); // 5
// }

// hoistingExample();


// function hoistingExample() {
//     var x;           
//     console.log(x);  
//     x = 5;
//     console.log(x);  
// }



var message = "Hello from global scope";

function outerFunction() {
    var message = "Hello from outer function";

    function innerFunction() {
        var message = "Hello from inner function";
        console.log("Inner:", message); 
    }

    innerFunction();
    console.log("Outer:", message); 
}

outerFunction();
console.log("Global:", message); 
