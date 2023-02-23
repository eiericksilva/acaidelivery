import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./css/global";
import { OrderDataProvider } from "./Providers/OrderData";
import { FinalPriceProvider } from "./Providers/FinalPriceContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <OrderDataProvider>
      <FinalPriceProvider>
        <App />
      </FinalPriceProvider>
    </OrderDataProvider>
  </React.StrictMode>
);
