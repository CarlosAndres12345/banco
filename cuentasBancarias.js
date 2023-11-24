document.addEventListener("DOMContentLoaded", function () {
    // Lógica para obtener datos de la API y llenar la tabla
    obtenerCuentas();

    function obtenerCuentas() {
        fetch('http://localhost:8080/api/cuentaBancaria/obtenerTodas')
            .then(response => response.json())
            .then(data => {
                llenarTabla(data);
            })
            .catch(error => console.error('Error al obtener las cuentas:', error));
    }

    function llenarTabla(cuentas) {
        const tableBody = document.querySelector('#cuentasTable tbody');
        cuentas.forEach(cuenta => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = cuenta.numeroCuenta;
            row.insertCell(1).textContent = cuenta.tipocuenta;
            row.insertCell(2).textContent = cuenta.saldo;
            row.insertCell(3).textContent = cuenta.cliente.nomCliente; // Ajusta según la estructura real de tu cliente
        });
    }
});
