import GlobalStyle from "./constantes/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


import PageInicial from "./pagina inicial/PageInicial";
import PageCadastro from "./pagina cadastro/PageCadastro";
import PageHoje from "./pagina hoje/PageHoje";
import MyContext from "./provedores/Context";



export default function App() {
  const [login,setLogin] = useState({name: "oi"})
  const [progresso, setProgresso] = useState(50)

  return (
    <>
      <MyContext.Provider value={{login, setLogin, progresso, setProgresso}}>
        <GlobalStyle/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PageInicial/>}/>
              <Route path="/cadastro" element={<PageCadastro/>}/>
              <Route path="/hoje" element={<PageHoje/>}/>
            </Routes>
          </BrowserRouter>
        </MyContext.Provider>
      </>
  );
}

 