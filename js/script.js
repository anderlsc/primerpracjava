

document.addEventListener("DOMContentLoaded",function()
{
document.getElementById("mi_boton").addEventListener("click", function()
{
mostrar_mensaje();
});
});
document.getElementById("btn_color").addEventListener("click", function()
{
cambiar_color();
});

function mostrar_mensaje() 
{
    //Declaracion de variable
    var datouno;
    var datodos;
    //Asignacion de id a las variables

    datouno = document.getElementById("input1").value;
    datodos = document.getElementById("input2").value;

    var mensaje = "Su Nombre Es " + datouno + " " + datodos;
     //Llamar mensaje

    

    if (datouno.trim() === ''|| datodos.trim() === '')
        alert("Por favor llene sus datos");

    else {        
        document.getElementById("resultado").innerText = mensaje;
    }
}


