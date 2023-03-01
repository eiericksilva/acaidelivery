import React, { createContext, useState } from "react";

export const OrderDataContext = createContext();

export const OrderDataProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  return (
    <OrderDataContext.Provider
      value={{
        order,
        setOrder,
      }}
    >
      {children}
    </OrderDataContext.Provider>
  );
};
