
// funcion de la tabla de usuarios


$(document).ready(function() {
  $('#tablaUsuarios').DataTable({
    // Número de filas por defecto
    pageLength: 10,

    // Columnas que no se pueden ordenar (foto y acciones)
    columnDefs: [
      { orderable: false, targets: [3, 7] }
    ],

    // Traducción completa al español
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json",
      search: "Buscar:",
      lengthMenu: "Mostrar _MENU_ registros por página",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      paginate: {
        previous: "Anterior",
        next: "Siguiente"
      }
    },

    // Hace la tabla adaptable en pantallas pequeñas
    responsive: true
  });
});

  

// Abrir modal
document.querySelector(".btn-primary").addEventListener("click", () => {
  document.getElementById("modalUsuario").style.display = "flex";
});

// Cerrar modal
document.getElementById("btnCerrarModal").addEventListener("click", () => {
  document.getElementById("modalUsuario").style.display = "none";
});

// Cerrar modal si haces clic fuera del contenido
document.getElementById("modalUsuario").addEventListener("click", (e) => {
  if (e.target.id === "modalUsuario") {
    document.getElementById("modalUsuario").style.display = "none";
  }
});
