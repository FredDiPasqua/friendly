import React, { Component } from "react";
import '../styles/signUp.css'
import logo from "../images/logo.svg"
import { Link } from "react-router-dom";
import SignUpForm from "../components/signUpForm"



class SignUp extends Component {
    state = { form: {} }

    handleChange = e => {
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value

            }
        })
    }

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
                <SignUpForm onChange={this.handleChange} />
            </>
        )
    }
}

export default SignUp

