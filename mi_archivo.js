
//Algoritmo Condicional//
let nombreIngresado = prompt( "ingresar nombre");

let apellidoIngresado = prompt ("ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("nombre: "+nombreIngresado +"\napellido: "+apellidoIngresado +"\n¡¡¡bienvenidos a nuestro sitio web!!!");
}else{
    alert ("Error: ingresar nombre y apellido");
}
console.log ( 'bienvenidos a nuestro sitio')


//Algoritmo Ciclo//
let entrada = prompt('ingrese codigo de usuario: ');
let codigo = '';
let mensaje = '';

switch (parseInt(entrada)){
    case 10:
        codigo = 'Hola Miguel';
        break;
    case 9:
        codigo = 'Hola Rosa';
        break;
    case 8:
         codigo = 'Hola Gonzalo';
        break;
    case 7:
         codigo = 'Hola Lucas';
        break;
    case 6:
        codigo = 'Hola Romina';
        break;
    case 5:
         codigo = 'Hola Celeste';
         break;
    case 4:
        codigo = 'Hola Mauro';
        break;   
    case 3:
        codigo = 'Hola Luis';
        break; 
    case 2:
        codigo = 'Hola Ariel';
        break; 
    case 1:
         codigo = 'Hola Uriel';
         break;
    default:
         mensaje = 'Usuario Incorrecto';    
}

if(codigo){
    alert(codigo)
} else{
    alert (mensaje)
}