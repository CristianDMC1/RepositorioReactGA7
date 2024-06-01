/* eslint-disable react/prop-types */
import styles from './category-card.module.css'

function CategoryCard({ img, title, description }) {
  return (
    <article className={styles.category}>
      <div>
        <img src={img} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default CategoryCard
