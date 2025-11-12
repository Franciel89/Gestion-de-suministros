$(document).ready(function() {
  // Inicialización de DataTable
  $('#tablaCategorias').DataTable({
    pageLength: 10, // Cantidad de filas por página
    responsive: true, // Hace la tabla adaptable a pantallas pequeñas

    // Traducción al español
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json"
    },

    // Evita ordenar por columnas específicas (por ejemplo, imagen y acciones)
    columnDefs: [
      { orderable: false, targets: [0, 0] } 
    ]
  });
});