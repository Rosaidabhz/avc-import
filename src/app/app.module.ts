import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductosComponent } from './components/productos/productos.component';
import { Maquinas } from './Shared/interfaces/Maquinas';
import { CartService } from './services/cart.service';
import { CartItem}from './Shared/interfaces/CartItem';
import { PortadaComponent } from './components/portada/portada.component';
import { FoonterComponent } from './components/foonter/foonter.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductosComponent,
    PortadaComponent,
    FoonterComponent,
    AboutUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,  
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
