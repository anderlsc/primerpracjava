
let contador = 0;



document.getElementById('boton').addEventListener('click', () => {
  contador++;
  document.getElementById('contador').textContent = contador;
});