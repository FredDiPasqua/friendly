import React, { Component } from "react";
import '../styles/signUp.css'
import logo from "../images/logo.svg"
import { Link } from "react-router-dom";
import SignUpForm from "../components/signUpForm"
import SignUpForm2 from "../components/signUpForm2"



class SignUp extends Component {
    state = { 
        step: 2,
        form: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "@gmail.com",
            country: "",
            city: ""
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value            
            }
        })
        console.log(this.state.form);
    }

    handleClick = e => {
        this.setState({ step: this.state.step + 1 })
        console.log("Ya entró")
        console.log(this.state)
    }

    renderForm() {
        // const { step } = this.state;

        if (this.state.step === 1) {
            return <SignUpForm onChange={this.handleChange} onClick={this.handleClick} formValues={this.state.form} />
        }
        if (this.state.step === 2) {
            return <SignUpForm2 />
        }
    }




    render() {
        console.log(this.state)
        return (
            <>
                <nav id="header_Up" className="navbar navbar-expands">
                    <img id="logoImg_Up" src={logo} alt=""/>
                    <h2>Friendly</h2>
                    <Link id="btnToLogIn" className="btn btn-outline-dark" to="/LogIn" >Ya tengo una cuenta</Link>
                </nav>
                <h1 id="registrate" >Crea tu cuenta</h1>
                {this.renderForm()}
                                 
            </>
        )
    }
}

export default SignUp

