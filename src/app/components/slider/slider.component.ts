import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  private intervalo: any; 

  ngOnInit(): void {
    var botonDerecho = document.getElementsByClassName('icono-derecho')[0];  
    var botonIzquierdo = document.getElementsByClassName('icono-izquierdo')[0]; 
 
    var slider = document.getElementsByClassName('slider')[0] as HTMLElement;

    var sliders = document.getElementsByClassName('img-slider').length; 
    var contador = 0; 

    const moverDerecha = () => { 
      contador++;
      if (contador > sliders - 1) { 
        contador = 0; 
        slider.style.transition = 'none'; 
        slider.style.marginLeft = '0%'; 
        setTimeout(() => {
          slider.style.transition = 'margin-left 0.5s ease';
        }, 100);
      } else {
        slider.style.marginLeft = `-${contador * 100}%`;
      }
    
      clearInterval(this.intervalo);
    
      this.intervalo = setInterval(moverDerecha, 6000);
    }
    
    
    
    
    const moverIzquierda = () => { 
      contador--;
      if (contador < 0) { 
        contador = sliders - 1; 
      }
       
      slider.style.marginLeft = `-${contador * 100}%`;
  
      clearInterval(this.intervalo);
  
      this.intervalo = setInterval(moverDerecha, 6000);
    }

    this.intervalo = setInterval(moverDerecha, 6000); 

    botonDerecho.addEventListener('click', moverDerecha); 
    botonIzquierdo.addEventListener('click', moverIzquierda);
  }
}
