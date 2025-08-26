import React, { createContext, useState, useContext } from "react";

const RentalContext = createContext();

export const RentalProvider = ({ children }) => {
  const [selectedHouse, setSelectedHouse] = useState(null);

  return (
    <RentalContext.Provider value={{ selectedHouse, setSelectedHouse }}>
      {children}
    </RentalContext.Provider>
  );
};

export const useRental = () => useContext(RentalContext);
