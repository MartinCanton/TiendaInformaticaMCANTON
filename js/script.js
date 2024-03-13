//Bienvenida al sitio
alert("Bienvenido a Informática Mcanton")

let telefono;
do {
    telefono = prompt("Por favor, ingrese su número de teléfono así luego podremos enviarle su factura:");
    if (telefono === null) {
        break;
    }
    telefono = telefono.trim(); 
    if (telefono.length < 7 || telefono.length > 15 || isNaN(parseInt(telefono))) {
        alert("Por favor, ingrese un número de teléfono válido entre 7 y 15 caracteres.");
    }
} while (telefono === null || telefono.length < 7 || telefono.length > 15 || isNaN(parseInt(telefono)));

if (telefono !== null) {
    alert("Número de teléfono válido: " + telefono);
}

    alert("Bienvenido a Informática Mcanton");

//Molde de productos a utilizar
class Producto {
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;   
        this.imagen = imagen;
    }
}

//Array 
const carrito = [];

//Productos
const procesador = new Producto("Procesador", 50000, "procesador.jpg"); 
const mother = new Producto("Motherboard", 30000, "mother.jpg"); 
const ram = new Producto("Memoria", 10000, "ram.jpg"); 
const placa__video = new Producto("PlacaVideo", 200000, "placavideo.jpg"); 
const fuente = new Producto("Fuente", 10000, "fuente.jpg"); 
let valor = 0;

//Funciones
function agregarAlCarrito(producto){
    if (valor - producto.precio < 0){
        alert("No tienes suficiente dinero en tu billetera, agrega más dinero para continuar");
    } else {
        carrito.push(producto);
        valor = valor - producto.precio;
        actualizarHTML();
    }
}

function quitarDelCarrito(indice) {
    const producto = carrito[indice];
    valor = valor + producto.precio;
    carrito.splice(indice, 1);
    actualizarHTML();
}

function agregarSaldoBilletera() {
    const monto = prompt("Ingrese el monto que desea agregar a su billetera:");
    if (monto !== null && !isNaN(monto) && parseFloat(monto) > 0) {
        valor += parseFloat(monto);
        actualizarHTML();
    } else {
        alert("Por favor, ingrese un monto válido.");
    }
}

function comprarProductos() {
    if (carrito.length === 0) {
        alert("No hay productos en su carrito.");
        return;
    }

    let mensaje = "Gracias por su compra, mediante Whatsapp nos contactaremos con usted para enviar su factura.";
    if (valor > 0) {
        mensaje += "\nTiene un resto de $" + valor + " en su cuenta. Le enviaremos una N/C también con el valor correspondiente para futuras compras. A menos que desee utilizarlo ahora.";
    }
    let respuesta = prompt(mensaje + "\n¿Desea realizar otra compra? (Si/No)").toLowerCase();
    while (respuesta !== "si" && respuesta !== "no" && respuesta == null) {
        respuesta = prompt("Por favor, responda Si o No. ¿Desea realizar otra compra? (Si/No)").toLowerCase();
    }

    if (respuesta === "si") {
        carrito.length = 0;
        actualizarHTML();
        return;
    } else {
        alert("Gracias por comprar en Informática Mcanton.");
        carrito.length = 0;
        valor = 0;
        actualizarHTML();
   
    }
}

function actualizarHTML(){
    nodoCarrito.innerHTML = "";
    for (const producto of carrito){
        let indiceProducto = carrito.indexOf(producto);
        let nodoProducto= `<div class="producto" onclick="quitarDelCarrito(${indiceProducto})">
            <img src="img/${producto.imagen}">
            </div>`;
        nodoCarrito.innerHTML += nodoProducto;
    }
    nodoValor.innerText = valor;
}

//Nodos
const nodoValor = document.querySelector("#valor");
nodoValor.innerText = valor;
const nodoCarrito = document.querySelector("#carrito");


document.getElementById("btnBilletera").addEventListener("click", agregarSaldoBilletera);
document.getElementById("btnComprar").addEventListener("click", comprarProductos);