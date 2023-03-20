import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PortadaComponent } from './components/portada/portada.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {
  path:'productosimport',
  component:ProductosComponent
},{
  path:'home',
  component:PortadaComponent
},
{
  path:'sobre',
  component:AboutUsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
