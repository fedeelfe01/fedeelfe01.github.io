{var nom=0;
var eda=0;
var fech=0;
var nac=0;
var dn=0;
var dir=0;
var tel=0;
var mai=0; }

document.getElementById('boton1').onclick = function () {
      if (nom ==0){
   document.getElementById('all.nombre').innerHTML = "Federico Ezequiel Bandini";
   nom=1;
}
else{
   document.getElementById('all.nombre').innerHTML = "";
   nom=0;
}
}

document.getElementById('boton2').onclick = function () {
   if (eda ==0){
     document.getElementById('edad2').innerHTML = "34 Años";
     eda=1;
   }
   else{
      document.getElementById('edad2').innerHTML = "";
      eda=0;
   }

}
document.getElementById('boton3').onclick = function () {
   if (fech ==0){
   document.getElementById('fecha2').innerHTML = "22 de Septiembre de 1988";
   fech=1;
}
else{
   document.getElementById('fecha2').innerHTML = "";
   fech=0;
}
}

document.getElementById('boton4').onclick = function () {
   if (nac ==0){
      document.getElementById('nacion2').innerHTML = "Argentino";
      nac=1;
   }
   else{
      document.getElementById('nacion2').innerHTML = "";
      nac=0;
   }
   }

document.getElementById('boton5').onclick = function () {
   if (dn ==0){
      document.getElementById('dni2').innerHTML = "34.076.573";
      dn=1;
   }
   else{
      document.getElementById('dni2').innerHTML = "";
      dn=0;
   }
   }

document.getElementById('boton6').onclick = function () {
   if (dir ==0){
      document.getElementById('dire2').innerHTML = "Terrada 5462, Isidro Casanova";
      dir=1;
   }
   else{
      document.getElementById('dire2').innerHTML = "";
      dir=0;
   }
}
document.getElementById('boton7').onclick = function () {
   
   if (tel ==0){
      document.getElementById('celu2').innerHTML = "15-3007-8248";
      tel=1;
   }
   else{
      document.getElementById('celu2').innerHTML = "";
      tel=0;
   }
}
document.getElementById('boton8').onclick = function () {
   
   if (mai ==0){
      document.getElementById('mail2').innerHTML = "Fede_2007@hotmail.com";
      mai=1;
   }
   else{
      document.getElementById('mail2').innerHTML = "";
      mai=0;
   }
}
