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


function cambiar_color()
{
    var contenedor = document.getElementById("container"); 

    var color = "blue" ;

    contenedor.style.backgroundColor = color;

    contenedor.style.position="absolute";
    contenedor.style.width = "700px";
    contenedor.style.left = "100px";
    contenedor.style.top = "200px";

    contenedor.classList.add("animated");

    
        


    


    
    
   
















    /*if (document.body.style.backgroundColor === "black")
        {
        document.body.style.backgroundColor = "white";
        elemento.style.position="absolute";
        elemento.style.width="150px";
        elemento.style.height="150px";
        elemento.style.backgroundColor="blue";
    }
        
    else
    {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
        elemento.style.position="absolute";
        elemento.style.width="150px";
        elemento.style.height="150px";
        elemento.style.backgroundColor="red";
     
    }*/
        
    
}

