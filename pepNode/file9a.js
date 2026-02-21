import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Welcome");
// });
// const auth = (req,res,next) =>{
   
// }

app.get("/:id", (req, res) => {
  const id = req.params.id;

  if (id === "1234") {
    res.send("Welcome");
  } else {
    res.send("Access Denied");
  }
});


app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});

const logger = (req,res,next) => {
    const newuse =req1.body;
     
}