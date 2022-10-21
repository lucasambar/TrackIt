import styled from "styled-components";

import CORES from "../constantes/Cores";
import Footer from "../header e footer/Footer";
import Header from "../header e footer/Header";



export default function PageHoje () {
    return (
        <>
            <Header/>
            <Background>

            </Background>
            <Footer/>
        </>

    )
}

const Background = styled.div`
    width: 100%;
    height: 1000px;
    background-color: ${CORES.background};
`