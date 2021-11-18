import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Form from '../components/Login';
import Header from '../components/Header';

const Section = styled.div`
    background: #E5E5E5;
    width: 100%;
    height: 100%;
`;

const Main = styled.main`
    
    width: 100%;
    height: 500px;
`;

function LogIn() {
    return (
        <Section>
            <Header />
            <Main>
                <Form />
            </Main>
            <Footer />
        </Section>
    );
}

export default LogIn;