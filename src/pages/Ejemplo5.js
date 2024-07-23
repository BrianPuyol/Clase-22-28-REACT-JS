import '../styles/ejemplo5.css'
import { useEffect, useState } from 'react'; //usar estados

const DatosApi = (props) => {

    const [cargando, setCargando] = useState(false) //comienza apagado
    const [personajes, setPersonajes] = useState([])

    useEffect(() => {

        const cargarDatos = async () => { //si no pongo "async" lo va buscar todo el tiempo, aunque no haga falta
            setCargando(true) //comienza a funcionar
            const res = await (await fetch('https://rickandmortyapi.com/api/character/')).json() //lo transforma en .json para que react pueda leerlo
            

            setPersonajes(res.results)
            setCargando(false)
        }
        //fetch: traer datos nativos de JS, otros ejemplos pueden ver utilizados en axios (peticiones)
        cargarDatos()

    }, [])

    return (
        <>
            <h1>Carga de datos a través de un API</h1>

            {cargando ? <p>Cargando datos ....</p> : (

                <div className="personajes">

                    {personajes.map(personaje => (

                        <div className="personaje" key={personaje.id}>
                            <h3>{personaje.id}</h3>
                            <h4>{personaje.name}</h4>
                            <div className="ficha">
                                <div className="foto">
                                    <img src={personaje.image} alt={personaje.name}/>
                                </div>
                                <div className="datos">
                                    {/* <h6>{personaje.species}</h6> */}
                                    <h6>Especie : {personaje.species === 'Human' ? 'Humano' : 'Extraterreste' }</h6>
                                    <h6>Estado: {personaje.status === 'Alive' ? 'Alive' : 'Dead' }</h6>
                                </div>
                            </div>
                        </div>

                    ))} {/*cierra linea 30*/}

                </div>
            )} {/*cierra linea 26*/}
        </>
    )

}

export default DatosApi;