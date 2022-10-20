import GlobalStyle from "./constantes/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageInicial from "./pagina inicial/PageInicial";
import PageCadastro from "./pagina cadastro/PageCadastro";


export default function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageInicial/>}/>
          <Route path="/cadastro" element={<PageCadastro/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

 