import React, { Component } from "react";
import "../styles/logInHeader.css"
import logo from "../images/logo.svg"


class LogInHeader extends Component {
    render() {
        return (
            <div>
                <nav id="header" className="navbar navbar-expands" ></nav>
                <div id="title" >
                    <img id="logoImg" src={logo} alt=""/>
                    <span id="brand" >Firsty</span>
                </div>
                <form action="" className="form">
                    
                </form>

            </div>
        )
    }
}

export default LogInHeader