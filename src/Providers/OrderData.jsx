import React, { createContext, useState } from "react";

export const OrderDataContext = createContext();

export const OrderDataProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  const [finalData, setFinalData] = useState({});

  return (
    <OrderDataContext.Provider
      value={{
        order,
        setOrder,
        finalData,
        setFinalData,
      }}
    >
      {children}
    </OrderDataContext.Provider>
  );
};
