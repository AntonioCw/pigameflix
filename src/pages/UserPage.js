import React from 'react';
import Carousel from '../components/Carousel';
import Topo from '../components/Topo';
import styled from 'styled-components';
import Footer from '../components/Footer'

const Corpo = styled.div`
    background: var(--second);
`;

const Tag = styled.div`
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #ccc;
    border-radius: 8px;
    font-family: Lato;
    font-weight: bold;
`;


function Userpage() {
    return (

        <section>
            <Topo />
            <Corpo>
                <Tag>RPG</Tag>
                <Carousel />
                <br />
                <Tag>Aventura</Tag>
                <Carousel />
                <br />
                <Tag>Ação</Tag>
                <Carousel />
                <Footer />
            </Corpo>

        </section>
    );
}

export default Userpage;
