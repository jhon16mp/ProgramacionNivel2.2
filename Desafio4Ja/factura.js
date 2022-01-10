'use strict'
//OBJETIVO 3 Y 4
let nombres = [];
let montos = [];
function buscarCliente(nombre){
   //INTENTE HACER PARA QUE EL CODIGO NO ME INGRESARA LOS MISMOS DATOS PERO DA UN ERROR 
   //INVESTIGUE Y LE PUSE VARIOS CODIGOS PERO NO AGARRO LOS DATOS Y CUANDO SI AGARRA EL CODIGO
   //DICE QUE SI ESTA REGISTRADO EL CLIENTE
   let Encontro = false;
   let i=0;
   do{
      
       if(nombres[i]==nombre)
        {
        Encontro = false;}
        
        else
        {i = i + 1;
        Encontro = true;
        nombres.push(nombre)
        }
        
   }while(Encontro ==false || Encontro == true)
   return Encontro;
  // var clientesExistentes=0;
  // for(let i=0;i<nombre.length;i++){
    //  clientesExistentes+=nombres[i];
 // }
 // nombres.push(nombre)
 //for (let k = 0; j < montos.length; j++) {
   //mensaje+=(j+1)+" Cliente :"+nombres[j]+" monto : "+montos[j]+"\n";
  // alert(mensaje)
   //console.log(mensaje)
//}
 }
