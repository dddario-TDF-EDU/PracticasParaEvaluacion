let botonaso = document.getElementById("Ir");

botonaso.addEventListener("click", () => {
  let direccion: number = Number(pasito.value);

  switch (direccion) {
    case 1:
      location.href = "../ejerciciosProg/personasEnElCine.html";
      break;
    case 2:
      location.href = "../ejerciciosProg/evaluacion.html";
      break;
    case 3:
      location.href = "../ejerciciosProg/convertirTexto.html";
      break;
    default:
      console.log("que onda we no carga");
      break;
  }
});
