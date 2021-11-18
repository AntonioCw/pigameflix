import React, { Component } from 'react';
import Header from '../Header';
import "./style.css";

class Topo extends Component {
    render() {
        return (
            <section className="banner">
                <Header />
                <div className="btn-position">
                    <button className="btn">Jogar</button>
                </div>
            </section>
        );
    }
}

export default Topo;