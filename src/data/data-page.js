//----------Imágenes equipo---------------------------
import anaImg from '../assets/team/people1.png'
import cristianImg from '../assets/team/people2.png'
import isabellaImg from '../assets/team/people3.jpg'
import dianaImg from '../assets/team/people4.png'

//----------Imágenes categorías-----------------------

import zapatosdm from '../assets/categories/calzado dama.png'
import zapatoscab from '../assets/categories/tenis hombre.png'
import ropaDama from '../assets/categories/ropa de dama.png'
import ropaCab from '../assets/categories/ropa caballero.png'
import personal from '../assets/categories/gorra.png'

//---------Imágenes de productos-----------------------

import image1 from '../assets/img/hombre1.jpeg'
import image2 from '../assets/img/hombre2.jpeg'
import image3 from '../assets/img/hombre3.jpeg'
import image4 from '../assets/img/dama1.jpeg'
import image5 from '../assets/img/dama2.jpeg'
import image6 from '../assets/img/dama3.jpeg'
import image7 from '../assets/img/arte1.jpeg'
import image8 from '../assets/img/arte2.jpeg'
import image9 from '../assets/img/arte3.jpeg'

export const team = [
  {
    image: anaImg,
    title: 'Ana Lucía Luna',
    role: 'Representante Legal',
  },
  {
    image: cristianImg,
    title: 'Cristian Moreno',
    role: 'Diseñador Gráfico',
  },
  {
    image: isabellaImg,
    title: 'Isabella Galvis',
    role: 'Asesora Comercial',
  },
  {
    image: dianaImg,
    title: 'Diana Montes',
    role: 'Asesor de Marketing',
  },
]

export const categories = [
  {
    image: zapatosdm,
    title: 'Calzados para dama',
    description: 'Materiales como: cuero sintético y tela',
  },
  {
    image: zapatoscab,
    title: 'Calzados para caballero',
    description: 'Materiales como: cuero, tipo cuero, sintético y tela',
  },
  {
    image: ropaDama,
    title: 'Ropa para dama',
    description: 'diseños únicos y gran variedad de tela',
  },
  {
    image: ropaCab,
    title: 'Ropa para caballeros',
    description: 'Las mejores marcas para tí en pantalones, sueteres y camisas',
  },
  {
    image: personal,
    title: 'Productos personalizados y más',
    description: 'Camisetas personalizadas, gorras, cuadros, llaveros y más',
  },
]

export const products = [
  {
    titulo: 'Camisas',
    category: 'caballero',
    imagen: image1,
    descripcion:
      'Tela de lino fino, con diseño exclusivo el cual posee distintos motivos como tambien diferentes modelos',
    precio: '$ 75.000',
  },
  {
    titulo: 'Ropa Deportiva',
    category: 'caballero',
    imagen: image2,
    descripcion:
      'Sueter de tela fria, incluye panataloneta impermeable, diferentes colores y motivos como tambien marcas',
    precio: '$ 58.000',
  },
  {
    titulo: 'Pantalones',
    category: 'caballero',
    imagen: image3,
    descripcion:
      'Pantalones de tela rigida de diferentes marcas de excelente calidad. tambien los hay licrados de excelente calidad',
    precio: '$ 96.000',
  },
  {
    titulo: 'Pantalones y blusas',
    category: 'dama',
    imagen: image4,
    descripcion:
      'Las Blusas poseen varios diseños que se acomodan a tus gustos, al igual que los pantalones se encuentran de distintos colores y modelos',
    precio: ' Blusa : $29.000 - Pantalón $79.000',
  },
  {
    titulo: 'Vestidos',
    category: 'dama',
    imagen: image5,
    descripcion:
      'vestidos con diseño exclusivo, los puedes encontrar en diferentes modelos y colores, además de que sus telas varían adaptandose a tus gustos',
    precio: '$ 73.000',
  },
  {
    titulo: 'Pijamas',
    category: 'dama',
    imagen: image6,
    descripcion:
      'Pijamas talla única, con telas suaves para que descances como mereces, viene con 3 piezas: Sueter, Pantalónn Largo y Pantalóin corto',
    precio: '$55.000',
  },
  {
    titulo: 'Cuadros',
    category: 'personalizado',
    imagen: image7,
    descripcion:
      'Cuadros personalizados para ocaciones especiales, a tu gusto, tú solo indicanos como lo quieres y nosotros lo fabricamos',
    precio: 'van de $35.000 hasta $56.000',
  },
  {
    titulo: 'Aretes',
    category: 'personalizado',
    imagen: image8,
    descripcion:
      'Aretes de multiples motivos a bajos precios y de excelente calidad para combinar con cualquiera de tus oufit',
    precio: '$ 15.000',
  },
  {
    titulo: 'Llaveros',
    category: 'personalizado',
    imagen: image9,
    descripcion: 'Llaveros en madera, personalizados según sea tu gusto.',
    precio: 'van de $25.000 hasta $50.000',
  },
]
