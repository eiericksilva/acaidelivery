import React, { createContext, useState } from "react";

export const OrderDataContext = createContext();

export const OrderDataProvider = ({ children }) => {
  //dados do pedido
  const [order, setOrder] = useState({});

  //dados contendo pedido e dados do cliente
  const [finalData, setFinalData] = useState([]);

  return (
    <OrderDataContext.Provider
      value={{ order, setOrder, finalData, setFinalData }}
    >
      {children}
    </OrderDataContext.Provider>
  );
};
