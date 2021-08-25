//INSTANCIO LOS PRODUCTOS
productos.push(new Producto(1, "Camiseta titular", 8500, 1.21));
productos.push(new Producto(2, "Camiseta alternativa", 8500, 1.21));
productos.push(new Producto(3, "Camiseta portero", 8500, 1.21));
productos.push(new Producto(4, "Camiseta de entrenamiento", 6500, 1.21));
productos.push(new Producto(5, "Short kit titular", 5000, 1.21));
productos.push(new Producto(6, "Short kit alternativo", 5000, 1.21));
productos.push(new Producto(7, "Short kit portero", 5000, 1.21));
productos.push(new Producto(8, "Medias kit titular", 2500, 1.21));
productos.push(new Producto(9, "Medias kit alternativo", 2500, 1.21));
productos.push(new Producto(10, "Medias kit portero", 2500, 1.21));

//MUESTRO LOS PRODUCTOS POR CONSOLA PARA VERIFICAR FUNCIONAMIENTO DEL ARRAY
for (let producto of productos){
    console.log(producto)
}

//INTEFAZ JQUERY
productosUIjQuery(productos, "#productosCards");

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
