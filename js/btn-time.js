var boton = document.getElementById("donload")
var contador = 15;
var etiqueta = document.createElement("p");

etiqueta.innerHTML = "<b> 15 segundos para descargar </b>"
var id;

boton.parentNode.replaceChild(etiqueta, boton);

function descarga(){
    this.styple.display = "none";
    id = window.setInterval(function(){
        contador--;
        if(contador < 0){
            etiqueta.parentNode.replaceChild(boton, etiqueta);
            window.clearInterval(id);
        }
        else{
            etiqueta.innerHTML = + contador.toString() + "<b> 15 segundos para descargar </b>";
         }
    }, 1000)
}

var clickbtn = document.getElementById("btn");
clickbtn.onclick = descarga;
