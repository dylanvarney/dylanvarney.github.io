import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
