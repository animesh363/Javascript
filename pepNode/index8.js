import express, { request, response } from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server Started....");
});


const greet = () =>{
  console.log("Hello Duniyan!");

};

app.use(greet)

app.use(express.json())
let users = [
  { id: 1, name: "Animesh", email: "ani@mail.com", role: "Student" },
  { id: 2, name: "Golu", email: "golu@mail.com", role: "admin" },
  { id: 3, name: "Tolu", email: "tolu@mail.com", role: "Student" },
];

app.get("/", (request, response) => {
  response.json(users);
});

app.post("/", (request, response) => {
//   console.log(request.body);
  const user = request.body;
  users.push(user)
  response.json(users);
});


app.delete("/:id", (request, response) => {

});

//users
// req.query.name
// req.params.name

// req.body.name
// {
//   "name":"Animesh"
// }
//req.header