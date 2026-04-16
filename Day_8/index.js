import express from "express";
import { createUser } from "./controllers/userController.js";

const app = express();
const PORT = 3000;

// 🔥 Middleware (important for JSON data)
app.use(express.json());

// Route 1
app.post("/register", (req, res) => {
  res.send("User registration endpoint");
});

// Route 2
app.post("/users", createUser);

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});