// function largest(arr){
//     let max=arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//             console.log(max);
//         }
// }
// return max;
// }



function findsecondlargest(arr){
    arr=[new setInterval(arr)]
    arr.sort((a,b)=>b-a);
    return arr[1];
}
let arr=[12,35,1,10,34,1]
console.log("second largest number is:",findsecondlargest(arr));