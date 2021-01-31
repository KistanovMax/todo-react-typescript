import React, { useCallback, useContext, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";

import ModalConText from "../../context";
import TodoItem from "../TodoItem/TodoItem";
import NewTodoModal from "../NewTodoModal/NewTodoModal";
import Error from "../Error/Error";
import { fetchTodos } from "../../redux/actions/actions";

import { StyledList, Loader } from "./styled";

export default function TodoList() {
  const { setOpen } = useContext(ModalConText);

  const { isLoading, isLoaded, todos, error } = useSelector((state) => state.Data);

  const dispatch = useDispatch();
  const getCloudTodos = useCallback(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = async (text, date, time, important) => {
    if (text) {
      await axios.post("/todos", { text, date, time, important });
      await getCloudTodos();
      handleClose();
    }
  };

  useEffect(() => {
    getCloudTodos();
  }, [getCloudTodos]);

  const handleDelete = async (id) => {
    await axios.delete(`/todos/${id}`);
    await getCloudTodos();
  };

  const handleClose = () => setOpen(false);

  if (error) {
    return (
      <Box mt="200px">
        <Error error={error} />
      </Box>
    );
  }

  return (
    <>
      <NewTodoModal handleAdd={handleAdd} handleClose={handleClose} todos={todos} />
      <StyledList display="flex" flexDirection="column" alignItems="center">
        {isLoaded && !isLoading ? (
          todos.map(({ _id, text, date, time, important }) => (
            <TodoItem
              key={_id}
              id={_id}
              text={text}
              date={date}
              time={time}
              important={important}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <Box mt="150px">
            <Loader>Loading...</Loader>
          </Box>
        )}
      </StyledList>
    </>
  );
}
