$(function () {

    //  MODO OSCURO ()usando localStorage))!!// 
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado === "oscuro") {
        $("body").addClass("oscuro");
    }

    $("#btn-tema").on("click", function () {
        $("body").toggleClass("oscuro");
        if ($("body").hasClass("oscuro")) {
            localStorage.setItem("tema", "oscuro");
        } else {
            localStorage.setItem("tema", "claro");
        }
    });

    //  FORMULARIO PARA CONTACTARME // 
    if ($("#form-contacto").length) {

        function limpiarErrores() {
            $(".error").text("");
        }

        $("#btn-borrar").on("click", function () {
            $("#form-contacto")[0].reset();
            limpiarErrores();
        });

        $("#form-contacto").on("submit", function (e) {
            e.preventDefault();
            limpiarErrores();

            const nombre = $("#nombre").val().trim();
            const edad = $("#edad").val().trim();
            const email = $("#email").val().trim();
            const comentario = $("#comentario").val().trim();

            let esValido = true;

            if (nombre === "") {
                $("#err-nombre").text("Completá tu nombre.");
                esValido = false;
            }

            if (edad === "" || isNaN(edad) || parseInt(edad) <= 0) {
                $("#err-edad").text("Ingresá una edad válida.");
                esValido = false;
            }

            if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
                $("#err-email").text("Ingresá un email válido.");
                esValido = false;
            }

            if (comentario.length < 5) {
                $("#err-comentario").text("Escribí un comentario un poco más largo.");
                esValido = false;
            }

            if (esValido) {
                alert("Mensaje enviado exitosamente.");
                $("#form-contacto")[0].reset();
            }
        });
    }

});
