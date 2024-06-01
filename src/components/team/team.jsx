import styles from './team.module.css'
import { team } from '../../data/data-page'
import Container from '../container/container'
import PersonalCard from '../personal-card/personal-card'

function TeamSection() {
  return (
    <Container>
      <section className={styles.team}>
        <div>
          <h2>Nuestro equipo</h2>
          <p>conoce a la gente asombrosa y creativa</p>
        </div>
        <article className={styles.containerCards}>
          {team.map((person, index) => {
            return <PersonalCard key={index} image={person.image} role={person.role} title={person.title} />
          })}
        </article>
      </section>
    </Container>
  )
}

export default TeamSection
