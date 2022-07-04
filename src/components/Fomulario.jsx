import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(()=>{//Cada vez que paciente tenga algo que hara esta funcion
    if(Object.keys(paciente).length > 0){//Si paciente tiene mas de 0 valores mostrara en el formulario la informacion que tiene el objeto "Paciente"
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  
  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //Validacion Formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)//muestra un mensaje de error desde el return
      
      setTimeout(()=>{//A los 3 segundos cambiara el state de error a false para quitar el mensaje
        setError(false) 
      },3000)
      return
    }

    //Objeto Paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }

    //Actualizar la lista de los pacientes
    if(paciente.id){
      //Editando Registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id == paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      //Nuevo Registro
      //toma una copia del arreglo y le agrega a un nuevo objeto
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente]) 

    }
    

    //Reiniciar Formulario - Poner cada valor modificador
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }
  return (
    <div className="md:first-letter:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Añada Pacientes y {''} <span className="text-indigo-600 font-bold">Administralos</span></p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md  py-10 px-5 rounded-lg mb-10">
        {/* Muestra un div de error */}
        {error && < Error><p>Todos los campos deben ser llenados</p></Error>}
        

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
          <input id="mascota" type="text" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre}
          onChange={(e) => setNombre(e.target.value)} />
        </div>
        
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
          <input id="propietario" type="text" placeholder="Nombre del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={propietario}
          onChange={(e) => setPropietario(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Eamil Contacto Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
          <input id="alta" type="date" className="border-2 w-full p-2 mt-2 rounded-md" value={fecha}
          onChange={(e) => setFecha(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
          <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los Síntomas" value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}/>
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />
      </form>
    </div>
  )
}

export default Formulario