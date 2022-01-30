const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "fitappword1090",
  database: "userdb"
});

app.post('/Signup', (req, res) => {

  const email = req.body.email
  const password = req.body.password
  db.query("INSERT INTO `userdb`.`users` (`email`, `password`) VALUES ('?', '?');", 
  [email, password], 
  (err, result) => {
    console.log(err);
  });
});

app.post('/Login', (req, res) => {

  const email = req.body.email
  const password = req.body.password

  db.query("SELECT * FROM users WHERE email = ? AND password = ?", 
  [email, password], 
  (err, result) => {

    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
        res.send(result);
    }
    else {
        res.send({message: "Incorrect Email or Password!"});
    }
    }
    
  );
});

app.listen(3001, () => {
    console.log('running on port 3001');
});