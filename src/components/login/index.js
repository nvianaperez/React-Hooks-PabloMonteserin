import React, { useRef, useContext } from "react";
import { AppContext } from "../../application/provider";

const LogIn = () => {
  let nom = useRef(null);
  let ape = useRef(null);
  const [state, setState] = useContext(AppContext); //declaro una variable de estado que va a utilizarse en toda la aplicacion

  return (
    <>
      <input
        type="text"
        ref={nom}
        onChange={() => {
          setState({ ...state, name: nom.current.value }); //para no sobre-escribir lo que había antes, hago una copia del state y añado lo nuevo
        }}
      />
      <input
        type="text"
        ref={ape}
        onChange={() => {
          setState({ ...state, surname: ape.current.value });
        }}
      />
    </>
  );
};

export default LogIn;
