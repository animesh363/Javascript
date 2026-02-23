import express from 'express'
import jwt from 'jsonwebtoken'
const app =  express()


const SECRET = "lpu"
const port = 8080

app.listen(port,()=>{
    console.log("Server is started on 8080");
})


const user = {
    name:"Animesh",
    email:"ani@gmail.com",
    role:"student",
}

const token = jwt.sign(user,SECRET,{expiresIn: "1h"})
console.log(token);