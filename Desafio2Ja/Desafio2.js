"use strict";
var MIN = 1;
var MAX = 4;
var playera = 25000;
var deportiva = 50000;
var casual = 68900;
var Sudadera = 98900;
var tallaS = 15;
var tallaL = 25;
var precio=0;
var costo=0;
var recargo=0;
var recargototal=0;
var nac = 25;
var impo = 45;
var descuento = 15;
var descuentomenor = 5;
var subTotal=0;
var preTotal=0;
var Total=0;
var Impuesto=0;
var ImpuestoTotal =0;
var Monto=0;
//OBJETIVO 1
//valor aleatorio para el tipo de franela
var tipo = Math.random()*(MAX-MIN)+MIN;
tipo = tipo.toFixed(0);
console.log("El valor aleatorio del tipo de franela es "+tipo)

//al valor maximo se le coloca 3 para el valor aleatorio de la talla de la franela
MAX = 3;
var talla = Math.random()*(MAX-MIN)+MIN;
talla = talla.toFixed(0);
console.log("El valor aleatorio de la talla de franela es "+talla)

//al valor maximo se le coloca 2 para el valor aleatorio de si es nacional o importado
MAX = 2;
var procedencia = Math.random()*(MAX-MIN)+MIN;
procedencia = procedencia.toFixed(0);
console.log("El valor aleatorio para saber si es nacional o importado "+procedencia)

//al valor maximo se le coloca 50 para el valor aleatorio de unidades solicitadas
MAX = 50;
var unidades = Math.random()*(MAX-MIN)+MIN;
unidades = unidades.toFixed(0);
console.log("El valor aleatorio para las unidades solicitadas "+unidades)
//OBJETIVO 2
console.log("  ")

if(tipo == 1 && talla ==1){
   precio = playera*tallaS/100;
    costo = playera - precio;
    console.log("Este es el costo de la playera Talla S "+costo+" Bs");
}
else
    if (tipo == 1 && talla ==3){
    precio = playera*tallaL/100;
    costo = playera + precio;
    console.log("Este es el costo de la playera Talla L "+costo+" Bs");
}
    else
    if (tipo == 2 && talla ==1){
        precio = deportiva*tallaS/100;
        costo = deportiva - precio;
        console.log("Este es el costo de la Deportiva Talla S "+costo+" Bs");
    }
    else
    if (tipo == 2 && talla ==3){
        precio = deportiva*tallaL/100;
        costo = deportiva + precio;
        console.log("Este es el costo de la Deportiva Talla L "+costo+" Bs");
    }
    else
    if (tipo == 3 && talla ==1){
        precio = casual*tallaS/100;
        costo = casual - precio;
        console.log("Este es el costo de la Casual Talla S "+costo+" Bs");
    }
    else
    if (tipo == 3 && talla ==3){
        precio = casual*tallaL/100;
        costo = casual + precio;
        console.log("Este es el costo de la Casual Talla L "+costo+" Bs");
    }
    else
    if (tipo == 4 && talla ==1){
        precio = Sudadera*tallaS/100;
        costo = Sudadera - precio;
        console.log("Este es el costo de la Sudadera Talla S "+costo+" Bs");
    }
    else
    if (tipo == 4 && talla ==3){
        precio = Sudadera*tallaL/100;
        costo = Sudadera + precio;
        console.log("Este es el costo de la Sudadera Talla L "+costo+" Bs");
    }
    else
    if (tipo == 1 && talla ==2){
        precio = playera;
        costo = precio;
        console.log("Este es el costo de la Playera Talla M "+costo+" Bs");
    }
    else
    if (tipo == 2 && talla ==2){
        precio = deportiva;
        costo = precio;
        console.log("Este es el costo de la Deportiva Talla M "+costo+" Bs");
    }
    else
    if (tipo == 3 && talla ==2){
        precio = casual;
        costo = casual;
        console.log("Este es el costo de la Casual Talla M "+costo+" Bs");
    }
    else
    if (tipo == 4 && talla ==2){
        precio = Sudadera;
        costo = precio;
        console.log("Este es el costo de la Sudadera Talla M "+costo+" Bs");
    }
    //OBJETIVO 3
    //calculo para saber si es nacional o importado
    console.log(" ")
if (procedencia==1){
    recargo = costo*nac/100;
    recargototal = costo + recargo;
    console.log("Esta es la recarga de la franela nacional "+recargo+" Bs")
    console.log("Este es el costo con su recarga "+recargototal+" Bs")
}
else
if (procedencia==2){
    recargo = costo*impo/100;
    recargototal = costo + recargo;
    console.log("Esta es la recarga de la franela importada "+recargo+" Bs")
    console.log("Este es el costo con su recarga "+recargototal+" Bs")
}
//OBJETIVO 4
//Calculo de la politica de descuento de la fabrica
console.log("  ")
    subTotal = recargototal*unidades
    console.log("El costo de la franelas con las unidades es de "+subTotal+" Bs")
if (unidades >= 6 && unidades<=11){
    preTotal = subTotal*descuentomenor/100
    Total = subTotal-preTotal
    console.log("Tiene un descuento del 5% de "+preTotal+" Bs")
    console.log("El total a pagar sin Impuesto es de "+Total+" Bs")
}
else
if (unidades >24){
    preTotal = subTotal*descuento/100
    Total = subTotal-preTotal
    console.log("Tiene un descuento del 15% de "+preTotal+" Bs")
    console.log("El total a pagar sin Impuesto es de "+Total+" Bs")
}
else
    console.log("No tiene descuento")
//OBJETIVO 5
//calculamos el impuesto y su monto
Impuesto= (subTotal*12/100)
ImpuestoTotal = (Impuesto+subTotal)-preTotal
Monto =subTotal +ImpuestoTotal
    console.log("El Impuesto es de "+Impuesto+" Bs")
    console.log("El monto a pagar es de "+Monto+" Bs")

alert("número de unidades solicitadas "+unidades)
alert("precio a pagar por la franela "+recargototal+" Bs")
alert("sub total "+subTotal+" Bs")
alert("descuento "+preTotal+" Bs")
alert("Impuesto "+ImpuestoTotal+" Bs")
alert("monto a pagar "+Monto+" Bs")