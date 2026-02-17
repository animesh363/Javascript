//Closer

function outer(){
    let n=1;
    function inner(){ // closer ->inner function 
        return n++;
    }
    return inner;
}

const counter = outer()

console.log(counter());
console.log(counter());
console.log(counter());