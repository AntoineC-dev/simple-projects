import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");
const app = createRoot(root!);
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
