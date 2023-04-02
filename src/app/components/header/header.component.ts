import { Component, AfterViewInit, HostListener, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { WhatsappService } from 'src/app/services/whatsapp.service';
import { CartItem } from 'src/app/Shared/interfaces/CartItem';

declare var M: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isSticky = false;
  cart: CartItem[] = [];
  totalCart = 0;
  shoppingCartFlat = true;
  isCartPanelOpen = false;
  totalPrice = 0;

  @ViewChild('cartPanel') cartPanel!: ElementRef<HTMLElement>;

  constructor(private cartService: CartService, private wpService: WhatsappService) { }

  ngOnInit(): void {
    document.addEventListener('click', this.handleDocumentClick);
    this.cartService.getCartObservable()
      .subscribe((cart) => {
        this.totalCart = cart.length;
        this.cart = cart;
        this.totalPrice = this.cartService.totalPrice;
      });
  }

  ngAfterViewInit(): void {
    const elemssidenav = document.querySelectorAll('.sidenav');
    const instancessidenav = M.Sidenav.init(elemssidenav, { edge: 'left' });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(event: any): void {
    this.isSticky = window.pageYOffset > 0;
  }

  toggleCartPanel(): void {
    this.isCartPanelOpen = !this.isCartPanelOpen;
  }

  toggleShoppingCart(): void {
    this.isCartPanelOpen = !this.isCartPanelOpen;
  }

  closeCartPanel(): void {
    this.isCartPanelOpen = false;
  }

  handleDocumentClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!this.cartPanel.nativeElement.contains(target)) {
      this.isCartPanelOpen = false;
    }
  };

  total(): number {
    return this.cart.reduce((prev, curr) => prev + curr.price, 0);
  }

  removeFromCart(product: CartItem): void {
    this.cartService.removeFromCart(product);
  }

  sendWhatsapp(): void {
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
