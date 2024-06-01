import LogoImg from '../../assets/logo.webp'
import Container from '../container/container'
import styles from './footer.module.css'

function Footer() {
  return (
    <Container customStyles={styles.containerFooter}>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <img src={LogoImg} alt='Logo' />
        </div>
        <div>
          <p>Creado por Cristian Moreno</p>
          <p>2024. Todos los derechos reservados</p>
        </div>
      </footer>
    </Container>
  )
}

export default Footer
