import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

import "./styles/global.css";

export default function App(): ReactElement {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
