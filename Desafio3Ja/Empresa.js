'use strict'
var Aruba = 25000;
var México = 45700; 
var Miami = 50000;
var Londres = 140000;
var Suiza =220000;
var cantidad = 0;
var destImpuesto = 5;
var vuelo = 10000;
var ceduDescuentoPar = 1500;
var ceduImpuestoImpar = 3000;
var femenio = 15;
var masculino = 10;
var Monto = 0;
var bono = 0;
var extra = 0;
var valido;
valido = false;
var valido2;
valido2 = false;
    alert("Bienvenido a nuestra agencia de viajes");
    do{
        do{
            var registro = prompt("Desea registrar un pasajero? ingrese la letra en mayusculas [S] para SI o [N] para NO")
            if(registro == null)
            alert("Debe ingresar un dato es obligatorio");
            else
                if(registro.trim().length=="")
                    alert("El registro no debe estar vacio");
                else
                    if(registro=="S"||registro=="N")
                        valido = true;
                        else
                        alert("Solo debe ingresar una letra debe ser en mayusculas [S] para SI o [N] para NO");
               
        }while(valido==false)

        if(registro=="S"){
            leerDestino();
            leerNombre();
            leerCedula();
            leerGenero();
            cantidad = cantidad + 1
            }
        else
            if(registro=="N")
            {alert("El numero de pasajeros ingresados fue "+cantidad);
            alert("La ganancia de la empresa es de "+Monto+" Bs");
            alert("Gracias por seleccionar nuestra empresa de viajes");
            valido2= true;}
            //No se cual es el codigo para poder almacenar y sumar todos los valores en javaScript
            //Por ende no puedo calcular el promedio
            
    }while(valido2==false)     
    

function leerDestino(){
     valido=false;
    do{
        var destino = prompt("Destino  1– Aruba. Precio: 25000bs 2- México. Precio: 45700bs. 3- Miami. Precio: 50000bs. 4– Londres. Precio: 140000bs. 5- Suiza. Precio 220000bs. Ingresar solo el numero :");
        if(destino==null)
            alert("El destino es obligatorio");
        else
            if(isNaN(destino))
                alert("Error.valor numerico invalido");
            else
                if(destino.trim().length==0)
                    alert("Debe ingresar un numero");
                else
                    if(destino=="1"||destino=="2"||destino=="3"||destino=="4"||destino=="5")
                        valido=true;
                    else
                        alert("Solo debe ingresar un numero para el destino");
                    
    }while(valido==false);
    if(destino=="1")
        {Monto = Aruba;
        alert("El monto por seleccionar Aruba es de "+Monto+" Bs");}
    else
    if(destino=="2")
        {Monto = México;
        alert("El monto por seleccionar México es de "+Monto+" Bs");}
    else
    if(destino=="3")
        {Monto = Miami;
        alert("El monto por seleccionar Miami es de "+Monto+" Bs");}
    else
    if(destino=="4")
        {bono= Londres*(destImpuesto/100);
        alert("El Impuesto por seleccionar Londres es de "+bono+" Bs");
        Monto = Londres+bono+vuelo;
        alert("El monto por seleccionar Londres es de "+Monto+" Bs");}
    else
    if(destino=="5")
        {bono= Suiza*(destImpuesto/100);
        alert("El Impuesto por seleccionar Suiza es de "+bono+" Bs");
        Monto = Suiza+bono+vuelo;
        alert("El monto por seleccionar Suiza es de "+Monto+" Bs");}

        console.log(Monto)
}
function leerNombre(){
    valido = false; 
    do{
        var nombre = prompt("Nombre:");
        if(nombre==null)
            alert("El Nombre es obligatorio");
        else
            if(nombre.trim().length=="")
                alert("El nombre no debe estar vacio");
            else
                valido=true;
    }while(valido==false);

}
function leerCedula(){
    valido = false;  
    do{
        var cedula = prompt("Cedula:");
        if(cedula==null)
            alert("La Cedula es obligatoria");
        else
            if(isNaN(cedula))
                alert("Error.valor numerico invalido");
            else
                if(cedula.trim().length==0)
                    alert("Debe ingresar un numero");
                else
                    valido=true;
    }while(valido==false);

    if (cedula%2 == 0)
       {Monto = Monto-ceduDescuentoPar;
        alert("El descuento por tener cedula PAR es de "+ceduDescuentoPar+" Bs");
        alert("El monto por tener cedula PAR es de "+Monto+" Bs");}
        
    else
        {Monto =Monto+ ceduImpuestoImpar;
        alert("El Impuesto por tener cedula IMPAR es de "+ceduImpuestoImpar+" Bs");
        alert("El monto por tener cedula IMPAR es de "+Monto+" Bs");}
        
    console.log("El monto con la cedula es"+Monto);
}

function leerGenero(){
    valido = false;  
    do{
        var genero = prompt("Genero([F]emenino/[M]asculino):");
        if(genero==null)
            alert("El genero es obligatorio");
        else
                if(genero.trim().length=="")
                    alert("Debe ingresar una letra para el genero([F]emenino/[M]asculino) La letra en minusculas ");
                else
                    if(genero=="f"||genero=="m")
                        valido=true;
                    else
                        alert("Solo debe ingresar una letra debe ser en minusculas([F]emenino/[M]asculino)");
                        
    }while(valido==false);

    if(genero=="f")
        {extra = Monto*(femenio/100);
        alert("Por ser de genero Femenino tiene un descuento de "+extra);
        Monto =Monto - extra;
        alert("El monto por tener genero Femenino es de "+Monto+" Bs");}
    else
    if(genero=="m")
        {extra = Monto*(masculino/100);
        alert("Por ser de genero Masculino tiene un descuento de "+extra);
        Monto =Monto - extra;
        alert("El monto por tener genero Masculino es de "+Monto+" Bs");}

    console.log("El monto con su genero es de "+Monto);
    alert("La ganancia de la empresa es de "+Monto+" Bs");
}



