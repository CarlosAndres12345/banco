document.addEventListener("DOMContentLoaded", function () {
    // Lógica para enviar datos a través de la API al realizar una transacción
    const formularioTransaccion = document.getElementById('transaccionForm');
    formularioTransaccion.addEventListener('submit', function (event) {
        event.preventDefault();
        enviarFormulario();
    });

    function enviarFormulario() {
        // Lógica para obtener datos del formulario y enviarlos a la API
        const tipoTransaccion = document.getElementById('tipoTransaccion').value;
        const fecha = document.getElementById('fecha').value;
        const monto = document.getElementById('monto').value;
        const cuentaOrigen = document.getElementById('cuentaOrigen').value;

        const datosTransaccion = {
            tipoTransaccion: tipoTransaccion,
            fecha: fecha,
            monto: monto,
            cuentaOrigen: cuentaOrigen
        };

        fetch('http://localhost:8080/api/transacciones/realizarTransaccion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosTransaccion)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Transacción realizada con éxito:', data);
            // Puedes agregar más lógica según tus necesidades
        })
        .catch(error => console.error('Error al realizar la transacción:', error));
    }
});
