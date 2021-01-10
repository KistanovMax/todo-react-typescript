import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

import { TODOS } from "./constants/index";

import "./styles/global.css";

export default function App(): ReactElement {
  return (
    <>
      <Header />
      <TodoList todos={TODOS} />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
