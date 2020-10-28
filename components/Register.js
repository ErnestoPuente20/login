import React, {useState} from 'react';
import { Input } from 'antd'
import { DatePicker, Button } from 'antd';


const Register = () => {

    const [datos, setDatos] = useState({
        name: '',
        lastname: '',
        age: '',
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.value);
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.name + " " + datos.lastname)
    }
    
    return(
        <section className="form-login">
            <h1>Formulario Login</h1>

            <form onSubmit={enviarDatos}>
                <Input className="entrada" placeholder="Nombre" size="large" type="text" name="name" onChange={handleInputChange}/>
                <Input className="entrada" placeholder="Apellido" size="large" type="text" name="lastname" onChange={handleInputChange}/>
                <Input className="entrada" placeholder="Edad" size="large" type="text" name="age" onChange={handleInputChange}/>
                <Input className="entrada" placeholder="Correo Electronico" size="large" type="text" name="email" onChange={handleInputChange}/>
                <Input.Password className="entrada" placeholder="Password" size="large" type="password" name="password" onChange={handleInputChange}/>
                
                <button className="btn btnLogin" type="submit" size="large">Registrarse</button>
                <Button className="btn btnRegister" type="primary" size="large">Login</Button>
            </form>
            
            {/* <h3>{datos.name} - {datos.lastname}</h3>
            <h3>{datos.age}</h3> */}
        </section>
    )
    
    
}

export default Register;