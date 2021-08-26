//FUNCIÓN CONSTRUCTORA
function Producto(id, tipo, categoria, valor, iva) {
    this.id = parseInt(id);
    this.tipo = tipo;
    this.categoria = categoria;
    this.valor = parseFloat(valor);
    this.iva = parseFloat(iva);
}
