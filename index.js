import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  const data = [
    {
      id: 1,
      name: "John",
      email: "ztejd@example.com",
    },
    {
      id: 2,
      name: "Jane",
      email: "oqibz@example.com",
    },
  ];
  res.send(data);
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.listen(PORT, () => {
  console.log("Express server initialized");
});
