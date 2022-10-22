import GlobalStyle from "./constantes/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


import PageInicial from "./pagina inicial/PageInicial";
import PageCadastro from "./pagina cadastro/PageCadastro";
import PageHoje from "./pagina hoje/PageHoje";
import MyContext from "./provedores/Context";
import PageHistorico from "./pagina historico/TelaHistorico";



export default function App() {
  const [login,setLogin] = useState({})
  const [progresso, setProgresso] = useState(0)
  const [cardsHoje, setCardsHoje] = useState({})

  return (
    <>
      <MyContext.Provider value={{login, setLogin, progresso, setProgresso, cardsHoje, setCardsHoje}}>
        <GlobalStyle/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PageInicial/>}/>
              <Route path="/cadastro" element={<PageCadastro/>}/>
              <Route path="/hoje" element={<PageHoje/>}/>
              <Route path="/historico" element={<PageHistorico/>}/>
            </Routes>
          </BrowserRouter>
        </MyContext.Provider>
      </>
  );
}

 