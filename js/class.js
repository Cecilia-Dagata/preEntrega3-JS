class Excursion {
  constructor(imagen, tematica, codigo, nivel, dificultad, detalle, duracion, cantidad, precio) {
    this.imagen = imagen
    this.tematica = tematica
    this.codigo = codigo
    this.nivel = nivel
    this.dificultad = dificultad
    this.detalle = detalle
    this.duracion = duracion
    this.cantidad = cantidad
    this.precio = precio
  }
  precioPorCantidad = function (precio) {
    return this.precio * this.cantidad
  }
}








