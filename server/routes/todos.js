const router = require("express").Router();
const Todo = require("../models/todo.model");

router.route("/").get((req, res) => {
  Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/").post((req, res) => {
  const newTodo = new Todo({
    text: req.body.text,
    date: req.body.date,
    time: req.body.time,
    important: req.body.important,
  });
  newTodo
    .save()
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
