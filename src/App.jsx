import { useState, useEffect } from "react"
import Header from "./components/header"
import Formulario from "./components/Fomulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])//Mira el localStorage cuando carga la pagina 
  const [paciente, setPaciente] = useState({}) //state para editar los pacientes

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))//convierte a string por medio de Json la informacion para guardarla en el localStorage
  }, [pacientes])

  //Busca los pacientes con diferente id seleccionado y los guarda en el arreglo
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container m-auto">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
    
  )
}

export default App
