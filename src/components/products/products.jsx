/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { products } from '../../data/data-page'
import Container from '../container/container'
import ProductCard from '../product-card/product-card'
import styles from './products.module.css'

function ProductsSection() {
  //estados del componente para mostrar los productos filtrados
  const [dataProducts, setDataProducts] = useState(products)
  const [filterName, setFilterName] = useState('todos')

  //Funcion para filtrar los productos y dar estilos al filtro activo
  const filterProducts = (e) => {
    const filter = e.target.name
    if (filter === 'todos') {
      setDataProducts(products)
    } else {
      const filteredProducts = products.filter((product) => product.category === filter)
      setDataProducts(filteredProducts)
    }
    const latest = document.getElementsByName(filterName)
    latest[0].style.backgroundColor = ''
    latest[0].style.color = ''

    e.target.style.backgroundColor = '#db9001'
    e.target.style.color = '#fff'

    setFilterName(filter)
  }

  //Seleccionar el filtro activo por primer vez
  useEffect(() => {
    const latest = document.getElementsByName(filterName)
    latest[0].style.backgroundColor = '#db9001'
    latest[0].style.color = '#fff'
  }, [])

  return (
    <Container>
      <section className={styles.productSection}>
        <h2>Products</h2>
        <p>Siempre con la mejor calidad</p>

        {/*Sección de botones de filtros */}
        <article className={styles.buttons}>
          <button onClick={filterProducts} name='todos'>
            Todos
          </button>
          <button onClick={filterProducts} name='dama'>
            Damas
          </button>
          <button onClick={filterProducts} name='caballero'>
            Caballeros
          </button>
          <button onClick={filterProducts} name='personalizado'>
            Arte Personalizado
          </button>
        </article>

        {/*Sección de productos filtrados */}
        <section className={styles.containerCards}>
          {dataProducts.map((product, index) => (
            <ProductCard key={index} imagen={product.imagen} titulo={product.titulo} />
          ))}
        </section>
      </section>
    </Container>
  )
}

export default ProductsSection
