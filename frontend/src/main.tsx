import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);
