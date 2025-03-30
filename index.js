const express = require("express");
const mongoose = require("mongoose");
const Students=require("./Students");

const app = express();
app.use(express.json());
let port = 3000;

let connection_url ='mongodb://localhost:27017/student3'

mongoose.connect(connection_url).then(()=>console.log('conneted'));
app.get("/", (req, res) => {
    Student.find({}).then(students => res.json(students))  
})
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));