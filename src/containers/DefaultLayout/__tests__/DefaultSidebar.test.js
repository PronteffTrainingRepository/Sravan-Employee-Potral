import React from "react";
import ReactDOM from "react-dom";
import DefaultSidebar from "../DefaultSidebar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DefaultSidebar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
