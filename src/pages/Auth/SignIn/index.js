import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

import Button from '../../../styles/components/Button';

import { Container, SignForm } from './styles';

function SignIn() {
  const [username, setUsername] = useState('petrovickg');
  const [password, setPassword] = useState('123');
  const dispatch = useDispatch();

  function handleInputUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleInputPasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // Previnir de redirecionar pra próxima página
    console.log('Chegou aqui');
    dispatch({ type: 'SIGN_IN_REQUEST', username, password });
  }

  return (
    <Container>
      <SignForm onSubmit={handleSubmit}>
        <h1>Boas vindas</h1>

        <span>Usuario</span>
        <input
          type="text"
          name="email"
          value={username}
          onChange={handleInputUsernameChange}
        />

        <span>Senha</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputPasswordChange}
        />

        <Button size="big">Entrar</Button>
      </SignForm>
    </Container>
  );
}

SignIn.propTypes = {
  // username: PropTypes.string,
  // passowrd: PropTypes.string,
};
export default SignIn;
