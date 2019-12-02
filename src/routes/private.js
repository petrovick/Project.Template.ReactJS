import React, { useEffect } from 'react';

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Col,
  Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

import { Route, Redirect, Link } from 'react-router-dom';
import store from '../store';

function PrivateRoute({ component: Component, ...rest }) {
  useEffect(() => {
    console.log('Entrou aqui');
  }, []);
  return (
    <>
      <Navbar sticky="top" bg="primary" variant="dark">
        <Navbar.Brand href="#home">Teste</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/menu1">Menu 1</Nav.Link>
          <Nav.Link href="/menu2">Menu 2</Nav.Link>

          <Nav.Link href="/menu3">Menu 3</Nav.Link>
          <Nav.Link href="/menu4">Menu 3</Nav.Link>
        </Nav>
        {/*
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
        */}
      </Navbar>

      <Route
        {...rest}
        render={props =>
          store.getState().auth.signedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/signin', state: { from: props.location } }}
            />
          )
        }
      />
    </>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
