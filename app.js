import express from "express";
const app = express();
const port = 3000;
import db from "./database.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("okee");
});

//read
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM userdb";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json({
      message: "Get data berhasil",
      result,
    });
  });
});

//write
app.post("/users", (req, res) => {
  const { username, password } = req.body;
  const sql = `INSERT INTO userdb (username, password) VALUES ('${username}', '${password}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json({
      message: "INSERT data berhasil",
      result,
    });
  });
});

app.listen(port, () => console.log(`App listen on port ${port}..`));
