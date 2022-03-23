import React from "react";
// import { useRef, useState, useEffect } from "react";
// import axios from "axios";

/****** useRef ********/

// function App() {
//   const inputText = useRef(null);
//   const resultadoText = useRef(null);

//   const saludar = () => {
//     resultadoText.current.innerHTML = inputText.current.value;
//   };

//   return (
//     <>
//       <input type="text" ref={inputText} />
//       <button onClick={saludar}>Saluda</button>
//       <div>Hola {resultadoText}</div>
//     </>
//   );
// }

/***** useState + useEffect ******/
// para recoger valores de formularios --> useState funciona en ReactJs y en ReactNative. useRef solo funciona en ReactJs

// function App() {
//   const [numero, setNumero] = useState(8);
//   const [txt, setTxt] = useState("");

//   const cambiarNum = () => {
//     setNumero(4);
//   };

//   useEffect(() => {
//     alert("hola");
//   }, [numero]);

//   const muestraTxt = (e) => {
//     setTxt(e.target.value);
//   };

//   return (
//     <>
//       {numero}
//       <button onClick={() => cambiarNum()}>Púlsame</button>

//       {txt}
//       <input type="text" onChange={(e) => muestraTxt(e)} />
//     </>
//   );
// }

/***** fetch ******/

// const App = () => {
//   const [name, setName] = useState(null);

//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//       .then((res) => res.json()) //cuando llegan los datos, me llegan en formato texto y los convierto a json
//       .then((res) => {
//         // console.log(res);
//         setName(res.name); //actualizamos el estado para que me de el name
//       });
//   }, []);

//   return <>{name}</>;
// };

/***** axios ****** simlifica el fetch prque ya me convierte la cadena de texto a json */

// const App = () => {
//   const [name, setName] = useState(null);

//   useEffect(() => {
//     axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
//       // console.log(res.data);
//       setName(res.data.name); //actualizamos el estado para que me de el name
//     });
//   }, []);

//   return <>{name}</>;
// };

/***** Context API ******/

import MyProvider from "./application/provider";
import LogIn from "./components/login/index";
import ShowState from "./components/showstate/index";

const App = () => {
  <MyProvider>
    <LogIn />
    <ShowState />
  </MyProvider>;
};

export default App;
