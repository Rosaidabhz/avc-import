import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{

   
  ngOnInit(): void {



  // ------------ Recogiendo variables ---------------- // 
 
var botonDerecho = document.getElementsByClassName('icono-derecho')[0]  
var botonIzquierdo = document.getElementsByClassName('icono-izquierdo')[0] 
 
var slider = document.getElementsByClassName('slider')[0]  as HTMLElement

var sliders = document.getElementsByClassName('img-slider').length 
var contador = 0; // ---- Se define un contador que comience en 0 ---- // 
 
 
// -------------- Declarar Funcion Derecha ----------------- // 
 
function moverDerecha(){ 
    contador++; // ---- Por cada vez que oprima el boton el contador pasa de 0 a 1 ----// 
     
    // ---- Condicion para devolverse cuando llegue a su fin // 
 
    if(contador > sliders - 1){ 
        contador = 0 
    } 
 
    // Por cada vez que de click hara un margin left ocultandolo pero mostrando la siguiente // 
     
    slider.style.marginLeft = `-${contador * 100}%`
  
 
    // Funcion para que se repita el tiempo cuando cambie // 
 
    clearInterval(intervalo) 
    intervalo = setInterval(moverDerecha, 6000) 
} 
 
// ------- SLIDER AUTOMATICO ------- //  
 
var intervalo = setInterval(moverDerecha, 6000) 
 
// -------------- Declarar Funcion izquierda ----------------- // 
 
function moverIzquierda(){ 
    contador--; // ---- Por cada vez que oprima el boton el contador bajara un numero ----// 
     
    // ---- Condicion para devolverse cuando llegue al comienzo // 
 
    if(contador < 0){ 
        contador = sliders -1; 
    } 
 
    // Por cada vez que de click hara un margin left ocultandolo pero mostrando la siguiente // 
     
    slider.style.marginLeft = `-${contador * 100}%`  
 
    // Funcion para que se repita el tiempo cuando cambie // 
 
    clearInterval(intervalo) 
    intervalo = setInterval(moverDerecha, 6000) 
} 
 
botonDerecho.addEventListener('click', moverDerecha) 
botonIzquierdo.addEventListener('click', moverIzquierda)
}}
