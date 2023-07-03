const icono = document.querySelector("#iconoCompra")
const barra = document.querySelector("#buscarTematicas")
const contenedorCards = document.querySelector("#contenedorCards")
const contenedorCarrito = document.querySelector("#contenedorCarrito")
const botonesAgregar = document.querySelectorAll(".btn.btn-outline-primary.agregar")
const vaciar = document.querySelector("#vaciarCarrito")
const tabla = document.querySelector("tbody")
const subtotal = document.querySelector("#subtotal")
const finalizar = document.querySelector("#procesarCompra")
const totalFinal = document.querySelector("#totalFinal")
const alerta = document.querySelector("#alerta")


document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || []
    visualizarCarrito()
})

function guardarLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function maquetarCard(excursion) {
    return `<div class="col-lg-4 col-md-6 col-sm-6 card">
                <img class="card-img-top img-fluid" src="${excursion.imagen}"
             alt="imagen de un lugar turístico">
                <div class="card-body">
                    <h5 class="card-title">${excursion.detalle}</h5>    
                    <button class="btn btn-outline-primary agregar" id="${excursion.codigo}">AGREGAR</button>
                 </div>
            </div>`
}

function mostrarCard(array) {
    array.forEach((excursion) => {
        contenedorCards.innerHTML += maquetarCard(excursion)
    });
}

function traerExcursiones() {
    fetch(url)
        .then((respuesta) => respuesta.ok ? respuesta.json() : Promise.reject(respuesta))
        .then((datos) => excursiones.push(...datos))
        .then(() => mostrarCard(excursiones))
        .catch(() => mensaje("error", "Información no disponible", "Vuelve a intentarlo en unos minutos"))
}
traerExcursiones()

/*barra.addEventListener("input", (e) => {
    contenedorCards.innerHTML = ""

    ingreso = e.currentTarget.value
    let resultado = excursiones.filter((excursion) => excursion.tematica.toLowerCase().includes(ingreso.toLowerCase()))

    if (resultado.lenght > 0) {
        mostrarCard(resultado)
    } else {
        mensaje("warning", "No hay coincidencias para mostrar", "Revisa las temáticas disponibles")
    }
})*/

const maquetarTabla = (excursion) => {
    return `<tr>
                <td>${excursion.dificultad}</td>
                <td>${excursion.detalle}</td>
                <td>${excursion.duracion}</td>
                <td>$ ${excursion.precio}</td>
           </tr>`
}

const mostrarTabla = (carrito) => {
    carrito.forEach((excursion) => {
        tabla.innerHTML += maquetarTabla(excursion)
    })
}

function visualizarCarrito() {
    const modal = document.querySelector(".modal .modal-body")
    modal.innerHTML = " "

    carrito.forEach((excursion) => {
        modal.innerHTML += `<div class= "modalContenedor">
                                <img class="img-fluid imgCarrito" src =${excursion.imagen}
                            alt="imagen de un sitio turístico">
                            <div>
                                <p>${excursion.precio}</p> 
                                <button type="button" class="btn btn-outline-danger eliminar">ELIMINAR(${excursion.codigo})</button>
                            </div> 
                            </div>`
    })
    if (carrito.length === 0) {
        modalBody.innerHTML = `<p class ="text-center text-black alertModal">¡oh oh!,parece que tu carrito está vacío.</p>`
    }
    icono.textContent = carrito.length

    subtotal.innerHTML = carrito.reduce((acc, excursion) => acc + excursion.precio, 0)
    guardarLocalStorage()
}

function mensaje(icon, title, text) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        //footer: '<a href="#excursiones">Continuar</a>'
    })
}

botonesAgregar.forEach(boton => {
    boton.addEventListener("click", () => {
        seleccion = excursiones.find((excursion) => excursion.codigo === codigo)

        carrito.push(seleccion)
        guardarLocalStorage()
        visualizarCarrito()
    })
})

function eliminarExcursion(codigo) {
    const descarte = codigo
    carrito = carrito.filter((excursion) => excursion.codigo !== descarte)
    visualizarCarrito()
}

vaciarCarrito.addEventListener("click", () => {
    carrito.length = []
    visualizarCarrito()
})

procesarCompra.addEventListener("click", () => {
    if (carrito.length !== 0) {
        mostrarTabla(carrito)
        alerta.innerHTML = ``
        alerta.classList.add("disabled")

    } else {
        mensaje("warning", "No hay información disponible", "Agrega excursiones antes de procesar tu compra")
    }
    totalFinal.innerText = carrito.reduce((acc, excursion) => acc + excursion.precio + tarifaServicio, 0)

})
