let codigo = " "
let tarifaServicio = 0.03

habilitarExcursion()

function iniciarProceso(fn) {
    fn()
}

function ingresarEmail() {
    let emailIngresado = prompt("Ingresa un e-mail de contacto")
    if (emailIngresado.trim().toLowerCase() !== " " && emailIngresado.includes("@")) {
        alert("Una vez realizada la compra te enviaremos: \n -factura con el detalle de la misma \n -horarios y toda la información necesaria para tus viajes a " + emailIngresado)
    } else {
        console.warn("No pudimos validar el email ingresado. Reinténtalo.")
        emailIngresado()
    } return
}

function comprobarEdad() {
    let edadIngresada = parseInt(prompt("Indica tu edad para poder comenzar con el proceso."))

    if (edadIngresada >= 18) {
        ingresarEmail()
    } else {
        console.warn("Lo sentimos, para realizar cualquiera de los tours debes ser mayor de 18 años.")
    }
}
// iniciarProceso(comprobarEdad)

alert("Busca entre las excursiones disponibles aquellas que se ajustan a la temática de tu interés")

function filtrarTematica() {
    let tematicaIngresada = (prompt("Ingresa el nombre de la temática"))
    let tematicaCoincidente = excursiones.filter((excursion) => excursion.tematica.toLowerCase().includes(tematicaIngresada.toLowerCase()))

    if (tematicaIngresada.length === 0) {
        console.error("Por favor, ingresa una temática válida")
        filtrarTematica()
    } else {
        console.table(tematicaCoincidente)
    } return (tematicaCoincidente)
}
// filtrarTematica()


function discriminarEnArray() {
    const resumen = excursiones.map((excursion) => {
        return {
            codigo: excursion.codigo,
            detalle: excursion.detalle,
            precio: excursion.precio,
            // tarifaServicio: excursion.precio * 0.03,
            // importeCompuesto: excursion.precio + excursion.precio * 0.03
        }
    })
    console.table(resumen)
}

function filtrarPrecios() {
    let precioIngresado = parseInt(prompt("Ingresa un valor para conocer las excursiones disponibles"))

    const rangoUno = excursiones.filter(excursion => excursion.precio > 0 && excursion.precio <= 30000) === precioIngresado;
    console.table(rangoUno)
    const rangoDos = excursiones.filter(excursion => excursion.precio > 31000 && excursion.precio <= 70000 === precioIngresado);
    console.table(rangoDos)
    const rangoTres = excursiones.filter(excursion => excursion.precio > 71000 && excursion.precio <= 100000 === precioIngresado);
    console.table(rangoTres)
}
// filtrarPrecios()


alert("Elige tus excursiones -máx. 5-")

function buscarExcursion(codigo) {
    // codigoIngresado = parseInt(prompt("Ingresa el código de una excursión"))
    codigo = excursiones.find((excursion) => excursion.codigo === parseInt(codigo))

    if (codigo === undefined) {
        console.error("El código ingresado no es válido. Reinténtelo.")
    } else {
        console.log(codigo)
    } return codigo
}

debugger
function agregarExcursion() {
    codigo = parseInt(prompt("Ingresa el código de una excursión"))
    let excursionSeleccionada = buscarExcursion(codigo)

    if (excursionSeleccionada !== undefined) {
        carrito.push(excursionSeleccionada)
        let continuar = confirm("¿Deseas agregar más elementos a tu selección?")
        if (continuar === true) {
            seleccionarExcursion()
        } else {
          cerrarCompra()
        }
    } else {
        alert("El código ingresado no es válido.")
    }
}
agregarExcursion()

function revisarCarrito() {
    console.log(carrito.length)
}

function visualizarCarrito() {
    console.table(carrito)
}
/*
function contabilizarViajeros() {
    let cantidadViajeros = parseInt(prompt("Ingresa la cantidad de personas que desean realizar el tour"))

    if (cantidadViajeros != 0 && cantidadViajeros <= 9) {
        console.log("El cálculo de los costos del viaje se hará para: " + cantidadViajeros + " " + "personas")
    } else if (cantidadViajeros != 0 && cantidadViajeros >= 10) {
        console.log("El cálculo de los costos del viaje se hará para: " + cantidadViajeros + " " + "personas")
    } else {
        console.error("La cantidad ingresada no puede ser menor a 1 persona. Reintentalo.")
    } return cantidadViajeros
}
 cantidadViajeros = contabilizarViajeros()

*/
function cerrarCompra() {
    let totalFinal = carrito.reduce((acc, excursion) => acc + excursion.precio, 0)
    console.log("El importe a pagar por tu paquete de viaje es de: $" + totalFinal)

}



/*
function calcularCostoCombinado(importeParcial, descuento, fn) {
    let resultante = importeParcial * descuento
    fn(resultante)
}


function cerrarCompra (){
    let totalFinal = changuito.reduce((acc, costo)=> acc + costo.importeCompuesto, 0)
    
    console.log(costos.importeCompuesto)
    console.log("El importe a pagar por tu paquete de viaje es de: $" + totalFinal)
}
cerrarCompra()

function visualizarChanguito (){
    console.table(changuito)
}
visualizarChanguito()



if (carrito.some === excursionElegida) {
        console.warn("La excursión elegida ya ha sido agregada, por favor seleccione otra")
    } else {
        
    }

    function iniciarCompra() {
    let confirmarInicio = confirm("Bienvenid@. Para realizar cualquiera de los tours debes ser mayor de 18 años, ¿continuar?")
    if (confirmarInicio) {
        ingresarEmail()
    } else {
        console.log("Para mayor información utiliza la sección de contacto")
        return
    }
}
iniciarCompra()


function iniciarProceso(fn){
    fn()
}

function comprobarEdad (){
    let edadUsuario = parseInt(prompt("Indica tu edad para poder comenzar con el proceso."))
    if (edadUsuario >= 18){
        ingresarEmail()
    }else{
        console.warn("Para realizar cualquiera de los tours debes ser mayor de 18 años.")
        return
    }
}
iniciarProceso(comprobarEdad)

function ingresarEmail() {
    let userEmail = prompt("Ingresa un e-mail de contacto")
    if (userEmail.trim().toLowerCase() != " " && userEmail.includes("@")) {
        alert("Una vez realizada la compra te enviaremos: \n -factura con el detalle de la misma \n -horarios y toda la información necesaria para tus viajes")
    } else {
        console.warn("No pudimos validar el email ingresado. Reinténtalo.")
        ingresarEmail()
    } return userEmail
}

alert("A continuación te mostramos información resumida sobre los paquetes disponibles")

function mostrarPaquetes() {
    paquetes.forEach((paquete) => {
        console.log("CÓDIGO " + " " + paquete.codigo)
        console.log("TEMÁTICA " + " " + paquete.tematica)
        console.log("IMPORTE " + " " + paquete.importe)
    })
}
mostrarPaquetes()

alert("Busca un paquete que te interese para poder ver las excursiones que incluye")

function buscarPaquetes(codigo) {
    let ingresoCodigo = parseInt(prompt("Ingresa el código de una temática"))
    let resultadoPaquetes = paquetes.find((paquete) => paquete.codigo === ingresoCodigo)
    console.table(resultadoPaquetes.detalle)
}
buscarPaquetes()

alert("Puedes sumar a tu paquete básico hasta (2) dos excursiones de alto riesgo.")

function filtrarExcursion() {
    let ingresoTematica = prompt("Ingresa con palabras la temática elegida para encontrar excursiones relacionadas")
    let resultadoExcursiones = excursiones.filter((excursion) => excursiones.tematica.toLowerCase().includes(ingresoTematica.toLowerCase()))

    if (resultadoExcursiones.length === 0) {
        console.error("No ha ingresado una temática válida")
    } else {
        console.table(resultadoExcursiones)
    }
}
filtrarExcursion()



function contabilizarViajeros() {
    let cantidadViajeros = parseInt(prompt("Ingresa la cantidad de personas que desean realizar el tour"))

    if (cantidadViajeros != 0 && cantidadViajeros <= 9) {
        console.log("Se registra solicitud de hospedaje para: " + cantidadViajeros + " " + "personas")
    } else if (cantidadViajeros != 0 && cantidadViajeros >= 10) {
        console.log("Se registra solicitud de hospedaje para: " + cantidadViajeros + " " + "personas")
    } else {
        console.error("La cantidad ingresada no puede ser menor a 1 persona. Reintentalo.")
    } return cantidadViajeros
}
cantidadViajeros = contabilizarViajeros()

function definirTraslados() {
    let gastoCompuesto = parseInt(prompt("Ingresa el monto máximo para gastos de: \n -pasajes, \n -traslados \n -entradas generales"))

    switch (gastoCompuesto) {
        case 35000:
            console.log("Has optado por pasajes de tarifa Economic")
            break
        case 90000:
            console.log("Has optado por pasajes de tarifa Standard")
            break
        case 120000:
            console.log("Has optado por pasajes de tarifa Premium")
            break
        default:
            console.warn("El valor ingresado no corresponde a ningún máximo establecido. Ten presente no incluir caracteres especiales")
            break
    }return gastoCompuesto
}
gastoCompuesto = definirTraslados()

function definirHospedaje() {
    let gastoHospedaje = parseInt(prompt("Ingresa el monto máximo para gastos de: \n -hospedaje"))

    switch (gastoHospedaje) {
        case 80000:
            console.log("Has optado por modalidad de hospedaje Economic")
            break
        case 160000:
            console.log("Has optado por modalidad de hospedaje Standard")
            break
        case 240000:
            console.log("Has optado por modalidad de hospedaje Premium")
            break
        default:
            console.error("El valor ingresado no corresponde a ningún máximo establecido. Ten presente no incluir caracteres especiales")
            break
    }return gastoHospedaje
}
gastoHospedaje = definirHospedaje()

//no tiene en cuenta el precio de los paquetes y el cargo por excursiones -si las hubiere- pendiente de resolución
function calcularCostoParcial() {
    let costoParcial = parseInt((gastoCompuesto + gastoHospedaje) * cantidadViajeros)

    console.log("El costo parcial de tu paquete de viaje para" + " " + cantidadViajeros + " " + "personas es $ " + costoParcial + "pesos")
}
costoParcial = calcularCostoParcial

function agradecerCompra() {
    console.log("Tu pago quedó registrado " + "¡disfruta tu viaje!")
}
calcularCostoParcial()
agradecerCompra()*/