function f1() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("This is f1 function")
        resolve()
    },3000)
  });
}

async function main(){
    await f1(5)
    console.log("program completed sucessfully!");
}

main()