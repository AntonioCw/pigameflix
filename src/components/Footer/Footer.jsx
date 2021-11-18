import React, { Component } from 'react';
import Logo from "../../Assets/logo300.png"
import "./style.css"

class Footer extends Component {
    render() { 
        return ( 
            <section className="footer">
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div>
            </section>
         );
    }
}
 
export default Footer;