const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const port = process.env.Port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
     res.send([
          {
               id: 1,
               image: "https://placeimg.com/128/128/any",
               name: "떠돌이 방황자",
               birth: "921003",
               gender: "남자",
               job: "피리부는 거지"
          },
          {
               id: 2,
               image: "https://placeimg.com/128/128/1",
               name: "떠돌이 날치",
               birth: "940203",
               gender: "여자",
               job: "뱃사공"
          },
          {
               id: 3,
               image: "https://placeimg.com/128/128/2",
               name: "떠돌이 곰",
               birth: "930727",
               gender: "남자",
               job: "제빵사"
          }
     ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
