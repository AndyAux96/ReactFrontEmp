import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


function ListaEmpleados() {

  const urlApi = "http://localhost:49146/api/employee";
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    listEmployee();
  }, [])



  //Cargar los empleados con axios
  const listEmployee = async () => {
    const datosback = await axios.get(urlApi);
    console.log(datosback.data);
    console.log("Empleados cargadosx");
    setEmpleados(datosback.data);

  }



  return (
    <div className="container">
      <h1>Lista de empleados</h1>
      <table className="table table-striped table-dark">
        <thead className="thead-light">
          <tr>
            <th>Id </th>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Dia de ingreso</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {
            //Iterar el arreglo proveniente del back
            empleados.map((empleado, indice) => (
              <tr key={indice} className='table-primary'>
                <th scope="row">{empleado.EmployeeId}</th>
                <td>{empleado.EmployeeName}</td>
                <td>{empleado.Departament}</td>
                <td>{new Date(empleado.DateOfJoining).toLocaleString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})}</td>
                <td>{empleado.PhotoFileName}</td>
                
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
// <Link to={`/editar/${empleado.idEmpleado}`} n className='btn btn-warning btn-sm me-3'>Editar</Link>
export default ListaEmpleados;
