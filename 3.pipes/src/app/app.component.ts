import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 texto = 'Nombre';
 arreglo = [1,2,3,4,5,6,7,8,9,10];
 PI = Math.PI;
 a = 0.233;
 salario:number = 1234.5;
 obj = {
   nombre   :'Jesus',
   apellido : 'Laucho',
   edad     : 37,
   direccion:{
     calle  :'60-1',
     casa   :'96j-19'
   }
 }

 promesa = new Promise ( (resolve, reject)=>{
  setTimeout(()=>resolve('Acaba de llegar'), 4000);
});

fecha = new Date();
}
