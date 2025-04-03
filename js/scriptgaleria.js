let indice = 0;
let imagenes = document.querySelectorAll(".galeria img");

// Mostrar imagen específica
function mostrarImagen(n) 
{
    imagenes.forEach(img => img.classList.remove("visible"));
    imagenes[n].classList.add("visible");
}

// Ir a la imagen anterior
function anterior() 
{
    indice = (indice === 0) ? imagenes.length - 1 : indice - 1;
    mostrarImagen(indice);
}

// Ir a la siguiente imagen
function siguiente() 
{
    indice = (indice === imagenes.length - 1) ? 0 : indice + 1;
    mostrarImagen(indice);
}

// Función para desplazamiento automático
function desplazamientoAutomatico()
 {
    indice = (indice === imagenes.length - 1) ? 0 : indice + 1;
    mostrarImagen(indice);
}

// Configurar desplazamiento automático cada 2 segundos
setInterval(desplazamientoAutomatico, 1500);