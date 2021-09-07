// Preloader
/*   $(window).on('load', function() {
    if ($('#loading').length) {
      $('#loading').delay(100).fadeOut('slow', function() {
        $('#loading').remove();
      });
    }
  }); */

//FUNCION QUE SE EJECUTA CUANDO SE CARGA EL DOM
$(document).ready(function () {
    //console.log(localStorage.getItem("CARRITO"));
    if("Carrito" in localStorage){
        const arrayLiterales = JSON.parse(localStorage.getItem("Carrito"));
        for (const literal of arrayLiterales) {
            carrito.push(new Producto(literal.id, literal.tipo, literal.categoria, literal.valor, literal.iva, literal.cantidad));
        }
        console.log(carrito);
        carritoUI(carrito);
    }

    $(".dropdown-menu").click(function (e) { 
        e.stopPropagation();
    });
});

//FUNCION QUE SE EJECUTA CUANDO SE CARGA TODA LAS IMAGENES DE LA APLICACION
window.addEventListener('load',()=>{
    $('#loading').delay(400).fadeOut('slow', ()=>{console.log('ELIMINAR SPINNER')});
    //FADE IN PARA MOSTRAR EL CUERPO DE LA PAGINA
    $('#cuerpo').delay(800).fadeIn("slow",()=>{ console.log('BODY CARGADO')});
    //OCULTAR ELEMENTO CON UN FADE
    //$('#productosCards').fadeOut(600);
})

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

// INTERFAZ JQUERY CHECKBOX
checkboxUIjQuery(categoria, "#filtroCategoria")

//BOTONES
$('.btn-compra').on("click", comprar);

/*FILTRO CATEGORIAS - CHECKBOX
renderCheckbox(categoria, "#filtroCategoria");
console.log($('#filtroCategoria'))
$('#filtroCategoria')[0].onclick = function(){
    const filtrados = productos.filter(p => p.categoria == this.value);
    productosUIjQuery(filtrados, '#productosCards');
}*/

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
