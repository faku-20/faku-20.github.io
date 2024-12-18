// Inicializar EmailJS con tu userID
emailjs.init('L1OdrFcELend-h1Rf');

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formContacto");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío automático del formulario

        // Obtener los valores de los campos
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validar los campos
        if (!validarNombre(nombre)) {
            alert("Por favor, ingresa un nombre válido (mínimo 3 caracteres).");
            return;
        }

        if (!validarEmail(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        if (!validarMensaje(mensaje)) {
            alert("El mensaje debe tener al menos 10 caracteres.");
            return;
        }

        // Usar EmailJS para enviar el mensaje
        emailjs.sendForm('gmail', 'template_s63ttea', formulario) // Asegúrate de que el ID de la plantilla esté entre comillas
            .then(function(response) {
                console.log('Mensaje enviado:', response);
                alert("Formulario enviado con éxito. ¡Gracias por tu mensaje!");
                formulario.reset(); // Limpiar el formulario
            }, function(error) {
                console.log('Error al enviar el mensaje:', error);
                alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
            });
    });

    // Función para validar el nombre
    function validarNombre(nombre) {
        return nombre.length >= 3;
    }

    // Función para validar el correo electrónico
    function validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    // Función para validar el mensaje
    function validarMensaje(mensaje) {
        return mensaje.length >= 1;
    }
});
