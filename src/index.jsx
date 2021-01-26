import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import locale from "date-fns/locale/en-GB";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import ModalConText from "./context";
import store from "./redux/store";

import { MAIN_THEME } from "./themes/theme";
import "./styles/global.css";

export default function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
        <ThemeProvider theme={MAIN_THEME}>
          <ModalConText.Provider value={{ open, setOpen }}>
            <Header />
            <TodoList />
            <Footer handleOpen={handleOpen} />
          </ModalConText.Provider>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
