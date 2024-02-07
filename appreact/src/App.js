import React from 'react';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingUpX from './SingUpX';
import ListaEmpleados from './ListaEmpleados';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Login></Login>} />
          <Route path='/singup' element={<SingUpX></SingUpX>} />
          <Route path='/employee' element={<ListaEmpleados></ListaEmpleados>} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
//