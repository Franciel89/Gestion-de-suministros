document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modalProducto");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("cerrarModal");
    const form = document.getElementById("formSuministro");
    const tablaBody = document.querySelector("#tablaStock tbody");
    const tituloModal = document.getElementById("tituloModalSuministro");

    let filaEditando = null;

    // =============== ENUMERAR FILAS ===============
    function enumerarFilas() {
        const filas = tablaBody.querySelectorAll("tr");
        filas.forEach((fila, i) => {
            fila.children[0].textContent = i + 1;
        });
    }

    // =============== ABRIR MODAL (AGREGAR) ===============
    openModalBtn.addEventListener("click", () => {
        filaEditando = null;
        tituloModal.textContent = "Agregar suministro";
        form.reset();
        modal.style.display = "flex";
    });

    // =============== CERRAR MODAL ===============
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
        form.reset();
        filaEditando = null;
    });

    // =============== GUARDAR (AGREGAR O EDITAR) ===============
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = nombreProducto.value;
        const categoria = categoriaProducto.value;
        const cantidad = cantidadProducto.value;
        const fecha = fechaProducto.value;

        if (!filaEditando) {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td></td>
                <td>${nombre}</td>
                <td>${categoria}</td>
                <td>${cantidad}</td>
                <td>${fecha}</td>
                <td class="table-actions">
                  <button class="btn-edit"><i class="ri-pencil-line"></i></button>
                  <button class="btn-delete btn-eliminar"><i class="ri-delete-bin-line"></i></button>
                </td>`;
            tablaBody.appendChild(fila);

        } else {
            const celdas = filaEditando.children;
            celdas[1].textContent = nombre;
            celdas[2].textContent = categoria;
            celdas[3].textContent = cantidad;
            celdas[4].textContent = fecha;
        }

        modal.style.display = "none";
        form.reset();
        filaEditando = null;

        enumerarFilas();
    });

    // =============== BOTONES EDITAR / ELIMINAR ===============
    document.addEventListener("click", (e) => {

        // ELIMINAR
        if (e.target.closest(".btn-delete")) {
            e.target.closest("tr").remove();
            enumerarFilas();
        }

        // EDITAR
        if (e.target.closest(".btn-edit")) {
            filaEditando = e.target.closest("tr");

            const celdas = filaEditando.children;

            nombreProducto.value = celdas[1].textContent;
            categoriaProducto.value = celdas[2].textContent;
            cantidadProducto.value = celdas[3].textContent;
            fechaProducto.value = celdas[4].textContent;

            tituloModal.textContent = "Editar suministro";
            modal.style.display = "flex";
        }
    });

    // Enumerar al iniciar
    enumerarFilas();

});
