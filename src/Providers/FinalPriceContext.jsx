import React, { createContext, useState } from "react";

export const FinalPriceContext = createContext();

export const FinalPriceProvider = ({ children }) => {
  const [sum, setSum] = useState(0);

  return (
    <FinalPriceContext.Provider value={{ sum, setSum }}>
      {children}
    </FinalPriceContext.Provider>
  );
};
