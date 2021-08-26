//INSTANCIO LOS PRODUCTOS
productos.push(new Producto(1, "Camiseta titular", categoria[0], 8500, 1.21));
productos.push(new Producto(2, "Camiseta alternativa", categoria[1], 8500, 1.21));
productos.push(new Producto(3, "Camiseta portero", categoria[2], 8500, 1.21));
productos.push(new Producto(4, "Camiseta entrenamiento", categoria[3], 6500, 1.21));
productos.push(new Producto(5, "Short titular", categoria[0], 5000, 1.21));
productos.push(new Producto(6, "Short alternativo", categoria[1], 5000, 1.21));
productos.push(new Producto(7, "Short portero", categoria[2], 5000, 1.21));
productos.push(new Producto(8, "Medias titulares", categoria[0], 2500, 1.21));
productos.push(new Producto(9, "Medias alternativas", categoria[1], 2500, 1.21));
productos.push(new Producto(10, "Medias portero", categoria[2], 2500, 1.21));

//MUESTRO LOS PRODUCTOS POR CONSOLA PARA VERIFICAR FUNCIONAMIENTO DEL ARRAY
for (let producto of productos){
    console.log(producto)
}

//INTEFAZ JQUERY
productosUIjQuery(productos, "#productosCards");

//INTERFAZ JQUERY CHECKBOX
//checkboxUIjQuery(productos, "#filtroCategoria")


//FILTRO CATEGORIAS - CHECKBOX
renderCheckbox(categoria, "#filtroCategoria");
console.log($('#filtroCategoria'))
$('#filtroCategoria')[0].onclick = function(){
    const filtrados = productos.filter(p => p.categoria == this.value);
    productosUIjQuery(filtrados, '#productosCards');
}



/*
//MÉTODO FIND
//ID
let ingresarId = prompt("Ingresa el id del producto: ");
let findTipo = productos.find(producto => producto.id == ingresarId);
if (findTipo != undefined) {
    alert("Producto: " + findTipo.tipo)
} else {
    alert("Búsqueda sin resultados")
}

//MÉTODO FILTER
//VALOR
let ingresarValor = prompt("Ingresá el valor máximo: ");
let filtroValor = productos.filter(producto => producto.valor < ingresarValor);
console.log(filtroValor);
*/
