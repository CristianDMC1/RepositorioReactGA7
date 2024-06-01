/* Sección de primera vista de la página */

import Container from '../container/container'

//la siguiente importación se encuentra en todos los coponentes,
//importa una hoja de estilos única para el componente
import styles from './hero.module.css'

function HeroSection() {
  return (
    <Container customStyles={styles.customContainer}>
      <section className={styles.hero}>
        <h1>Boutique Luz de Luna</h1>
        <h2>By Ana Luna</h2>
      </section>
    </Container>
  )
}

export default HeroSection
