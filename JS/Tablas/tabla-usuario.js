
// funcion de la tabla de usuarios


$(document).ready(function () {
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



// --- Abrir modal usuarios---
document.getElementById("btnAbrirModal").addEventListener("click", () => {
  document.getElementById("modalUsuario").style.display = "flex";
});

// --- Abrir modal Edit--- 
document.getElementById("btn-edit").addEventListener("click", () => {
  document.getElementById("modalEdit").style.display = "flex";
})

// --- Cerrar modal al presionar "Cancelar" ---
document.getElementById("btnCerrarModal").addEventListener("click", () => {
  document.getElementById("modalUsuario").style.display = "none";
});

// --- Cerrar modal al hacer clic fuera del contenido ---
window.addEventListener("click", (e) => {
  const modal = document.getElementById("modalUsuario");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Inicializamos DataTable
let tabla = $('#tablaUsuarios').DataTable();

// Función para generar un número de fila automáticamente
function generarNumeroFila() {
  return tabla.data().count() + 1;
}

// Escuchar el envío del formulario
document.getElementById("formUsuario").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita recargar la página

  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value.trim();
  const usuario = document.getElementById("usuario").value.trim();
  const perfil = document.getElementById("perfil").value;
  const fotoInput = document.getElementById("foto");
  const fecha = new Date().toLocaleString(); // Fecha actual

  // Validar campos
  if (!nombre || !usuario || !perfil || !fotoInput.files[0]) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Convertir la imagen a una URL temporal
  const reader = new FileReader();
  reader.onload = function (e) {
    const fotoURL = e.target.result;

    // Agregar fila a la tabla
    tabla.row.add([
      generarNumeroFila(),
      nombre,
      usuario,
      `<img src="${fotoURL}" alt="${nombre}" style="width:40px; height:40px; border-radius:50%;">`,
      perfil,
      '<span class="badge badge-activo">Activo</span>',
      fecha,
      `
        <div class="table-actions">
          <button class="btn-edit"><i class="ri-pencil-line"></i></button>
          <button class="btn-delete"><i class="ri-delete-bin-line"></i></button>
        </div>
      `
    ]).draw(false); // Actualiza la tabla sin recargar

    // Cerrar el modal
    document.getElementById("modalUsuario").style.display = "none";

    // Limpiar formulario
    document.getElementById("formUsuario").reset();
  };

  reader.readAsDataURL(fotoInput.files[0]);
});


tabla.on('order.dt search.dt draw.dt', function () {
  let info = tabla.page.info();
  let startIndex = info.start + 1;

  tabla
    .cells(null, 0, { search: 'applied', order: 'applied' })
    .every(function (cellIndex) {
      this.data(startIndex++);
    });
}).draw();






