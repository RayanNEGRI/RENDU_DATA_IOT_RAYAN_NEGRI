const ip = require('ip')

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const ipAddr = ip.address();
let Mmaison = "Gryffindor";

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({  Mmaison });
})

app.post("/", (req,res) => {
Mmaison = req.body.house;
res.json({ Mmaison })

})

app.use("/", require("./routes/start"));


app.listen(port, () => {
  console.log("http://"+ip.address()+":"+ port);
});





