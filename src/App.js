import GlobalStyle from "./constantes/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


import PageInicial from "./pagina inicial/PageInicial";
import PageCadastro from "./pagina cadastro/PageCadastro";
import PageHoje from "./pagina hoje/PageHoje";
import MyContext from "./provedores/Context";
import PageHistorico from "./pagina historico/TelaHistorico";
import PageHabitos from "./pagina habitos/PageHabitos";



export default function App() {
  const [login,setLogin] = useState({})
  const [progresso, setProgresso] = useState(0)
  const [cardsHoje, setCardsHoje] = useState({})
  const [novo, setNovo] = useState(false)


  return (
    <>
      <MyContext.Provider value={{login, setLogin, 
            progresso, setProgresso, 
            cardsHoje, setCardsHoje,
            novo, setNovo}}>
        <GlobalStyle/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PageInicial/>}/>
              <Route path="/cadastro" element={<PageCadastro/>}/>
              <Route path="/hoje" element={<PageHoje/>}/>
              <Route path="/historico" element={<PageHistorico/>}/>
              <Route path="/habitos" element={<PageHabitos/>}/>
            </Routes>
          </BrowserRouter>
        </MyContext.Provider>
      </>
  );
}

 