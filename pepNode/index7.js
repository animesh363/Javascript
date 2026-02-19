import express from 'express'
const app =express()

app.listen(8080, ()=>{
    console.log("Server started");
})

app.get("/",(req,res)=>{
    const user ={
        name:"Animesh",
        email:"animeshanand@gmail.com",
        role:"Student"
    };
    // res.send(user);
    res.json(user); //will get in json format me
})