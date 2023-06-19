import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles.css';
import Navbar from './Componentes/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario, como enviar los datos a un servidor o verificarlos localmente
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <Navbar />
      <div class="login">
      <div class="avatar">
      </div>
      <h2>Inicio de Sesion</h2>
      <h4>Welcome</h4>
      <br/>
      <form class="login-form">
      <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label> Usuario:</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>                   
                </Form.Group>
                <Button variant="primary" type="submit">Iniciar sesión</Button>
              </Form>
      </form>
    </div>    
    </div>
  );
};

export default Login;

