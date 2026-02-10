import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorld } from "&ui-lib";

const rootEl = document.getElementById("root");
if (rootEl === null) {
  throw new Error("no root");
}

const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>,
);
