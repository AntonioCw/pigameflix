import React, { Component } from 'react';
import "./style.css";

class Button extends Component {
    render() { 
        return ( 
            <button className="menu_btn" >{this.props.label}</button>
         );
    }
}
 
export default Button;