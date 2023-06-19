let codigo = " "
let tarifaServicio = 0.03
const carritoContenedor = document.querySelector("#carritoContenedor")
const vaciar = document.querySelector("#vaciarCarrito")
const procesar = document.querySelector("#procesarCompra")
const search = document.querySelector("input#search")


document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || []
    visualizarCarrito()
})

habilitarExcursion()

function maquetarCard(excursion) {
    return `<div class="col-lg-4 col-md-6 col-sm-6 card">
                <img class="card-img-top img-fluid size" src = "${excursion.imagen}"
             alt="imagen de un sitio turístico">
                <div class="card-body">
                    <h5 class="card-title">${excursion.detalle}</h5>
                    <p class="card-text">${excursion.codigo}</p>
                    <button onclick="agregarExcursion(${excursion.codigo})" type="button" class="btn btn-outline-primary" id= "${excursion.codigo}">agregar</button>
                </div>
            </div>`
}

function completarCard() {
    //container.innerHTML = " "

    excursiones.forEach((excursion) => {
        container.innerHTML += maquetarCard(excursion)
    });
} completarCard()

/*function filtrarPrecios() {
    let precioIngresado = parseInt(prompt("Ingresa un valor para conocer las excursiones disponibles"))

    const rangoUno = excursiones.filter(excursion => excursion.precio > 0 && excursion.precio <= 30000) === precioIngresado;
    console.table(rangoUno)
    const rangoDos = excursiones.filter(excursion => excursion.precio > 31000 && excursion.precio <= 70000 === precioIngresado);
    console.table(rangoDos)
    const rangoTres = excursiones.filter(excursion => excursion.precio > 71000 && excursion.precio <= 100000 === precioIngresado);
    console.table(rangoTres)
}
 filtrarPrecios()*/


function filtrarTematica() {
    let opcionesPorTematica = excursiones.filter((excursion) => excursion.tematica.toLowerCase().includes(search.value.trim().toLowerCase()))

    if (opcionesPorTematica.length === 0) {
        filtrarTematica()
    } else {
        completarCard(opcionesPorTematica)
    } return (opcionesPorTematica)
}
search.addEventListener("search", filtrarTematica)


function buscarExcursion(codigo) {
    // codigoIngresado = parseInt(prompt("Ingresa el código de una excursión"))
    codigo = excursiones.find((excursion) => excursion.codigo === parseInt(codigo))

    if (codigo === undefined) {
        console.error("El código ingresado no es válido. Reinténtelo.")
    } else {
        console.log(codigo)
    } return codigo
}

function agregarExcursion(codigo) {
   const existencias = carrito.some(excursion.codigo === codigo)

    if(existencias){
        const excursion = carrito.map(excursion => {
            if(excursion.codigo === codigo)
            modalBody.innerHTML = `<p class ="text-center text-warning">Ya seleccionaste esta excursion previamente</p>`
        })
    }else{
        let excursionSeleccionada = excursiones.find((excursion) => excursion.codigo === codigo)
        carrito.push(excursionSeleccionada)
    }
    
    visualizarCarrito()
}

vaciarCarrito.addEventListener("click", () => {
    carrito.length = []
    visualizarCarrito()
})

function visualizarCarrito() {
    const modal = document.querySelector(".modal .modal-body")

    carrito.forEach((excursion) => {
        const { imagen, tematica, codigo, nivel, dificultad, detalle, duracion, precio } = excursion
        modal.innerHTML += `<div class= "modal-contenedor">
                            </div>
                            <img class="img-fluid i-carrito" src = "${imagen}"
                            alt="imagen de un sitio turístico">
                            <div>
                                <p>${detalle}</p>
                                <p>${precio}</p>
                                <button onclick= "eliminarExcursion(${codigo})" type="button" class="btn btn-outline-danger">eliminar</button>
                            </div>`
    })
    if (carrito.length === 0) {
        modalBody.innerHTML = `<p class ="text-center text-primary">Agrega excursiones a tu carrito</p>`
    }

    carritoContenedor.textContent = carrito.length
    guardarEnLocalS()
}

function eliminarExcursion(codigo) {
    const excursionEliminada = codigo
    carrito = carrito.filter((excursion) => excursion.codigo !== excursionEliminada)
    visualizarCarrito()
}

function guardarEnLocalS() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


function calcularCosto() {
    let totalFinal = carrito.reduce((acc, excursion) => acc + excursion.precio * tarifaServicio, 0)
   
}

procesarCompra.addEventListener("click", ()=> {
    if(carrito.length === 0){
                            `<div class="alert alert-warning d-flex align-items-center" role="alert">
                                 <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Tu carrito esta vacio">
                                 <use xlink:href="#exclamation-triangle-fill"/></svg>
                             </div>`
    }else{
        location.href = "checkout.html"
    }
})

function procesarCompra(){
    carrito.forEach ((excursion) => {
        const listaCompra = document.querySelector("#listaCompra tbody")
        

    })
}

function maquetarCheckOut(excursion) {
    const tableBody = document.querySelector("tbody")
    return `<tr>
        <td>${excursion.nivel}</td>
        <td>${excursion.dificultad}</td>
        <td>${excursion.detalle}</td>
        <td>${excursion.duracion}</td>
        <td>${excursion.precio}</td>
        
</tr>`
}