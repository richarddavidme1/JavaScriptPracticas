//Creacion de una lista formal
let ciudades= new Array("Quito","Bogota","Lima","Buenos Aires","La Paz");
console.log(ciudades);
//Creacion de una lista normal y mejor
let nombres=["Pedro","Juan","Roberto","David","Milan","Elian"];
console.log(nombres);
//Elementos de una lista
console.log("El numero de elementos de la lista es: "+nombres.length);
//Eliminar el primer elemento de la lista
console.log(ciudades.shift());
console.log(ciudades);
//Eliminar el ultimo elemento de la lista
console.log(nombres.pop());
console.log(nombres);
//filtro de una lista espacion de memoria asignacion comparacion
let filtro=ciudades.filter((e)=>e =="Asuncion");
console.log(filtro);
//filtro de datos mayor a los 5 caracteres
let filtro1=ciudades.filter((e1)=>e1.length > 5);
console.log(filtro1);
//Ordena la lista de forma alfabetica
console.log(nombres.sort());
//Posicion del elemento
console.log(nombres.indexOf("Milan"));
