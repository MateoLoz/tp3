let productos = [];
let ultimoId = 0;

function agregarProducto() {
  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);

  if (!nombre || isNaN(precio)) {
    alert("Por favor, completa ambos campos correctamente.");
    return;
  }

  const producto = {
    id: ++ultimoId,
    nombre,
    precio
  };

  productos.push(producto);
  mostrarProductos();
  document.getElementById("nombre").value = "";
  document.getElementById("precio").value = "";
}

function mostrarProductos() {
  const tabla = document.getElementById("tablaProductos");
  tabla.innerHTML = "";
  productos.forEach(p => {
    const fila = `<tr><td>${p.id}</td><td>${p.nombre}</td><td>$${p.precio}</td></tr>`;
    tabla.innerHTML += fila;
  });
}

