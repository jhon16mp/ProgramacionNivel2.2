'use strict'
//OBJETIVO 1
function leerCadena(){
    let valido = false; 
   // do{
    do{
        let nombre = prompt("Nombre del cliente :");
        if(nombre==null)
            alert("El Nombre es obligatorio");
        else
            if(nombre.trim().length=="")
                alert("El nombre no debe estar vacio");
            else
                if(isNaN(nombre))
                {
                    valido=true;
                    return nombre.toUpperCase()                    
                     }
                else
                    alert("Solo puede ingresar letras")
    }while(valido==false);      
   // valido = false;
   // buscarCliente(nombre);
//}while(valido ==false)
}

function leerFloat(){
    let dato;   
    
    do{
        dato = prompt("Ingrese el monto de la factura del cliente :")
        if (dato == null || dato == "" ||isNaN(dato) || dato <=0 ){
            alert("Error. Valor Incorrecto")
        }else
        {
            
        return dato

        }
    }while(dato == null || dato == "" || isNaN(dato) || dato <=0 )
    
}

function leerFactura(){
    
    let nombre = leerCadena();
    let dato= leerFloat();
    nombres.push(nombre)
    montos.push(dato)
    
}
//Objetivo 5
function leerTotal(nombres,montos){
    let acum = 0;
    for (let i=0;i<montos.length;i++)
        acum+=montos[i];

        let promedio = montos.length/acum;
        alert("El promedio de montos es : "+promedio.toFixed(2))
        console.log("El promedio de montos es : "+promedio.toFixed(2))

        let total = 0;
        for (let i=0;i<montos.length;i++)
        total+=parseInt(montos[i]);
        alert("El el total de los montos es : "+total)
        console.log("El el total de los montos es : "+total)

        let mensaje = " ";
        for (let j = 0; j < montos.length; j++) {
            mensaje+=(j+1)+" Cliente :"+nombres[j]+" monto : "+montos[j]+"\n";
            alert(mensaje)
            console.log(mensaje)
        }
}