rotulo.innerHTML = "Ingrese el sueldo a calcular";

let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
  let sueldo : number = Number(dato.value);
  let sueldoNuevo : number = 0;
  if (sueldo > 0 && sueldo <= 15000){
    sueldoNuevo  = (sueldo * 1.20);
    (console.log ("usted tiene un aumento del 20%, su sueldo actual es de: $" + sueldoNuevo));
  } else if (sueldo > 15000 && sueldo <= 20000) {
    sueldoNuevo = (sueldo * 1.10);
    (console.log ("usted tiene un aumento del 10%, su sueldo actual es de: $" + sueldoNuevo));
  } else if (sueldo > 20000 && sueldo <= 25000) {
    sueldoNuevo = (sueldo * 1.05);
    (console.log ("usted tiene un aumento del 5%, su sueldo actual es de: $" + sueldoNuevo));
  } else {
    (console.log ("usted no posee aumento, sueldo es de: $" + sueldo));

  }
}