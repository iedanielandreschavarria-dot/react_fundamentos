function TarjetaProducto(props) {
    return (
        <div>
            <h3>{props.nombre}</h3>
            <p>{props.precio}</p>
            <p>{props.descripcion}</p>
        </div> 
    )
}
export default TarjetaProducto;