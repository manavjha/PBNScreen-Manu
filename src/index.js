import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "react-datepicker/dist/react-datepicker.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
