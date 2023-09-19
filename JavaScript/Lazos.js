const ciudades= new Array("Quito","Bogota","Lima","Buenos Aires","La Paz");
const precios=new Array(100,200,300,400,500);
const dinero=300;

let i=0;
//Mientras la condicion sea verdadera funciona caso contrario se termina la instruccion
while(i < ciudades.length && precios[i]<dinero )
{
    i++;
}
if(i==ciudades.length)
    {
        console.log("La ciudad no disponible")

    }else
        {
            console.log("La ciudad destino por el precio es: "+ciudades[i])
        }
