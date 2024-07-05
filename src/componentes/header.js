// import Nav from "./nav"// llamo a nav

const Header = (props) => { //si o si es necesario el div, la etiqueta padre con info
    return (//nunca varias etiquetas (div, section, header)
        <>
            <header>
                <h1>Aprendemos React!</h1>
            </header>
        </>
    )
}

export default Header //exporto para luego importar en app.js
//const "Header": componente
//los demas header son etiquetas
//<></> permite agrupar elementos