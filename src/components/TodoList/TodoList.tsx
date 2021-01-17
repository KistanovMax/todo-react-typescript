import React, { ReactElement, useState } from "react";
import { Todo } from "../../types";
import NewTodoModal from "../NewTodoModal/NewTodoModal";

import TodoItem from "../TodoItem/TodoItem";
import { StyledList } from "./styled";

interface TodoListProps {
  todos: Todo[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TodoList({
  todos,
  open,
  setOpen,
}: TodoListProps): ReactElement {
  const [data, setData] = useState(todos);
  const [text, setText] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleText = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setText(e.target.value);
  };

  const handleAdd = (date: string, time: string, important: boolean) => {
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

  const handleDelete = (id: number) => {
    const newData = data.filter((el) => el.id != id);
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
      <NewTodoModal
        open={open}
        handleAdd={handleAdd}
        handleClose={handleClose}
        handleText={handleText}
      />
    </>
  );
}
