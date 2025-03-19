function mostrarInformacion() 
{
    // Obtener los valores de los inputs
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();

    // Validar que los campos no estén vacíos
    if (!nombre || !apellido)
    {
        alert("Por favor, completa ambos campos.");
        return;
    }

    // Mostrar el mensaje en una ventana emergente
    alert("Hola " + nombre + " " + apellido + ". ¡Gracias por enviar tus datos!");

    // Limpiar los campos de entrada
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
}