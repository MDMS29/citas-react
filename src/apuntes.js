import Header from "./components/header"

function App() {
  //Antes del Return se pueden crear variables, funciones, etc...
  // 1. const edad = 18

  return (
  //return es lo que se vera en pantalla
  
    <>
      {/* {1+1} imprime como si fuera valor JS */}
      {/* 1. {edad >= 18 ? 'Eres mayor de Edad' : 'No eres mayor de Edad'} */ /*condiciones mediante ternarios*/} 
      
      <div>
        <h1>Hola mundo</h1>
        {/*para poner codigo JS en HTML se necesitan las llaves "{}" como esta linea*/}
        {/*edad*/  /*se puede imprimir una variable ya creada en con las llaves "{}" */}

        <Header /> {/*Para mostrar el componente importado solo se pone el nombre y se cierra */}
        {/*rafce --> Es una abreviatura para no escribir tanto codigo en REACT */}
      </div>
    </>
    
  )
//Hacer esto siempre al importar Tailwind...

//npx tailwindcss init -p

  // module.exports = {
  //   content: ["./index.html", "./src/**/*.jsx"],
  //   theme: {
  //     extend: {},
  //   },
  //   plugins: [],
  // }


//Al index.css agregar esto...
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

//Para dar estilos con Tailwind usar "className"
//<h1 className='text-4xl font-bold'>Desde Header</h1> //Letra grande y negrita

// En Tailwind los pixeles de multiplican x4

//justify-center : justify-content: center;
//items-center : align-items: center;
//mt-10 : margin-top-left-right-bottom: 40px; 
// mx-auto : margin-left-right: auto; Significa que tomara eso valores en el eje X (Centra el contenido)

//pt-10 : padding-top-left-right-bottom: 40px;

//Los pixeles de los textos se multiplican x10
// text-center : text-align: center;
// text-3xl : font-size: 30px;
// font-black : font-weight: bold;

//md:w-1/2 : @media (min-width: 768px) {width: 50%;}

// rounded-lg : border-radius: 8px;

// placeholder-gray-400 : placeholder-color: gray; //Le da color a el texto de fondo del Input

//useState usa Array u Object destructuring
//const [nombre, setNombre] = useState('Hook') va a tomar siempre el primer valor del Arreglo "nombre = 'Hook'"
//setNombre = 'Andres' El valor "Andres" es el que tendra ahora la variable "nombre"
//"nombre" es la variable y "setNombre" es la que modifica la variable 


//Modificar y cargar valores de variable
// const [nombre, setNombre] = useState('')
// <input value={nombre} onChange={(e) => setNombre(e.target.value)} /> 

//El input guardara el valor de "nombre" y cada que se vaya modificando el "setNombre" lo cambiara a lo que se esta sobre escribiendo en el input

//si asignamos la variable "nombre" en algun lugar del DOM ahi saldra lo que se esta escribiendo en el input por el "e.target.value"


//<form onSubmit={handleSubmit}></form>
// const handleSubmit = (e) => {
//   e.preventDefault()
//   console.log('Enviando datos')
// }

//Al hacer un submit al formulario se activara la funcion "handleSubmit" que muestra un texto "Enviando datos"

//Validacion de Formulario mediante useState
//Validacion Formulario
// if([nombre, propietario, email, fecha, sintomas].includes('')){
//   setError(true)
//   return
// }
// setError(false)

//DENTRO DEL RETURN(HTML)
// {error && 
//   <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-3xl">
//     <p>Todos los campos deben ser llenados</p>
//   </div>
// }


//Props
//Se usan cuando se quiere utilizar una informacion de un State en otros componentes y asi no usar tanto codigo
// {/* <Header 
//   num = {1} los props pueden ser variables de cualquier tipo numeros, strings, booleanos, etc...
// />

// function Header(props) { se deben llamar como parametros asi mismo "props" ya el sistema los leéra
//   console.log(props) mostrara el valor "1" 
// } */}


//PARA UN SOLO VALOR
//Para esto se le hace un Destructuring al Prop
// function Header({num}) { se deben llamar como se les antepuso en la aplicacion principal
//   console.log(num) mostrara el valor "1" 
// } */}


//Props Children
//Este pasara todos los componentes que se ecuentren dentro de las llaves donde se esta llamando al componente

//{error && * Componente "Formulario"*
  //   < Error>
  //     <h1>Error Inesperado</h1>
  //     <p>Todos los campos deben ser llenados</p>
  //   </Error>
  // } 

//const Error = ({children}) => {*Componente "Error"*
//   return (
//     <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-3xl">
//         {children}
//     </div>
//   )
// }

//useEffect 
//Es un callback, se ejecuta cuando el state cambia o cuando el componente esta listo
//Es bueno para colocar codigo para consultar una API o el LocalStorage
//Escucha por lo cambios que sucedan en un state

//SINTAXIS
// useEffect(() => {
//   console.log('El componente esta listo')
// }, [])


// useEffect(()=>{
//   console.log('Se esta editando el paciente')
// }, [paciente]) *Va a mostrar en consola el texto cuando el "paciente" este listo o tenga elementos*

//useEffect(()=>{
//   console.log('Se esta editando el paciente')
// }, []) *Cuando las dependencias estan vacias el espera a que el componente se haya cargado*


// useEffect(()=>{
//   if(pacientes.length > 0){ *Cada vez que "pacientes" tenga otro elemento va a imprimir el texto*
//     console.log('Nuevo Paciente')
//   }
// }, [pacientes])

}
export default App
