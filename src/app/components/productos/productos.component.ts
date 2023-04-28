import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductosService } from 'src/app/services/productos.service';
import { Maquinas } from 'src/app/Shared/interfaces/Maquinas';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  selectedProduct: Maquinas | null = null;  
  isCardVisible: boolean = false;
  products: Maquinas[] = [];
  showProductDetails = true;
  
  constructor(private productsService: ProductosService, private cartService: CartService) {
    this.products = this.productsService.getProducts();
  }
  
  showCard() {
    this.isCardVisible = true;
  }

  closeCard() {
    this.isCardVisible = false;
  }
  
  addToCart(product: Maquinas) {
    this.cartService.addToCart(product);    
    window.alert('Producto agregado al carrito: ' + product.title)
  }

  getTotal(): number {
    let total = 0;
    for (let item of this.cartService.cart) {
      total += item.price;
    }
    return total;
  }

  showDescription(product: Maquinas) {
    this.selectedProduct = product;
    this.showCard();
  }
  
  ngOnInit(): void {
  }
}