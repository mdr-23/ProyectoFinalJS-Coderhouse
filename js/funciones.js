//NTERFAZ DE PRODUCTOS CON JQUERY
function productosUIjQuery(productos, id){
    $(id).empty()
    for(const producto of productos){
        $(id).append(`<div class="card mx-2" style="width: 18rem;">
        <img src="..." class="card-img-top mt-2" alt="...">
        <div class="card-body">
          <h5 class="card-title">${(producto.tipo)}</h5>
          <p class="card-text">${('$ ' + producto.valor*producto.iva)}</p>
          <a href="#" id='${producto.id}' class="btn btn-primary">Comprar</a>
        </div>
      </div>`)
    }
}

/*INTERFAZ DE CHECKBOX CON JQUERY
function checkboxUIjQuery(categoria, id){
  for(const producto of categoria){
      $(id).append(`<ul class="list-group">
      <li class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
        ${(producto.categoria)}
      </li>
    </ul>`)
  }
}*/

//FUNCION RENDER SELECT
function renderCheckbox(lista, id){
  //VACIAR EL CONTENIDO DE LA LISTA
  $(id).empty();
  //GENERAMOS UN OPTION POR CADA ELEMENTO DE LA LISTA
  for (const item of lista) {
    $(id).append(`<option value='${item}'>${item}</option>`);
  }
}