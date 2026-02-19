import express from 'express'

const app = express()

app.listen(8080, () => {
    console.log("Server started on port 8080");
})

app.get("/:id", (req, res) => {
    console.log(req.url);
    res.send(req.params.id)   
})

app.get("/:id/:email", (req, res) => {
    console.log(req.url);
    res.send(req.params)      
})

app.get("/id/:id/email/:email", (req, res) => {
    console.log(req.url);
    res.send(req.params.id + " " + req.params.email)
})

app.get("/home", (req, res) => {
    res.send("hello Duniyan !")
})
