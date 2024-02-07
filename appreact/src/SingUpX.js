import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginValidation from './LoginValidation';


  
function SingUpX() {
  const[values,setValues]=useState({
    email:'',
    passx:''
  });
  const [error,setErrors]=useState({})
  
  const handleInput=(e)=>{
    setValues(prev=>({...prev,[e.target.name]:[e.target.value]}))
  }
  
  const nav=useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(LoginValidation(values))
    if (error.email === "" && error.passx === "") {
        axios.post('http://localhost:49146/registro', values).then(res => {
            nav('/');
        }).catch(err => console.log(err));
    }
  }
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <div className='p-3 bg-white w-25'>
              <h3>Registro de usuarios</h3>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Correo</strong></label> 
                        <input type='email' placeholder='Ingrese su correo' className='form-control rounded-0 'name='email' 
                        onChange={handleInput} />
                        {error.email&&<span className='text-danger'>{error.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>Contraseña</label>
                        <input type='password' placeholder='Ingrese su contraseña' className='form-control'name='passx' 
                        onChange={handleInput}/>
                        {error.passx&&<span className='text-danger'>{error.passx}</span>}
                    </div>
                    <button type='submit' className='btn btn-success border w-100' style={{ marginBottom: '10px' }}>Registrarse</button>
                    <Link to={`/`} className='btn btn-success border w-100' style={{ marginBottom: '10px' }}>Iniciar sesión</Link>          
                  
                </form>
            </div>
        </div>
  )
}

export default SingUpX; 