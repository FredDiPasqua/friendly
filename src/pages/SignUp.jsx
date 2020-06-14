import React, { Component } from "react";
import '../styles/signUp.css'
import logo from "../images/logo.svg"
import { Link } from "react-router-dom";
import SignUpForm from "../components/signUpForm"



class SignUp extends Component {
    // constructor(props) {
    //     super(props)
    //     const state = {
    //         step : 1
    //     }
    // }

    render() {
        return (
            <>
                <nav id="header_Up" className="navbar navbar-expands">
                    <img id="logoImg_Up" src={logo} alt=""/>
                    <h2>Friendly</h2>
                    <Link id="btnToLogIn" className="btn btn-outline-dark" to="/LogIn" >Ya tengo una cuenta</Link>
                </nav>
                <h1 id="registrate" >Crea tu cuenta</h1>
                {/* {this.state.step === 1 && <SignUpForm />} */}
                <SignUpForm  />
            </>
        )
    }
}

export default SignUp

