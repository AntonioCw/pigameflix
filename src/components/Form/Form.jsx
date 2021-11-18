import React, { Component } from 'react';
import Button from '../Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin: 18px auto;
`;

const Input = styled.input`
    margin: 12px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

class Form extends Component {
    render() {
        return (
            <Formulario>
                <Input type="text" placeholder="Nome" />
                <Input type="text" placeholder="Sobrenome" />
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Link to="/"><Button label="Cadastrar" className="btn"/></Link>
            </Formulario>
        );
    }
}

export default Form;