// function add(a, b){
//     console.log(a);
//     console.log(b);
//     console.log("Sum = " , a+b);
// }
// add(4,6)



// function add(a,b){
//     console.log(arguments);
//     console.log(arguments.length); // legtn of the argument
//     console.log();
    
// }
// add(4,5,7,6,8,9)



function add(...arr){
    let sum =0
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum
}
const result = add(7,5,8,9)
console.log(result);
