import mysql from "mysql";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user",
});
db.connect((err) => {
  if (err) {
    console.log(err, "database not conected");
    return;
  }
  console.log("database connected");
});
export default db;
