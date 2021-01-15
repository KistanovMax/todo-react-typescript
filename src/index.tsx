import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewTodoModal from "./components/NewTodoModal/NewTodoModal";
import TodoList from "./components/TodoList/TodoList";

import { TODOS } from "./constants/index";

import { MAIN_THEME } from "./themes/theme";
import "./styles/global.css";

export default function App(): ReactElement {
  return (
    <>
      <ThemeProvider theme={MAIN_THEME}>
        <Header />
        <TodoList todos={TODOS} />
        <NewTodoModal />
        <Footer />
      </ThemeProvider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
