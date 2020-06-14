import React from 'react';
// import logo from '../images/logo.svg';
import '../General.css';
import LogIn from "./LogIn.jsx"
import SignUp from "./SignUp.jsx"
// import Layout from './Layout'
import NotFound from './NotFound'
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
        <Switch>
          <Route exact path="/LogIn" component={LogIn} />
          <Route exact path="/pages/SignUp" component={SignUp} />
          <Route component={NotFound} />

        </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
