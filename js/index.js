let tarifaServicio = 2000
let codigo = " "
let seleccion = " "
let carrito = []

const carritoContenedor = document.querySelector("#carritoContenedor")
const vaciar = document.querySelector("#vaciarCarrito")
const tabla = document.querySelector("tbody")
const subtotal = document.querySelector("#subtotal")
const finalizar = document.querySelector("#procesarCompra")
const alerta = document.querySelector("#alerta")
const totalFinal = document.querySelector("#totalFinal")


document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || []
    visualizarCarrito()

})

function guardarLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

habilitarExcursion()

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
    excursiones.forEach((excursion) => {
        container.innerHTML += maquetarCard(excursion)
    });
} 
completarCard()

const maquetarTabla = (excursion) => {
    return `<tr>
                <td>${excursion.dificultad}</td>
                <td>${excursion.detalle}</td>
                <td>${excursion.duracion}</td>
                <td>$ ${excursion.precio}</td>
           </tr>`
}

const cargarTabla = (carrito) => {
    carrito.forEach((excursion) => {
        tabla.innerHTML += maquetarTabla(excursion)
    })
}

function agregarExcursion(codigo) {
    const existencias = carrito.some(excursion => excursion.codigo === codigo)

    if (existencias) {
        seleccion = carrito.map(excursion => {
            if (excursion.codigo === codigo) {
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
    modal.innerHTML = " "

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

    subtotal.innerHTML = carrito.reduce((acc, excursion) => acc + excursion.precio, 0)

    guardarLocalStorage()
}

function eliminarExcursion(codigo) {
    const descarte = codigo
    carrito = carrito.filter((excursion) => excursion.codigo !== descarte)
    visualizarCarrito()
}

procesarCompra.addEventListener("click", () => {
    if (carrito.length !== 0) {
        cargarTabla(carrito)
        alerta.innerHTML = ``
        alerta.classList.add("disabled")

    } else {
        alerta.innerHTML = `<p>No se puede procesar la compra. Agrega excursiones.</p>`
        alerta.classList.remove("disabled")
    }
    totalFinal.innerText = carrito.reduce((acc, excursion) => acc + excursion.precio + tarifaServicio, 0)
})
