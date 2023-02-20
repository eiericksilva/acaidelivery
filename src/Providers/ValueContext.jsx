import React, { createContext, useState } from "react";

export const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [sum, setSum] = useState(0);

  return (
    <ValueContext.Provider value={{ sum, setSum }}>
      {children}
    </ValueContext.Provider>
  );
};
