const btnlogin = document.getElementById("_login");

btnlogin.addEventListener("click", () => {

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "admin") {
        alert("Ingresaste correctamente");
        window.location.href = "/Gestion-de-suministros/incio.html";
    } 
    else if (user === "" && pass === "") {
        alert("Por favor ingrese sus credenciales");
    }
    else {
        alert("Usuario o contraseña incorrectos");
    }

});

//conectar a la base de datos
