import React, { ReactElement, useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import locale from "date-fns/locale/en-GB";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

import { TODOS } from "./api/data";

import { MAIN_THEME } from "./themes/theme";
import "./styles/global.css";

export default function App(): ReactElement {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
      <ThemeProvider theme={MAIN_THEME}>
        <Header />
        <TodoList todos={TODOS} open={open} setOpen={setOpen} />
        <Footer handleOpen={handleOpen} />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
