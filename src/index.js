import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import FileSystemExpandCollapseDemo from "./demos/filesystem";

function App() {
  return <FileSystemExpandCollapseDemo />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
