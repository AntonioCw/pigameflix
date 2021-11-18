import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Banner from '../Assets/BannerMain.png'
import Carousel from '../components/Carousel';
import Footer from '../components/Footer'
import witcher from '../Assets/the-witcher.jpg';

const Main = styled.div`
    width: 100%;
    height: 100%;
    background-color: #E5E5E5;
`;

const Topo = styled.div`
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
`;

const Img = styled.img`
    width: 1020px;
    height: 700px;
`;

const Info = styled.div`
    width: 80%;
    margin: 22px auto;
`;

const FlexItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 18px;
    padding: 12px;
`;

const Paragrafo = styled.p`
    padding: 12px; 
`;


function Detalhes() {
    return (

        <section>
            <Header />
            <Main>
                <Topo>
                    <Img src={witcher} alt="jogo"></Img>
                </Topo>
                <Info>
                    <FlexItem>
                        <h2>Detalhes</h2>
                        <button className="btn">Jogar</button>
                    </FlexItem>
                    <p>O mundo de The Witcher 3 é vasto e contínuo, porém diverso, com cada uma de suas terras inspiradas por diferentes referências e fontes culturais. Terra de Ninguém: um território de guerra, esparsamente populado, baseado na mitologia eslava. Pântanos e florestas sombrias e primevas, onde monstros espreitam atrás de cada árvore e ninguém que passa por lá sabe se verá outra aurora. Um lugar de anarquia, onde a força dá poder e o ouro compra vidas.</p>
                    <h2>Requisitos</h2>
                    <FlexItem>
                        <Paragrafo>MÍNIMOS:
                        Requer um processador e sistema operacional de 64 bits
                        SO: Windows 7 - Service Pack 1 (6.1.7601)
                        Processador: Intel® Core™ i5-2500K / AMD FX-6300
                        Memória: 8 GB de RAM
                        Placa de vídeo: Nvidia GeForce GTX 770 2GB 
                        Rede: Conexão de internet banda larga
                        Armazenamento: 150 GB de espaço disponível
                        Placa de som: Direct X Compatible</Paragrafo>
                        <Paragrafo>
                            RECOMENDADOS:
                            Requer um processador e sistema operacional de 64 bits
                            SO: Windows 10 - April 2018 Update (v1803)
                            Processador: Intel® Core™ i7-4770K / AMD Ryzen 5 1500X
                            Memória: 12 GB de RAM
                            Placa de vídeo: Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB
                            Rede: Conexão de internet banda larga
                            Armazenamento: 150 GB de espaço disponível
                            Placa de som: Direct X Compatible</Paragrafo>
                    </FlexItem>
                    <h2>Relacionado</h2>
                    <Carousel />
                </Info>
                <Footer />
            </Main>
        </section>
    );
}

export default Detalhes;