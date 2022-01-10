console.log("      ");
console.log("Comercializacion de articulos importados");
"use strict"
var Articulo= "15";
var MontoSinIVA = Articulo*15/100;
var MontoIVA = parseInt(Articulo)+(MontoSinIVA);
var Ganancia= Articulo*25/100;
var GananciaTotal=parseInt(Articulo)+(Ganancia)
var ComisionVendedor = Articulo*20/100 ;
var Pagototal =(MontoIVA)+(Ganancia)+(ComisionVendedor);

console.log("Precio de venta de un articulo");
console.log("Precio del articulo "+Articulo+" $");
console.log("El Iva del 15% del comprador es "+ MontoSinIVA+ " $ y el monto con el IVA "+MontoIVA+" $");
console.log("Ganancia de la empresa del 25% es "+Ganancia+ " $");
console.log("La comision del vendedor equivalente del 20% es "+ComisionVendedor+ " $");
console.log("El costo total del articulo importado es de "+Pagototal+ " $");