import React, { Component } from 'react';

class LogInForm extends Component {
    render() {
        return( 
            <form id="form">
                    <p className="my-2" >Ingresa tu usuario</p>
                    <input type="text"/>
                    <p className="my-2" >Contraseña</p>
                    <input type="password"/>
                    <br/>
                    <button id="btnForm" type="submit" >Entrar</button>
                    <div id="links">
                        <a href="#" >Olvidaste tu contraseña</a>
                        <a href="./public/signUp.html"> Registrate aquí</a>
                    </div>
            </form>
        )
    }
}

export default LogInForm