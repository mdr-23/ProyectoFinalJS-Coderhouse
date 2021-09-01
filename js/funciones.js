//NTERFAZ DE PRODUCTOS CON JQUERY
function productosUIjQuery(productos, id){
    $(id).empty()
    for(const producto of productos){
        $(id).append(`<div class="card mx-2" style="width: 18rem;">
        <img src="..." class="card-img-top mt-2" alt="...">
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
  //OBTENER OBJETO DEL PRODUCTO CORRESPONDIENTE AL ID
  const seleccionado = productos.find(p => p.id == idProducto);
  carrito.push(seleccionado);
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
}

//FUNCION PARA GENERAR LA ESTRUCTURA DEL REGISTO HTML
function registroCarrito(producto){
  return `<p> ${producto.nombre} <span class="badge badge-warning">$ ${producto.precio}</span></p>`
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