import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <button>Click me!</button>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
