import React, { useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ModalConText from "../../context";
import TodoItem from "../TodoItem/TodoItem";
import NewTodoModal from "../NewTodoModal/NewTodoModal";
import { getTodos, addTodo, deleteTodo } from "../../redux/actions/actions";

import { StyledList } from "./styled";

export default function TodoList() {
  const { setOpen } = useContext(ModalConText);

  const todos = useSelector((state) => state.Data);

  const dispatch = useDispatch();
  const getCloudTodos = useCallback(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleAdd = (text, date, time, important) => {
    if (text) {
      dispatch(addTodo(text, date, time, important));
      handleClose();
    }
  };

  useEffect(() => {
    getCloudTodos();
  }, [getCloudTodos]);

  console.log(todos);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <NewTodoModal handleAdd={handleAdd} handleClose={handleClose} todos={todos} />
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
