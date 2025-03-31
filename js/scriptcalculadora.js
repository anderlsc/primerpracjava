let pantalla = document.getElementById('pantalla');
let operacion = '';

function presiona(valor) 
{
  operacion += valor; // Agrega números u operadores
  pantalla.value = operacion; // Actualiza la pantalla
}

function calcular() 
{
  try {
    pantalla.value = eval(operacion); // Evalúa la operación ingresada
    operacion = pantalla.value; // Permite continuar con el resultado
  } catch (error) {
    pantalla.value = 'Error'; // Muestra error si la operación es inválida
    operacion = '';
  }
}

function limpiar() 
{
  operacion = ''; // Reinicia la operación
  pantalla.value = ''; // Limpia la pantalla
}