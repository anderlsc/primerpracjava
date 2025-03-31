document.getElementById('mi_boton').addEventListener('click', function() {
    var nombre = document.getElementById('input1').value;
    var apellido = document.getElementById('input2').value;
    var edad = document.getElementById('edad').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
  
    var resultado = "Nombre: " + nombre + ", Apellido: " + apellido + ", Edad: " + edad + ", Dirección: " + direccion + ", Teléfono: " + telefono;
    document.getElementById('resultado').textContent = resultado;
  });
  
  document.getElementById('refrescar').addEventListener('click', function() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('resultado').textContent = 'Esperando mensaje';
  });