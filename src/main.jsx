import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./css/global";
import { OrderDataProvider } from "./Providers/OrderData";
import { ValueProvider } from "./Providers/ValueContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <OrderDataProvider>
      <ValueProvider>
        <App />
      </ValueProvider>
    </OrderDataProvider>
  </React.StrictMode>
);
