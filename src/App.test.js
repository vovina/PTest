import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("should renders without crashing the app", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
});
