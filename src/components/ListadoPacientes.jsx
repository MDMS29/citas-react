import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
 
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll" >

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>

          { pacientes.map( (paciente) => { //itera en el arreglo de pacientes
            

            return(
              <Paciente  //se le pasa la informacion al componente por medio de una variable "paciente"
              //Siempre que se pase un listado .map se debe tener una "key" unico
              key={paciente.id} 
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
              />
              )
            })}
        </>
      ) : (
        <>
            <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
            <p className="text-lg mt-5 mb-10 text-center">Comienza Agregando Pacientes y <span className="text-indigo-600 font-bold">aparecerán en este lugar</span></p>
          </>
          )}
    </div>
  )
}

export default ListadoPacientes