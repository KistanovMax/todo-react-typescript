import React, { useState } from "react";
import NewTodoModal from "../NewTodoModal/NewTodoModal";

import TodoItem from "../TodoItem/TodoItem";
import { StyledList } from "./styled";

export default function TodoList({ todos, open, setOpen }) {
  const [data, setData] = useState(todos);
  const [text, setText] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleAdd = (date, time, important) => {
    if (text) {
      const newTodo = {
        id: data.length + 1,
        text,
        date,
        time,
        important,
      };
      setData([...data, newTodo]);
      setText("");
      handleClose();
    }
  };

  const handleDelete = (id) => {
    const newData = data.filter((el) => el.id !== id);
    setData([...newData]);
  };

  return (
    <>
      <StyledList display="flex" flexDirection="column" alignItems="center">
        {data.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            date={todo.date}
            time={todo.time}
            important={todo.important}
            handleDelete={handleDelete}
          />
        ))}
      </StyledList>
      <NewTodoModal open={open} handleAdd={handleAdd} handleClose={handleClose} handleText={handleText} />
    </>
  );
}
