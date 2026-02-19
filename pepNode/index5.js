import express from 'express'

const app =express();
app.listen(8080)

app.get("/",(a,b)=>{
    console.log(a.header);
    console.log(a.header.autho );
    res.send("server is running on 8080")
})

