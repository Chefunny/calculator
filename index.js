
const precioBase = 400000;

// Inicializar la cantidad y el total
let cantidad = 0;
let total = 0;

// Obtener los elementos del DOM
const cantidadElemento = document.querySelector('.cantidad');
const precioInicialElemento = document.querySelector('.precio-inicial');
const valorTotalElemento = document.querySelector('.valor-total');

// Establecer el precio inicial en el DOM
precioInicialElemento.innerHTML = precioBase;

// Función para incrementar la cantidad
function incrementarCantidad() {
    cantidad++;
    actualizarDOM();
}

// Función para disminuir la cantidad
function disminuirCantidad() {
    if (cantidad > 0) {
        cantidad--;
    }
    actualizarDOM();
}

// Función para actualizar el DOM
function actualizarDOM() {
    // Actualizar la cantidad en el DOM
    
    cantidadElemento.innerHTML = cantidad;

    // Calcular el nuevo total
    total = cantidad * precioBase;

    // Actualizar el total en el DOM
    valorTotalElemento.innerHTML = total;
}

// Agregar eventos a los botones
document.getElementById('sumar').addEventListener('click', incrementarCantidad);
document.getElementById('restar').addEventListener('click', disminuirCantidad);

// 