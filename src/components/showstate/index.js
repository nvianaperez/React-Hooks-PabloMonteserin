import React, { useContext } from "react";
import { AppContext } from "../../application/provider";

const ShowState = () => {
  const [state, setState] = useContext(AppContext); //declaro una variable de estado que va a utilizarse en toda la aplicacion
  return (
    <>
      <p>{state.name}</p>;<p>{state.surname}</p>;
    </>
  );
};

export default ShowState;
