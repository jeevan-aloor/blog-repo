const mongoose = require("mongoose");


const connection = mongoose.connect(
  "mongodb+srv://jeevan:jeevu@cluster0.rvinojj.mongodb.net/blogmania?retryWrites=true&w=majority"
);


module.exports = { connection };