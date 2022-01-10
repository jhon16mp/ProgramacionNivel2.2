'use strict'
const diaSemana = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"];
    //las const deben ir en MAYUSCULAS PRECIOS
const precios = [
    150,
    55,
    80,
    55,
    100,
    35,
    35
];



function nombreDia(dia){
    if (dia >= 1 && dia <= 7){
        return diaSemana[dia-1]
    }else
        return "dia invalido"; 
}

function leerCadena(titulo) {
    let dato = prompt(titulo)
    if (dato == null || dato == "") {
        alert("Error. Valor incorrecto")
        return null;
    } else
        return dato.toUpperCase()
}
//function leerNombre() {
  //  let nombre = leerCadena('nombre: ')
   //// if (nombre == null)
   //     console.log("Nombre invalido")
    //else
  //      console.log(nombre)

  //  return nombre;
//}
function leerCadena2(titulo) {
    let dato;
    do{
        dato = prompt(titulo)
        if (dato == null || dato == "" ){
            alert("Error. Valor Incorrecto")
        }else
        return dato
    }while(dato == null || dato == "")
}

function leerNumero(titulo) {
    let dato;
    do{
        dato = prompt(titulo)
        if (dato == null || dato == "" ||isNaN(dato) ){
            alert("Error. Valor Incorrecto")
        }else
        return dato
    }while(dato == null || dato == "" || isNaN(dato))
}
function resultados(){
    if(edades.length ==0){
        alert("Debe registrar al menos 1 elemento");
        if (confirm("Desea registrar?"))
        leerDatos()
    }else{
        let acum = 0;
    for (let i=0;i<edades.length;i++)
        acum+=edades[i];

        let promedio = acum/edades.length;
        alert("El promedio de edades es"+promedio.toFixed(2))
    }
    
}
let nombres = [];
let edades = [];

function leerDatos(){
    let nombre = leerCadena2('nombre:')
    let apellido = leerCadena2('Apellido:')
    let edad = leerNumero('Edad:')
    let hijos = leerNumero('Numero de Hijos:')

    nombres.push(nombre)
    edades.push(edad)
    let mensaje = " ";
    for (let i=0; i<7;i++)
        mensaje+=(i+1)+": "+diaSemana[i]+"\n";

    console.log(mensaje)
    let dia = leerNumero("Seleccione el dia: \n"+mensaje);

    if (dia >= 1 && dia <=7){
    console.log("El dia seleccionado es "+nombreDia(dia))
    //Para tener mas espacios a la hora de concadenar \n\n
    console.log("El precio de ese dia es "+precios[dia-1])}

    if(nombre != null)
        console.log(nombre)

    if(apellido != null)
    console.log(apellido)

    if(edad != null)
    console.log(edad)

    if(hijos != null)
    console.log(hijos)
}