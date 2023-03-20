import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  url: string= 'https://api.whatsapp.com/send?phone=51912346852&text=Buen dia';
  lb: string= '%0A';

  constructor() {}

  skipLine(sentence: string){
    const urlBase = 'https://api.whatsapp.com/send?phone=51912346852&text=Buen dia';
     this.url=urlBase+this.lb+sentence+this.lb;
  }
  
  contact(product: string):string{
    this.skipLine('Estoy interesado/a en este producto'+' '+product+' ');
    return this.url

  }
   
}
