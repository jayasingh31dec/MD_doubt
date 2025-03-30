
const mongoose = require(" mongoose ");
const studentsSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    marks: Number
});
const Students = mongoose.model("Students", studentsSchema);
module.exports = Students;

