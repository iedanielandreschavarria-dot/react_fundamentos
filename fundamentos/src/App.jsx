import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Saludo from './componentes/saludo.jsx'
import Bienvenida from './componentes/Bienvenida.jsx'
import HoraActual from './componentes/HoraActual.jsx'
import TarjetaProducto from './componentes/TarjetaProducto.jsx'
function App() {
  return (
    <>
    <Saludo/>
    <Bienvenida nombre="Juan"/>
    <p className='text-danger'><HoraActual/></p>
    <TarjetaProducto nombre="Producto 1" precio="100" descripcion="Descripción del producto 1"/>
    <TarjetaProducto nombre="Producto 2" precio="200" descripcion="Descripción del producto 2"/>
    <TarjetaProducto nombre="Producto 3" precio="300" descripcion="Descripción del producto 3"/>
    </>
  )
}
export default App
