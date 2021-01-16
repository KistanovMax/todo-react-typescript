import React, { ReactElement } from "react";

import TodoItem from "../TodoItem/TodoItem";
import { StyledList } from "./styled";

interface TodoList {
  todos: { id: number; text: string; important: boolean }[];
}

export default function TodoList({ todos }: TodoList): ReactElement {
  return (
    <StyledList display="flex" flexDirection="column" alignItems="center">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          important={todo.important}
        />
      ))}
    </StyledList>
  );
}