//FUNCIÓN CONSTRUCTORA
function Producto(id, tipo, valor, iva) {
    this.id = parseInt(id);
    this.tipo = tipo;
    this.valor = parseFloat(valor);
    this.iva = parseFloat(iva);
}
