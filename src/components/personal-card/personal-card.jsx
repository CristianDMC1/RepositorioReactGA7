import styles from './personal-card.module.css'

function PersonalCard({ image, title, role }) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{role}</p>
      </div>
    </article>
  )
}

export default PersonalCard
