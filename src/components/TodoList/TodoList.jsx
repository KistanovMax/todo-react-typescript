import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../../redux/actions/actions";

import TodoItem from "../TodoItem/TodoItem";
import NewTodoModal from "../NewTodoModal/NewTodoModal";
import ModalConText from "../../context";

import { StyledList } from "./styled";

export default function TodoList() {
  const { setOpen } = useContext(ModalConText);
  const todos = useSelector((state) => state.Data);

  const dispatch = useDispatch();
  const handleAdd = (todos, text, date, time, important) => {
    if (text) {
      dispatch(addTodo(todos, text, date, time, important));
      handleClose();
    }
  };

  const handleDelete = (id) => dispatch(deleteTodo(id));

  const handleClose = () => setOpen(false);

  return (
    <>
      <NewTodoModal handleAdd={handleAdd} handleClose={handleClose} todos={todos} />
      <StyledList display="flex" flexDirection="column" alignItems="center">
        {todos.map((todo) => (
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
    </>
  );
}
