const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: String,
  date: String,
  time: String,
  important: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;