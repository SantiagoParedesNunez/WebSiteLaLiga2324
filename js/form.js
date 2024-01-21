const boton = document.querySelector(".enviar");

boton.addEventListener("click", enviar);

function enviar() {
    alert("El mensaje ha sido enviado con éxito");
    location.reload()
}