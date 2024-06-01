/* eslint-disable react/prop-types */
import styles from './container.module.css'

function Container({ children, customStyles }) {
  return (
    // componente que contiene cada vista para darle la misma separación del borde a toda la página
    <div className={`${styles.container} ${customStyles}`}>{children}</div>
  )
}

export default Container
