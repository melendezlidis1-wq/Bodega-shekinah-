const productos = JSON.parse(localStorage.getItem("productos")) || [];

function guardarProductos() {
  localStorage.setItem("productos", JSON.stringify(productos));
}

function agregarProducto(nombre, precio, cantidad) {
  const producto = {
    id: Date.now(),
    nombre: nombre,
    precio: Number(precio),
    cantidad: Number(cantidad)
  };

  productos.push(producto);
  guardarProductos();
}

function obtenerProductos() {
  return productos;
}

function eliminarProducto(id) {
  const indice = productos.findIndex(p => p.id === id);

  if (indice !== -1) {
    productos.splice(indice, 1);
    guardarProductos();
  }
}

function actualizarCantidad(id, cantidad) {
  const producto = productos.find(p => p.id === id);

  if (producto) {
    producto.cantidad = Number(cantidad);
    guardarProductos();
  }
}
