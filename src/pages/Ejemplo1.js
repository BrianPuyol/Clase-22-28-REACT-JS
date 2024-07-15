import { EjemploProps1, EjemploProps2, EjemploProps3, EjemploProps4, EjemploProps5 } from "../componentes/props"

const nombre2 = 'Laura'
const frutas = ['Manzana', 'Bananas', 'Palta', 'Naranjas']

const equipos = ['Argentina', 'Colombia', 'Uruguay', 'Canada']

const mostrarValor = valor =>{
  console.log(valor)
}

const Ejemplo1 = (props) => {
  return (
    <div>
      <h1>Ejemplos de Propiedades</h1>
      {/* propiedad simple y reutilizable */}
      <EjemploProps1 nombre='Flavia' />
      <EjemploProps1 nombre={nombre2} /> {/* const ya declarada*/}
      {/* listar elementos (array) */}
      <EjemploProps2 elementos={frutas} />
      <EjemploProps2 elementos={equipos} />
      {/* multiples propiedades - destructuring */}
      <EjemploProps3 titulo='Hola soy el titulo' subtitulo='subtitulo bien grande!' cuerpo='Hola soy el contenido de esta historia' />
      {/* funcion */}
      <EjemploProps4 cambiarValor={mostrarValor} />

      {/* este no anda porque si o si necesita de cambiarValor */}
      <EjemploProps4 />

      {/* como lo requiere si osi podemos tambien pasarle una funcion vacia */}
      <EjemploProps4 cambiarValor={() => {}}/>

      <EjemploProps5 eventoClick={mostrarValor}/>

       {/*si no le coloque la props eventoclick no se exploto react a diferencia del ejemplo4*/}
       <EjemploProps5 />
       
    </div>
  )
}

export default Ejemplo1