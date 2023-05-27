import React, {useState, useEffect} from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/Temas";
import { BtnTema } from "./Components/UI";
import SwithcherTema from "./Components/SwithcherTema";

console.log(temaClaro, temaOscuro)

function App() {
  const [tema, setTema] = useState(true);

  useEffect (() => {
    localStorage.setItem("tema",tema);
  },[tema]);

  const toggleTema = () =>{
    setTema((tema) => !tema)
  }
  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwithcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
      <Container />
    </ThemeProvider>
  );
}

export default App;
