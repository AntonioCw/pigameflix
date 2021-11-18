import React, { Component } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import "../../Assets/main-img.png"
import VideoCard1 from "../../Assets/VideoCard-1.png"
import VideoCard2 from "../../Assets/VideoCard-2.png"
import VideoCard3 from "../../Assets/VideoCard-3.png"
import VideoCard4 from "../../Assets/VideoCard-4.png"
import exampleImage from "../../Assets/img-game.png"
import gamer from "../../Assets/hardcore-gamer.jpg"
import felipe from "../../Assets/Felipe.jpg"
import moacyr from "../../Assets/Moacyr.jpg"
import antonio from "../../Assets/antonio.jpeg"
import Button from "../Button"
import "./style.css"
import style from 'styled-components';
import { Link } from 'react-router-dom';

const Topo = style.div`
    height: 750px;
`;

class Principal extends Component {

    render() {
        return (
            <section className="page">
                <Topo>
                    <Header>

                    </Header>
                    <div className="chamada">
                        <h1 className="title-big">Uma plataforma completa de jogos</h1>
                        <p className="title-medium">Obtenha acesso a mais de 100 jogos de alta qualidade no console e no computador, com títulos adicionados o tempo todo. Além disso, aproveite todos os benefícios do GameFlix, que chega no fim do ano sem custo extra!</p>
                    </div>
                    <div className="chamada-play">
                        <h1 className="title-big play">Play Now!</h1>
                        <ul className="list list-games">
                            <li className="listaJogos"><img src={VideoCard1} alt="" /></li>
                            <li className="listaJogos"><img src={VideoCard2} alt="" /></li>
                            <li className="listaJogos"><img src={VideoCard3} alt="" /></li>
                            <li className="listaJogos"><img src={VideoCard4} alt="" /></li>
                        </ul>
                    </div>
                </Topo>
                <section className="main">
                    <div className="second">
                        <section className="position">
                            <h1 className=" content">Jogue quando e onde quiser</h1>
                            <img src={exampleImage} alt="Fall Guys" className="exampleImage" />
                        </section>
                    </div>
                    <section className="clients">
                        <h1>O que os Clientes estão falando</h1>
                        <div className="client-list">
                            <div className="client">
                                <img src={felipe} alt="gamer" className="gamer gamer-th" />
                                <h3>Felipe</h3>
                                <p className="description">Muito bom, consigo ter acesso a uma grande variedade de games, além de poder jogar onde e quando quiser com meus amigos!</p>
                            </div>
                            <div className="client">
                                <img src={antonio} alt="gamer" className="gamer gamer-th"/>
                                <h3>Antonio</h3>
                                <p className="description">Amei o Catalogo de jogos, jogo todos os dias estou completamente viciado.</p>
                            </div>
                            <div className="client">
                                <img src={moacyr} alt="gamer" className="gamer gamer-th" />
                                <h3>Moacyr</h3>
                                <p className="description">Plataforma é exelente, grande catalogo de jogos, só games de primeira, é sensacional o serviço, estão de parabéns!</p>
                            </div>
                        </div>
                        <div className="callToAction" id="assinaturas">
                            <h1>Assine agora</h1>
                            <div className="card">
                                <div className="callToAction-card">
                                    <h2>Standard</h2>
                                    <p>O plano gratuito permite que o usuário inicie sessões de até uma hora para jogar. Após o termino da janela de tempo, o gameplay é encerrado e o jogador pode voltar a jogar novamente, sem custos adicionais. O plano gratuito quanto pago permitem infinitas sessões diárias.</p>
                                    <h4>R$ 25,00</h4>
                                    <Link to="/Cadastro"><Button label="Assinar" /></Link>
                                </div>
                                <div className="callToAction-card" >
                                    <h2>Premium</h2>
                                    <p>a assinatura paga do GeForce Now permite realizar sessões de gameplay na nuvem de até seis horas. Além disso, os membros do plano Founders possuem "acesso prioritário" e, caso hajam filas, não será necessário esperar para jogar.</p>
                                    <h4>R$ 45,00</h4>
                                    <Link to="/Cadastro"><Button label="Assinar" /></Link>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </section>
                </section>
            </section>
        );
    }
}

export default Principal;