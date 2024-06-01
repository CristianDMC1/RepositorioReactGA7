import { categories } from '../../data/data-page'
import CategoryCard from '../category-card/category-card'
import Container from '../container/container'
import styles from './categories.module.css'

function CategoriesSection() {
  return (
    <Container customStyles={styles.containerCategories}>
      <section className={styles.categories}>
        <div>
          <h2>Nuestras Categorías</h2>
          <p>Muchas variedades para ti</p>
        </div>
        <section className={styles.sectionCategory}>
          {categories.map((category, index) => (
            <CategoryCard key={index} img={category.image} title={category.title} description={category.description} />
          ))}
        </section>
      </section>
    </Container>
  )
}

export default CategoriesSection
