import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginValidation from './LoginValidation';

function Login() {
    //const [email,setEmail]=useState('')
    //const [passx,setPass]=useState('')
    const [values, setValues] = useState({
        email: '',
        passx: ''
    });
    const [error, setErrors] = useState({});

    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
    }

    const nav=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(LoginValidation(values));
        if (error.email === "" && error.passx === "") {
            axios.post('http://localhost:49146/log', values).then(res => {
            if(res.data==="Exito")  
            {
                nav('/employee');
            }  else{
                alert("Usuario no encontrado")
            }
            
            }).catch(err => console.log(err));
        }
    }


    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <div className='p-3 bg-white w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'>Correo</label>
                        <input type='email' placeholder='Ingrese su correo' className='form-control' onChange={handleInput} name='email' />
                        {error.email && <span className='text-danger'>{error.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>Contraseña</label>
                        <input type='password' placeholder='Ingrese su contraseña' className='form-control' onChange={handleInput} name='passx' />
                        {error.passx && <span className='text-danger'>{error.passx}</span>}
                    </div>
                    <button type='submit' className='btn btn-success border w-100' style={{ marginBottom: '10px' }}>Ingresar</button>
                    <Link to={`/singup`} className="btn btn-info border w-100 rounded-10 text-decoration-none" style={{ marginBottom: '10px' }}>Registrar</Link>
                </form>
            </div>
        </div>
    )
} 

export default Login;