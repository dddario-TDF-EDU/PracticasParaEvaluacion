let botonaso = document.getElementById("Ir");

botonaso?.addEventListener("click", () => {
  let direccion: number = Number(eleccion.value);

  switch (direccion) {
    case 1:
      location.href = "../ejerciciosProg/personasEnElCine.html";
      break;
  }
});
