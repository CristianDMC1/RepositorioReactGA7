/* eslint-disable react/prop-types */
import styles from './product-card.module.css'
function ProductCard({ imagen, titulo }) {
  return (
    <article className={styles.card}>
      <div>
        <img src={imagen} alt={titulo} />
      </div>
      <h3>{titulo}</h3>
    </article>
  )
}

export default ProductCard
