import { Component, AfterViewInit,  HostListener } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { WhatsappService } from 'src/app/services/whatsapp.service';
import { CartItem } from 'src/app/Shared/interfaces/CartItem';

declare var M: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  isSticky: boolean = false;
  cart: CartItem[] = [];
  totalCart = 0;
  shoppingCartFlat = true;

  totalPrice = 0;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (window.pageYOffset > 0) {
      return this.isSticky = true
    }
      return this.isSticky = false;
  }

  constructor(private cartService: CartService,private wpService: WhatsappService,) { 
    this.cartService.getCartObservable()
    .subscribe((cart) => {
      this.totalCart = cart.length;
      this.cart = cart;
      this.totalPrice = this.cartService.totalPrice;
    });
   
  }

  total() {
    return this.cart.reduce((prev, curr) => prev + curr.price, 0 );
  }

  removeFromCart(product: CartItem){
    this.cartService.removeFromCart(product);
  }

  toggleShoppingCart() {
    this.shoppingCartFlat = !this.shoppingCartFlat;
  }
   
  ngAfterViewInit(): void {
    const elemssidenav = document.querySelectorAll('.sidenav');
    const instancessidenav = M.Sidenav.init(elemssidenav, { edge: 'left' });
    
  }    
  
  sendWhatsapp() {
    let message = '';
    this.cart.find(product => {
      message += `: ${product.title}, Cantidad-${product.quantity}, Precio: ${product.price}  \n`;
    });
   
    message += `Total: ${this.total()} dolares`;
   
    const url = this.wpService.contact(message);
    console.log(url);
    window.open(url, '_blank');
  
    this.wpService.contact(message);
  }
}
