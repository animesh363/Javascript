import express from "express";

const app = express();

const users = [
  { id: 1, name: "Animesh", email: "animesh@gmail.com", role: "student" },
  { id: 2, name: "Pranav", email: "pranav@gmail.com", role: "student" },
  { id: 3, name: "Vishal", email: "vishal@gmail.com", role: "student" }
];
function getUserById(req, res) {
  const userId = parseInt(req.params.id);

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.json(user);
}
app.get("/:id", getUserById);
app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
