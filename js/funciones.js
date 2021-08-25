//NTERFAZ DE PRODUCTOS CON JQUERY
function productosUIjQuery(productos, id){
    $(id).empty()
    for(const producto of productos){
        $(id).append(`<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${(producto.nombre)}</h5>
          <p class="card-text">${(producto.precio)}</p>
          <a href="#" id='${producto.id}' class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`)
    }
}