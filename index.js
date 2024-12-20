// Array de frases
const frases = [
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "No cuentes los días, haz que los días cuenten.",
    "La mente es todo. Lo que pienses, eso serás.",
    "La felicidad es una mariposa que cuando la persigues siempre está fuera de tu alcance, pero que si te sientas silenciosamente puede posarse sobre ti.",
    "La mejor venganza es un gran éxito.",
    "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas.",
    "La vida es un 10% lo que me pasa y un 90% cómo reacciono a ello.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
    "La vida es corta, pero ancha.",
    "Haz lo que puedas, con lo que tengas, donde estés.",
    "El futuro pertenece a aquellos que creen en la belleza de sus sueños.",
    "En medio de la dificultad yace la oportunidad.",
    "La vida no se mide por las veces que respiras, sino por los momentos que te dejan sin aliento.",
    "Nunca es demasiado tarde para ser lo que podrías haber sido.",
    "No es lo que tienes, es lo que haces con lo que tienes lo que marca la diferencia.",
    "Lo único imposible es aquello que no intentas.",
    "No dejes para mañana lo que puedes hacer hoy.",
    "Lo único que te detiene es tu propia mente.",
    "El dolor es temporal, el orgullo es para siempre.",
    "Lo que no te mata te hace más fuerte.",
    "La perseverancia es la clave del éxito.",
    "La vida es como montar en bicicleta. Para mantener el equilibrio, debes seguir adelante.",
    "Lo más grande que puedes hacer es empezar.",
    "Si no lo intentas, nunca sabrás lo lejos que puedes llegar.",
    "La felicidad no es algo hecho. Viene de tus propias acciones.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "El único límite para nuestro logro de mañana es nuestra duda y vacilación de hoy.",
    "Tienes que hacer las cosas que crees que no puedes hacer.",
    "El éxito es la habilidad de ir de fracaso en fracaso sin perder el entusiasmo.",
    "La vida es lo que ocurre cuando te distraes haciendo otros planes.",
    "Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden."
];

// Función para generar una frase aleatoria
function generarFrase() {
    const indice = Math.floor(Math.random() * frases.length);
    const fraseAleatoria = frases[indice];
    document.getElementById("frase").innerText = fraseAleatoria; // Muestra la frase debajo del botón
}

// Agrega un listener al botón con el id correcto
document.getElementById("btnGenerar").addEventListener("click", generarFrase);
