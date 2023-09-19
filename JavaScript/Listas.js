//Creacion de una lista formal
let ciudades= new Array("Quito","Bogota","Lima","Buenos Aires");
console.log(ciudades);
//Creacion de una lista normal y mejor
let nombres=["Pedro","Juan","Roberto","David"];
console.log(nombres);
//Agregar datos al final de la lista
nombres.push("Enrique");
console.log(nombres);
//Agrega elementos al inicio
ciudades.unshift("La Paz");
console.log(ciudades);
//Posicion de elemento de la lista,inicia desde la posicion 0,1,2,3...n
console.log(ciudades[2]);
//Agregar elementos por posicion y asignacion
nombres.splice(1,2,"Milan","Elian");
console.log(nombres);