import express from "express";

const app = express();

app.get("/x/:x/y/:y/z/:z", (req, res) => {
  const x = parseInt(req.params.x);
  const y = parseInt(req.params.y);
  const z = parseInt(req.params.z);

  res.send({
    x,
    y,
    z,
    sum: x + y + z
  });
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});



// http://localhost:8080/x/4/y/6/z/8