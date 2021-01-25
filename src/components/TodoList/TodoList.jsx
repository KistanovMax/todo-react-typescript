import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import TodoItem from "../TodoItem/TodoItem";
import NewTodoModal from "../NewTodoModal/NewTodoModal";
import ModalConText from "../../context";

import { StyledList } from "./styled";

export default function TodoList() {
  const { setOpen } = useContext(ModalConText);
  const [todos, setTodos] = useState([]);

  const handleAdd = (text, date, time, important) => {
    if (text) {
      axios.post("http://localhost:5000/todos", { text, date, time, important });
      handleClose();
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/todos").then(({ data }) => {
      setTodos(data);
    });
  }, [todos]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <NewTodoModal handleAdd={handleAdd} handleClose={handleClose} />
      <StyledList display="flex" flexDirection="column" alignItems="center">
        {todos.map(({ _id, text, date, time, important }) => (
          <TodoItem
            key={_id}
            id={_id}
            text={text}
            date={date}
            time={time}
            important={important}
            handleDelete={handleDelete}
          />
        ))}
      </StyledList>
    </>
  );
}
