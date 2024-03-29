const fs = require("fs");
const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const port = process.env.Port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json"); //json 읽어오기
const conf = JSON.parse(data); //환경 설정 파싱해서 가져오기
const mysql = require("mysql"); //mysql 불러오기

const connection = mysql.createConnection({
     host: conf.host,
     user: conf.user,
     password: conf.password,
     port: conf.port,
     database: conf.database
});

connection.connect();

app.get("/api/customers", (req, res) => {
     connection.query("SELECT * FROM CUSTOMER", (err, rows, fields) => {
          res.send(rows);
     });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
