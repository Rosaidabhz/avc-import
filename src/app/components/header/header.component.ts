import { Component, HostListener } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductosService } from 'src/app/services/productos.service';
import { WhatsappService } from 'src/app/services/whatsapp.service';
import { CartItem } from 'src/app/Shared/interfaces/CartItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
   
  ngOnInit(): void {
    

    // constants
  const body = document.querySelector("body"),
  loader = document.querySelector(".loader-wrap"),
  links = document.querySelectorAll('a[href="#"]'),
  nav = document.querySelector("header nav"),
  navToggle = document.querySelector("header nav .toggle"),
  navSpanMiddle = document.querySelector("header nav .toggle .middle"),
  navNavigationBar = document.querySelector("header nav .navigation-bar"),
  navNavigationBarLi = document.querySelectorAll(
      "header nav .navigation-bar li"
  ),
  headerText = document.querySelector("header .text"),
  headerSection = document.querySelector("header"),
  aboutSection = document.querySelector(".about-us"),
  recipeSection = document.querySelector(".recipes"),
  menuSection = document.querySelector(".menu"),
  fixedImageSection = document.querySelector(".fixed-image"),
  footerSection = document.querySelector("footer"),
  dotOne = document.querySelector(".dots .one"),
  dotTwo = document.querySelector(".dots .two"),
  dotThree = document.querySelector(".dots .three"),
  dots = document.querySelectorAll(".dots > div"),
  logoImage = document.querySelector("header nav .logo img"),
  svgDown = document.querySelector("header .arrow-down"),
  svgUp = document.querySelector(".copyright .arrow-up"),
  menuImgs = document.querySelectorAll(".menu .menu-image-container img"),
  boxModel = document.querySelector(".menu .box-model"),
  menuImageContainer = document.querySelector(".menu-image-container"),
  boxModelArrow = document.querySelector(".menu .box-model .arrow"),
  boxModelImage = document.querySelector(".menu .box-model img"),
  pageTitle = document.querySelector("title");
  
  
  // toggle hamburger menu button
  navToggle!.addEventListener("click", () => {
  navToggle!.classList.toggle("active");
  navSpanMiddle!.classList.toggle("hide");
  navNavigationBar!.classList.toggle("show");
  });
  
  // show active navigationbar li
  navNavigationBarLi.forEach(li =>
  li.addEventListener("click", () => {
      const arr = Array.from(li.parentElement!.children);
      arr.forEach(li => li.classList.remove("active"));
      li.classList.add("active");
  })
  );
  
  // svg-up smooth scroll
  svgUp!.addEventListener("click", () => {
  window.scroll({
      top: 0,
      behavior: "smooth"
  });
  });
  
  window.onscroll = function() {
  // header welcome fade out and in

  }   

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

        this.wpService.contact(message)}}