var productos = [{
	nombre: "pijama",
	tipo: "ropa"
},
{
	nombre: "nevera",
	tipo: "electrodomestico"
},
{
	nombre: "asus",
	tipo: "computador"	
},
{
	nombre: "macbook",
	tipo: "computador"	
},
{
	nombre: "pijama",
	tipo: "ropa"	
},
{
	nombre: "toshiba",
	tipo: "computador"
}
];

//arreglo de objetos sobre productos
var computador = [];
for(var i=0; i< productos.length; i++){
	if(productos[i].tipo === "computador"){
		computador.push(productos[i]);
	}
}

//con metodo filter
var computador = productos.filter(function(producto){
	return producto.tipo === "computador";
});