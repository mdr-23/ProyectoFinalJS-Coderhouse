//NTERFAZ DE PRODUCTOS CON JQUERY
function productosUIjQuery(productos, id){
    $(id).empty()
    for(const producto of productos){
        $(id).append(`<div class="card mx-2" style="width: 18rem;">
                        <img src="" class="card-img-top mt-2" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${(producto.tipo)}</h5>
                          <p class="card-text">${('$ ' + producto.valor*producto.iva)}</p>
                          <a href="#" id='${producto.id}' class="btn btn-primary btn-compra">Comprar</a>
                        </div>
                      </div>`)
    }
}

//INTERFAZ DE CHECKBOX CON JQUERY
function checkboxUIjQuery(categoria, id){
  $(id).empty()
  for(const categorias of categoria){
      $(id).append(`<ul class="list-group">
      <li class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
        ${(categoria[0])}
      </li>
    </ul>`)
  }
}

//COMPRA DE PRODUCTOS
function comprar(e){
  //PREVENIR REFRESCO AL PRESIONAR ENLACES
  e.preventDefault();
  //OBTENER ID DEL BOTON PRESIONADO
  const idProducto   = e.target.id;
  //BUSCAR PRIMERO EL OBJETO EN EL CARRITO (SI FUE SELECCIONADO);
  const seleccionado = carrito.find(p => p.id == idProducto);
  //SI NO SE ENCONTRO BUSCAR EN ARRAY DE PRODUCTOS
  if(seleccionado == undefined){
    carrito.push(productos.find(p => p.id == idProducto));
  }else{
    //SI SE ENCONTRO AGREGAR UN CANTIDAD
    seleccionado.agregarCantidad(1);
  }
 
  //GUARDAR EN STORAGE
  localStorage.setItem("CARRITO",JSON.stringify(carrito));
  //GENERAR SALID PRODUCTO
  carritoUI(carrito);
}

//INTERFAZ DEL CARRITO
function carritoUI(productos){
  //CAMBIAR INTERIOR DEL INDICADOR DE CANTIDAD DE PRODUCTOS;
  $('#carritoCantidad').html(productos.length);
  //VACIAR EL INTERIOR DEL CUERPO DEL CARRITO;
  $('#carritoProductos').empty();
  for (const producto of productos) {
    $('#carritoProductos').append(registroCarrito(producto));
  }

  //EVENTOS CLICK BOTONES DEL CARRITO
$('.btn-delete').on('click', eliminar);
$('.btn-add').click(addCantidad);
$('.btn-sub').click(subCantidad);
}



//FUNCION PARA GENERAR LA ESTRUCTURA DEL REGISTO HTML
function registroCarrito(producto){
  return `<p> ${producto.tipo} 
  <span class="badge bg-warning">$ ${producto.valor}</span>
  <span class="badge bg-warning">${producto.cantidad}</span>
  <span class="badge bg-success">$ ${producto.subtotal()}</span>
  <a id="${producto.id}" class="btn btn-info btn-add">+</a>
  <a id="${producto.id}" class="btn btn-warning btn-sub">-</a>
  <a id="${producto.id}" class="btn btn-danger btn-delete">x</a>
  </p>`
}



function eliminar(e){
  console.log(e.target.id);
  //PRIMER FORMA DE ELIMINAR (SI CARRITO NO ES CONSTANTE) -> FILTER
  //carrito = carrito.filter(producto => producto.id != e.target.id);
  //SEGUNDA FORMA DE ELIMINAR  -> RECORTANDO EL ARRAY CON SPLICE
  let posicion = carrito.findIndex(p => p.id == e.target.id);
  carrito.splice(posicion, 1);
  console.log(carrito);
  //GENERAR NUEVAMENTE INTERFAZ
  carritoUI(carrito);
  //GUARDAR EN STORAGE EL NUEVO CARRITO
  localStorage.setItem("Carrito",JSON.stringify(carrito));
}
//MANEJADOR PARA AGREGAR CANTIDAD CANTIDAD
function addCantidad(){
  let producto = carrito.find(p => p.id == this.id);
  producto.agregarCantidad(1);
  $(this).parent().children()[1].innerHTML = producto.cantidad;
  $(this).parent().children()[2].innerHTML = producto.subtotal();
  //GUARDAR EN STORAGE
  localStorage.setItem("Carrito",JSON.stringify(carrito));
}
//MANEJADOR PARA RESTAR CANTIDAD
function subCantidad(){
  let producto = carrito.find(p => p.id == this.id);
  if(producto.cantidad > 1){
    producto.agregarCantidad(-1);
    //$(this).parent().children()[1].innerHTML = producto.cantidad;
    let registroUI = $(this).parent().children();
    registroUI[1].innerHTML = producto.cantidad;
    registroUI[2].innerHTML = producto.subtotal();
    //GUARDAR EN STORAGE
    localStorage.setItem("Carrito",JSON.stringify(carrito));
  }
}

//FUNCION RENDER SELECT
function renderCheckbox(lista, id){
  //VACIAR EL CONTENIDO DE LA LISTA
  $(id).empty();
  //GENERAMOS UN OPTION POR CADA ELEMENTO DE LA LISTA
  for (const item of lista) {
    $(id).append(`<option value='${item}'>${item}</option>`);
  }
}