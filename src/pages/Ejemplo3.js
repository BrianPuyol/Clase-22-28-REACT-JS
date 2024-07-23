import '../styles/mapa.css'

const Ejemplo3 = (props) => {

return( //tuve que poner estilos por este js o traer un css, para hacerlo funcinal
    <div className="mapa">
    <h1>Ejemplo google maps - CSS</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13134.375255143994!2d-58.40592325!3d-34.614431350000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf26ba8c069%3A0x1e5838e3d5fe2c92!2sEstaci%C3%B3n%20Once!5e0!3m2!1ses!2sar!4v1721071765049!5m2!1ses!2sar" style={{width:850, height:400, border:0}} title='mapa'></iframe> {/* tuve que poner title='mapa' para el servidor */}
    </div>
)

}

export default Ejemplo3;
