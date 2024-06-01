/* Componente superior de la página, esta es la barra de navegación donde 
se encuentran los link para navegar por el sitio web */

import CarritoImg from '../../assets/carrito.webp'
import LogoImg from '../../assets/logo.webp'
import Container from '../container/container'
import Styles from './navbar.module.css'

function Navbar() {
  return (
    <Container customStyles={Styles.customContainer}>
      {/* Cabecera de navegación de la página */}
      <div className={Styles.header}>
        <div className={Styles.logo}>
          <img src={LogoImg} alt='Imágen logo' />
        </div>

        {/* Navegables o links de la página */}
        <nav className={Styles.nav}>
          <ul>
            <li>Inicio</li>
            <li>Equipo</li>
            <li>Categorías</li>
            <li>Productos</li>
            <li>Contacto</li>
          </ul>
          <div className={Styles.cart}>
            <img src={CarritoImg} alt='Imágen del carrito de compras' />
          </div>
        </nav>
      </div>
    </Container>
  )
}

export default Navbar
