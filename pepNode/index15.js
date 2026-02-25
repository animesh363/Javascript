import express from 'express'
import jwt from 'jsonwebtoken'
const app = express()

const SECRET = "lpu"

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW5pbWVzaCIsImVtYWlsIjoiYW5pQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNzcxODMzOTUxLCJleHAiOjE3NzE4Mzc1NTF9.Cw7cGS4yuaST86yoM3_Dwlsmg1n6-xey85ia9PKI8g0"
app.listen(8080,()=>{
    console.log("Server started");
})

const user = jwt.verify(token,SECRET)
console.log(user);


