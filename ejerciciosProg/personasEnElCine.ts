let botonaso = document.getElementById("ingreso");
let numIngresado = document.getElementById("numIngresado");

function verificacionNumero(numLocal: number): boolean {
  let datoValido: boolean = !isNaN(numLocal);
  if (numLocal < 1 && datoValido === true) {
    datoValido = false;
  }
  return datoValido;
}

function asignarBoolean(): boolean {
  let valorBoolean: boolean;
  let valor: number = Math.floor(Math.random() * 2);
  if (valor === 1) {
    valorBoolean = true;
  } else {
    valorBoolean = false;
  }
  return valorBoolean;
}

function cargaButacas(arrayButaca: boolean[]) {
  let longitudArray: number = arrayButaca.length;
  for (let indice: number = 0; indice < longitudArray; indice++) {
    arrayButaca[indice] = asignarBoolean();
  }
}

function contarButacasDesocupadas(arrayButaca: boolean[]) {
  let longitudArray: number = arrayButaca.length;
  let cantidadButacasDesocupadas: number = 0;
  for (let elemento: number = 0; elemento < longitudArray; elemento++) {
    if (arrayButaca[elemento] === false) {
      cantidadButacasDesocupadas++;
    }
  }
  return cantidadButacasDesocupadas;
}

botonaso.addEventListener("click", () => {
  let numeroButacas: number = Number(numIngresado.value);
  let numeroValido: boolean;
  numeroValido = verificacionNumero(numeroButacas);
  if (numeroValido === true) {
    let butacas: boolean[] = new Array(numeroButacas);
    let butacasDesocupadas: number = 0;
    cargaButacas(butacas);
    butacasDesocupadas = contarButacasDesocupadas(butacas);
    console.log("La cantidad de butacas es: " + butacas.length);
    console.log("La cantidad de butacas desocupadas es: " + butacasDesocupadas);
  } else {
    console.log("El dato ingresado no es correcto, intentelo nuevamente");
  }
});
