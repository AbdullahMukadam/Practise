import express from "express";
import UserRoutes from "./Routes/UserRoutes.js";

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  const data = [
    {
      id: 1,
      name: "John",
      email: "zjd@example.com",
    },
    {
      id: 2,
      name: "Jane",
      email: "jane@example.com",
    },
  ];
  res.send(data);
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.use("/api/user", UserRoutes);

app.listen(PORT, () => {
  console.log("Express server initialized", PORT);
});
