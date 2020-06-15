import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import avatarMan from '../images/avatarHombre.jpg'
// import avatarWoman from '../images/avatarMujer.jpg'

class SignUpForm2 extends Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div id="SignUpForm" className="col-8 offset-2">
                        <img id="avatarImg" src={avatarMan} alt=""/>
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
                                    Debe contener 8-20 caracteres, usar letras, números y <br/> no puede haber 
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
                            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                              Preference???????
                            </Form.Label>
                            <Form.Control
                              as="select"
                              className="mr-sm-2"
                              id="inlineFormCustomSelect"
                              custom
                            >
                              <option value="0">Choose...</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Control>

                            <Form.Label>Escribe tu respuesta</Form.Label>
                            <Form.Control type="text" placeholder="Respuesta secreta" />
                        </div>
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
                </div>
            </div>
        )
    }
}

export default SignUpForm2