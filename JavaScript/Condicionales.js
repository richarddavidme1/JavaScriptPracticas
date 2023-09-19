let ciudades= new Array("Quito","Bogota","Lima","Buenos Aires","La Paz");
let nombres=["Pedro","Juan","Roberto","David","Milan","Elian"];

let destino="Lima"

if(ciudades.indexOf(destino)==0)
{
    console.log("Vuelo disponible");
}
else if (ciudades.indexOf(destino) == 1)
{
    console.log("Vuelo directo");
}
else if (ciudades.indexOf(destino) == 2)
{
    console.log("Vuelo en espera");
}
else
{
    console.log("Vuelo no disponible");
}