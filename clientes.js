// Archivo JavaScript para realizar llamadas a la API y actualizar la tabla de clientes

document.addEventListener('DOMContentLoaded', function () {
    // Llama a la API para obtener la lista de clientes al cargar la página
    obtenerClientes();
});

function obtenerClientes() {
    // Realiza una solicitud AJAX para obtener la lista de clientes desde la API
    fetch('http://localhost:8080/api/cliente/obtenerTodos')
        .then(response => response.json())
        .then(clientes => {
            // Actualiza la tabla con los datos de los clientes
            actualizarTablaClientes(clientes);
        })
        .catch(error => console.error('Error al obtener clientes:', error));
}

function actualizarTablaClientes(clientes) {
    const tableBody = document.getElementById('clientes-table-body');

    // Limpia el contenido actual de la tabla
    tableBody.innerHTML = '';

    // Itera sobre la lista de clientes y agrega filas a la tabla
    clientes.forEach(cliente => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cliente.idCliente}</td>
            <td>${cliente.nomCliente}</td>
            <td>${cliente.apeCliente}</td>
            <td>${cliente.fechanacimiento}</td>
            <td>${cliente.dircliente}</td>
            <td>${cliente.telefonocliente}</td>
            <td>${cliente.correocliente}</td>
            <!-- Agrega más celdas según tus necesidades -->
        `;
        tableBody.appendChild(row);
    });
}
