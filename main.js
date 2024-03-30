document.getElementById("addResponseForm").addEventListener("submit", function (event) {
  event.preventDefault();
  // Aquí podrías agregar la lógica para enviar la nueva autorespuesta al servidor.
  console.log("Formulario enviado");
});

// Esta función sería para cargar y mostrar las autorespuestas en la tabla.
function loadAutoResponses() {
  // Esta función hará una solicitud al backend para obtener las autorespuestas
  // y luego las mostrará en la tabla.
  console.log("Cargando autorespuestas...");
}

// Inicializar la carga de autorespuestas cuando la página se carga.
window.onload = loadAutoResponses;
