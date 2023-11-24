
function enviarFormulario() {
    // Obtén los datos del formulario
    const formData = new FormData(document.getElementById('clienteForm'));

    // Convierte los datos a un objeto JSON
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Realiza la llamada a la API para guardar el cliente (puedes usar Fetch o jQuery.ajax)
    fetch('http://localhost:puerto/api/cliente/guardar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    .then(data => {
        // Maneja la respuesta de la API, por ejemplo, muestra un mensaje al usuario
        alert('Cliente guardado exitosamente');
    })
    .catch(error => {
        // Maneja los errores, por ejemplo, muestra un mensaje de error al usuario
        alert('Error al guardar el cliente');
    });
}
