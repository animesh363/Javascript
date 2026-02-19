import express from "express";

const app = express();

app.listen(8080, () => {
  console.log("Server started on port 8080");
});

app.get("/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});



// http://localhost:8080/?name/Animesh
// app.get("/name/:name",()=>{})

// http://localhost:8080/?name=Animesh
// app.get("/name/:name",()=>{})