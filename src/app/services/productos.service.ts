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
      price: 120,
      img: '/assets/product_images/1.png'
    },
    {
      id: 2,
      title: 'Maquina Manual',
      caption: 'COD: ST-130',
      price: 140,
      img: '/assets/product_images/2.png'
    },
    {
      id: 3,
      title: 'Maquina Doble Estacion',
      caption: 'COD: ST-210',
      price: 170,
      img: '/assets/product_images/3.png'
    },
    {
      id: 4,
      title: 'Maquina Multifuncional 8-1',
      caption: 'COD: ST-220',
      price:350,
      img: '/assets/product_images/4.png'
    },
    {
      id: 5,
      title: 'Maquina Multifuncional 8-1',
      caption: 'COD: ST-220',
      price: 390,
      img: '/assets/product_images/5.png'
    },
    {
      id: 6,
      title: 'Maquina Multifuncional 11-1',
      caption: 'COD: P8200-V11',
      price: 490,
      img: '/assets/product_images/6.png'
    },
    {
      id: 7,
      title: 'Maquina Multifuncional 5-1',
      caption: 'COD: SB04W',
      price: 420,
      img: '/assets/product_images/7.png'
    },
    {
      id: 8,
      title: 'Maquina de Gorras 2-1',
      caption: 'Resistencia cuadrada',
      price: 260,
      img: '/assets/product_images/8.png'
    },
  ];

  
  getProducts(): Maquinas[] {
    return this.products;
  }

  constructor() { }

}