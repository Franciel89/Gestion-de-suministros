// funcion de cliente que sea el mismo del usuario del login
//estado (pendiente, en proceso, enviado, entregado)
// fecha del pedido

let solicitudes = [];

function crearSolicitud() {
    const producto = document.getElementById("producto").value;
    const cantidad = document.getElementById("cantidad").value;
    const cliente = localStorage.getItem("usuarioLogueado");

    if (!producto) {
        alert("Debe seleccionar un producto.");
        return;
    }

    if (!cantidad) {
        alert("Debe seleccionar una cantidad.");
        return;
    }

    const nueva = {
        id: Date.now(),
        producto,
        cantidad: Number(cantidad),
        cliente,
        fecha: new Date().toLocaleString(),
        estado: "Pendiente"
    };

    solicitudes.push(nueva);

    alert("Solicitud creada correctamente.");
}