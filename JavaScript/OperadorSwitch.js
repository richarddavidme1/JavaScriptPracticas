let ciudades= new Array("Quito","Bogota","Lima","Buenos Aires","La Paz");
let nombres=["Pedro","Juan","Roberto","David","Milan","Elian"];

let destino="Buenos Aires"

console.log(`El destino es ${destino}`);

switch(destino)
{
    case "Quito":
        {
            console.log("Pasaje 200 dolares");
            break;
        }
    case "Bogota":
        {
            console.log("Pasaje 400 dolares");
            break;
        }
    case "Lima":
        {
            console.log("Pasaje 600 dolares");
            break;
        }
    case "Buenos Aires":
        {
            console.log("Pasaje 800 dolares");
            break;
        }
    case "La Paz":
        {
            console.log("Pasaje 1000 dolares");
            break;
        }
    default:
        {
            console.log("Fuera de rango");
            break;  
        }
}