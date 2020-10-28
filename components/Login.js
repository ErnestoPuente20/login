import React from 'react';
import { Input } from 'antd'
import { DatePicker, Button } from 'antd';


const Login = () => (
    <section className="form-login">
        <h1>Formulario Login</h1>
        
        <Input className="entrada" placeholder="Correo Electronico" size="large"/>
        <Input.Password className="entrada" placeholder="Password" size="large"/>
        
        <Button className="btn btnLogin" type="primary" size="large">Iniciar Sesion</Button>
        <Button className="btn btnRegister" type="primary" size="large">Registrarse</Button>
    </section>
    
    )

export default Login;