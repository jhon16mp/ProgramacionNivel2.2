console.log("Agencia de carros");
"use strict"
var salario = "500000";
var comision = "200000";
var cantidadAutos= "2";
var bonoventas = "10";
var nombreVendedor = "Juan";
var PrecioAuto = "100000"

var ventaSinbono = cantidadAutos*PrecioAuto;
var venta= (cantidadAutos*PrecioAuto)*bonoventas/100;
var totalVentas = parseInt(cantidadAutos*comision)+parseInt(venta);
var SalarioNetovendedor= parseInt(salario)+parseInt(totalVentas);

console.log("El nombre del vendedor es "+ nombreVendedor);
console.log("Cantidad de autos "+ cantidadAutos);
console.log("Total de venta "+ ventaSinbono);
console.log("El salario neto del vendedor es "+SalarioNetovendedor+" Bs");