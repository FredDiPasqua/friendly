import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import avatarMan from '../images/avatarHombre.jpg'
// import avatarWoman from '../images/avatarMujer.jpg'

class SignUpForm2 extends Component {
    render () {
        return (
            <div id="form2" className="container">
                <div className="row">
                    <div className="col-5">
                        <img id="avatarImg" src={avatarMan} alt=""/>
                        <div>
                            <Form>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Example file input" />
                            </Form.Group>
                            </Form>
                        </div>
                        <div>
                            <Form.Check inline label="Hombre" type="radio" aria-label="radio 1" />
                            <Form.Check inline label="Mujer" type="radio" aria-label="radio 1" />
                            <Form.Check inline label="otro" type="radio" aria-label="radio 1" />
                        </div>
                        
                    </div>
                    <div className="col-5">
                    <div id="securityContainer" >
                            <div>
                                <Form.Label htmlFor="inputPassword5">Nueva Contraseña</Form.Label>
                                <Form.Control
                                type="password"
                                id="inputPassword1"
                                className="inputs"
                                aria-describedby="passwordHelpBlock"
                                />
                                <Form.Text id="passwordHelpBlock" muted>
                                    Debe contener 8-20 caracteres, usar letras, números y no puede haber 
                                    espacios, caracteres especiales o emojis.
                                </Form.Text>
                            </div>
                            <br/>
                            <div>
                                <Form.Label htmlFor="inputPassword5">Repite tu Contraseña</Form.Label>
                                <Form.Control
                                type="password"
                                id="inputPassword2"
                                className="inputs"
                                aria-describedby="passwordHelpBlock"
                                />
                                
                                <Form.Text id="passwordHelpBlock" muted>
                                    Tu contraseña debe ser identica a la pusiste arriba.
                                </Form.Text>
                            </div>
                            <br/>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <hr className="my-1" />
                        <div id="secretQuestion" >
                            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                            Escoge una pregunta de seguridad
                            </Form.Label>
                            <Form.Control
                            as="select"
                            className="mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                            >
                            <option value="0">Escoge...</option>
                            <option value="1">¿Cual fue el nombre de tu primer mascota?</option>
                            <option value="2">¿Cuales son los apellidos de tu abuelo paterno?</option>
                            <option value="3">¿Cual era tu juego favorito en la niñez?</option>
                            <option value="4">¿El nombre de tu primer pareja?</option>
                            <option value="5">¿Cual era tu apodo de pequeño?</option>
                            </Form.Control>
                        </div>
                        <div id="secretAnswer" >
                            <Form.Label>Escribe tu respuesta</Form.Label>
                            <Form.Control type="text" placeholder="Respuesta secreta" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11 offset-0 mt-3">
                    <Button id="btnSignUp" type="submit"  >Terminar</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpForm2