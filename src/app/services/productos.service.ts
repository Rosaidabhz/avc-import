import { Injectable } from '@angular/core';
import { Maquinas } from '../Shared/interfaces/Maquinas';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  products: Maquinas[] = [
    {
      id: 1,
      title: 'Maquina manual',
      caption: 'COD: SB04A',
      description: 'La máquina para tazas es fácil de usar. El efecto de sublimación es muy bueno y muy eficiente, satisface la sublimación de producción en masa.',
      personalize: '11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',
      price: 120,
      img: '1.png',
      includes:'Todas nuestras maquinas incluye capacitación, contamos con un canal de soporte en YouTube Freesub Perú donde damos consejos, tips y recomendaciones del buen uso de nuestras máquinas. La máquina para tazas es fácil de usar, también puedes cambiar la resistencia térmica a diferentes tamaños: 11oz-15oz, 12oz cónica y 17oz cónica. El efecto de sublimación es muy bueno y muy eficiente, satisface la sublimación de producción en masa.',


    },
    {
      id: 2,
      title: 'Maquina Manual',
      caption: 'COD: ST-130',
      personalize: '11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',
      includes:'11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',
      description: 'Lo que tenés que saber de este producto Ideal para estampar tazas. Con su control de temperatura, se adapta a la superficie que desees estampar. Incluye temporizador. Cuenta con regulador de presión. Artículos únicos y personalizados con la versatilidad de Addacor.',
      price: 140,
      img: '2.png'
    },
    {
      id: 3,
      title: 'Maquina Doble Estacion',
      caption: 'COD: ST-210',
      personalize: '11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',
      includes:'11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',

      description: '1. Placa de circuito de control de doble estación. 2. Control de temperatura inteligente. 3. Pantalla de temperatura y segundos. 4. Conteo cuantitativo. 5. Función de corrección de temperatura, que hace que la temperatura en la pantalla sea la misma a la temperatura real. 6. Estación doble, puede transferir dos tazas a la vez. 7. Puede trabajar brazos por separado, si desea de una o dos tazas. 8. Máquina Original 9. Marca posicionada en mas de 20 paìses 10. Practica y cómoda Ideal para comenzar un negocio y aprender de este hermoso mundo de sublimación.',
      price: 170,
      img: '3.png'
    },
    {
      id: 4,
      title: 'Maquina Multifuncional 8-1',
      caption: 'COD: ST-220',
      personalize: '11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',
      includes:'11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',

      description: 'Imprime sobre una amplia gama de objetos, no te limites al papel. Asegúrate de que tu mensaje o marca sea sobre cualquier cosa, desde camisetas hasta fundas del móvil, puzzle, gorras, alfombrillas para el ratón, tazas, etc. , utilizando todos los accesorios para la impresora térmica.La versátil sublimadora 30x38cm con accesorios para tazas, gorras y platos te permiten de imprimir directamente sobre un amplia gama de objetos personalizados, incluidos ropa y objetos de uso cotidiano como tazas, fundas del móvil y señales, platos, tazas, gorras, etc.      ',
      price:350,
      img: '4.png'
    },
    {
      id: 5,
      title: 'Termofijadora - Sublimadora 8 En 1',
      caption: 'COD: ST-220',
      personalize: '11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',
      includes:'11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',

      description: 'Resistencia plana 29 cm x 38 cm Resistencia curva de 13 cm x 8 cm para gorras. Almohadilla circular plana de 11 cm para plato pequeño. Almohadilla circular plana de 15 cm para plato grande. Resitencia Vaso V Cónica para 12 oz. Resistencia Mug cilíndrica 11 oz. Resistencia Mug cilíndrica 9 oz. Resistencia para termos',
      price: 390,
      img: '5.png'
    },
    {
      id: 6,
      title: 'Maquina Multifuncional 11-1',
      caption: 'COD: P8200-V11',
      price: 490,
      personalize: '11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',
      includes:'11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',
      description: '¿Qué puedes personalizar? Tazas Tomatodos de Aluminio Tomatodos de Acero Termo para Autos Polos sintéticos Polos Transfer Pad mouse Fotorrocas Cases De celulares 2d Gorras Lapiceros con Papel Láser Cristales Placas de Aluminio Bolsos de tela sintéticos Rompecabezas Llaveros Almohadas mágicas Chops Cervecero Posa vasos MDF y mucho más. ¿Qué incluye la máquina? Plancha termo fijadora plana de 29x38cm Resistencia para sublimar tazas rectas de 11oz Resistencia para sublimar tazas rectas de 6oz, Resistencia para sublimar termos de 9oz Resistencia para sublimar tazas cónicas de 12oz Resistencia para sublimar tazas cónicas de 17oz Resistencia para sublimar botellas de hasta 750ml Resistencia para sublimar gorras Resistencia para sublimar lapiceros Resistencia para sublimar plato de 8” Resistencia para sublimar plato de 10”',
      img: '6.png'
    },
    {
      id: 7,
      title: 'Maquina Multifuncional 5-1',
      caption: 'COD: SB04W',
      price: 420,
      personalize: '11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',
      includes:'11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',

      description: '¿Qué puedes personalizar? Tazas 11oz Tazas de 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml ¿Qué incluye la máquina? Máquina de tazas 5 en 1 Todas nuestras maquinas incluye capacitación, contamos con un canal de soporte en YouTube Freesub Perú donde damos consejos, tips y recomendaciones del buen uso de nuestras máquinas.¿Qué puedes personalizar? Tazas 11oz Tazas de 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml ¿Qué incluye la máquina? Máquina de tazas 5 en 1 Todas nuestras maquinas incluye capacitación, contamos con un canal de soporte en YouTube Freesub Perú donde damos consejos, tips y recomendaciones del buen uso de nuestras máquinas.',
      img: '7.png'
    },
    {
      id: 8,
      title: 'Maquina de Gorras 2-1',
      caption: 'Resistencia cuadrada',
      price: 260,
      personalize: '11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',
      includes:'11oz Tazas 15oz Tomatodos de 500ml y 600ml Termos para autos 450ml',

      description: 'Imprime sobre una amplia gama de objetos, no te limites al papel. Asegúrate de que tu mensaje o marca sea sobre cualquier cosa, desde camisetas hasta fundas del móvil, puzzle, gorras, alfombrillas para el ratón, tazas, etc. , utilizando todos los accesorios para la impresora térmica. La versátil sublimadora 30x38cm con accesorios para tazas, gorras y platos te permiten de imprimir directamente sobre un amplia gama de objetos personalizados, incluidos ropa y objetos de uso cotidiano como tazas, fundas del móvil y señales, platos, tazas, gorras, etc. ',
      img: '8.png'
    },
  ];

  
  getProducts(): Maquinas[] {
    return this.products;
    
  }

  constructor() { }

}