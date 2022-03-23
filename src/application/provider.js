import React, { useState, createContext } from "react";

const MyProvider = (props) => {
  const [state, setState] = useState({});

  return (
    <>
      <AppContext.Provider value={[state, setState]}>
        {props.children}
        {/* aquí van los componentes que comparten el estado */}
      </AppContext.Provider>
    </>
  );
};

export default MyProvider;
export const AppContext = createContext();
