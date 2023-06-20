let codigo = " "
let tarifaServicio = 0.03
let seleccion = " "
let carrito = []

const carritoContenedor = document.querySelector("#carritoContenedor")
const vaciar = document.querySelector("#vaciarCarrito")
const tabla = document.querySelector("tbody")
const subtotal = document.querySelector("#subtotal")
const finalizar = document.querySelector("#procesarCompra")
const iCarrito = document.querySelector("#evento")

document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || []
    visualizarCarrito()
})
  
habilitarExcursion()

iCarrito.addEventListener("onmouseenter", ()=>{
    visualizarCarrito()
} )

function maquetarCard(excursion) {
    return `<div class="col-lg-4 col-md-6 col-sm-6 card">
                <img class="card-img-top img-fluid size" src = "${excursion.imagen}"
             alt="imagen de un sitio turístico">
                <div class="card-body">
                    <h5 class="card-title">${excursion.detalle}</h5>
                    <p class="card-text">${excursion.codigo}</p>
                    <button type="button" onclick="agregarExcursion(${excursion.codigo})" class="btn btn-outline-primary" id= "${excursion.codigo}">agregar</button>
                 </div>
            </div>`
}

function completarCard() {
    //container.innerHTML = " "

    excursiones.forEach((excursion) => {
        container.innerHTML += maquetarCard(excursion)
    });
} completarCard()


const maquetarTabla = (excursion) =>{
    return `<tr>
                <td>${excursion.dificultad}</td>
                <td>${excursion.detalle}</td>
                <td>${excursion.duracion}</td>
                <td>$ ${excursion.precio * tarifaServicio}</td>
           </tr>`
}

function cargarTabla (excursiones){
    tabla.innerHTML = " "
    
    carrito.forEach((excursion) => {
        tabla.innerHTML += maquetarTabla(excursion)
    })
}

function agregarExcursion(codigo) {
    const existencias = carrito.some(excursion => excursion.codigo === codigo)
    
    if(existencias){
        seleccion = carrito.map(excursion => {
            if(excursion.codigo === codigo){
                modalBody.innerHTML = `<p class ="text-center text-warning">Ya seleccionaste esta excursion previamente</p>` 
            }
        })
    } else {
        seleccion = excursiones.find((excursion) => excursion.codigo === codigo)
        carrito.push(seleccion)
        guardarLocalStorage()
    }
    visualizarCarrito()
}

vaciarCarrito.addEventListener("click", () => {
    carrito.length = []
    visualizarCarrito()
})

function visualizarCarrito() {
    const modal = document.querySelector(".modal .modal-body")
    modal.innerHTML =" "
    
    carrito.forEach((excursion) => {
        const { imagen, codigo, nivel, precio } = excursion
        modal.innerHTML += `<div class= "modalContenedor">
                                <img class="img-fluid imgCarrito" src = "${imagen}"
                            alt="imagen de un sitio turístico">
                            <div>
                                <p>${codigo}</p>
                                <p>${nivel}</p>   
                                <p>${precio}</p>
                                <button onclick= "eliminarExcursion(${codigo})" type="button" class="btn btn-outline-danger">ELIMINAR</button>
                            </div> 
                            </div>`

    })
    if (carrito.length === 0) {
        modalBody.innerHTML = `<p class ="text-center text-black alertModal">¡oh oh!,parece que tu carrito está vacío.</p>`
    }
    carritoContenedor.textContent = carrito.length

    subtotal.innerHTML = carrito.reduce ((acc, excursion)=> acc + excursion.precio, 0)

    guardarLocalStorage()
}

function eliminarExcursion(codigo) {
    const descarte = codigo
    carrito = carrito.filter((excursion) => excursion.codigo !== descarte)
    visualizarCarrito()
}

procesarCompra.addEventListener("click", ()=> {
    if(carrito.length === 0){
                            `<div class="alert alert-warning d-flex align-items-center" role="alert">
                                 <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Agrega excursiones para continuar">
                                 <use xlink:href="#exclamation-triangle-fill"/></svg>
                             </div>`
    }else{
        cargarTabla()
    }
})

function procesarCompra(){
    carrito.forEach ((excursion) => {
        const listaCompra = document.querySelector("#listaCompra tbody")
        const {nivel, dificultad, detalle, duracion, precio} = excursion

    })
}

function calcularCostoFinal() {
    let totalFinal = carrito.reduce((acc, excursion) => acc + excursion.precio * tarifaServicio, 0)
   
}
/*
const activarBotones = () =>{
    const botones = document.querySelectorAll("")
    for (boton of botones){
        botones.addEventListener("click", (e)=> {})
    }
}
*/
