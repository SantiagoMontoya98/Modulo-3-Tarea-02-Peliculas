const d = document;

const btnEnviar = d.getElementById("btn-enviar"),
  $validacion = d.getElementById("validaciones"),
  $formulario = d.querySelector("form"),
  $registroExitoso = d.getElementById("registro-ok");
  ls = localStorage;

let usuario = {
  nombre: "",
  apellido: "",
  telefono: "",
  direccion: "",
  observaciones: ""
}

function estilosError() {
   $validacion.style.backgroundColor = "#ff341de6";
   $validacion.style.color = "white";
   $validacion.style.top = "665px";
   $validacion.style.zIndex = "1";
   $formulario.style.height = "685px"
}

function estilosCorrecto() {
   $validacion.style.backgroundColor = "#009900b3";
   $validacion.style.color = "white";
   $validacion.style.top = "665px";
   $validacion.style.zIndex = "1";
   $formulario.style.height = "685px"
}

function  obtenerDatosUsuario() {  
   usuario.nombre = $formulario.nombre.value;
   usuario.apellido = $formulario.apellido.value;
   usuario.telefono = $formulario.telefono.value;
   usuario.direccion = $formulario.direccion.value;
   usuario.observaciones = $formulario.observaciones.value;
   if(usuario.nombre === ""){
    $validacion.textContent = "No ingresaste el nombre";
    estilosError();
   }else if(usuario.apellido === ""){
    $validacion.textContent = "No ingresaste el apellido";
    estilosError();
   }else if(usuario.telefono === ""){
    $validacion.textContent = "No ingresaste el teléfono";
    estilosError();
   }else if(isNaN(usuario.telefono)){
    $validacion.textContent = "El teléfono solo acepta números";
    estilosError();
   }else if(usuario.direccion === ""){
     $validacion.textContent = "No ingresaste la dirección";
     estilosError();
   }else {
     ls.setItem("nombre",usuario.nombre);
     ls.setItem("apellido",usuario.apellido);
     ls.setItem("telefono",usuario.telefono);
     ls.setItem("direccion",usuario.direccion);
     ls.setItem("observaciones",usuario.observaciones);
     $formulario.style.display = "none";
     $registroExitoso.style.display = "block";
     $registroExitoso.style.zIndex = "1";
     $registroExitoso.style.animation = "exito 1.8s ease";
     d.querySelector("footer").style.marginTop = "630px";
   }
}

function validarUsuario(){
  if(ls.getItem("nombre") != null || ls.getItem("apellido") != null || ls.getItem("telefono") != null || ls.getItem("direccion") != null){
    $formulario.style.display = "none";
    $registroExitoso.textContent = "Ya estas registrado!"
    $registroExitoso.style.display = "block";
    $registroExitoso.style.zIndex = "1";
    $registroExitoso.style.animation = "zoom 1.8s ease";
    d.querySelector("footer").style.marginTop = "630px";
  }
}

d.addEventListener("DOMContentLoaded",validarUsuario());

btnEnviar.addEventListener("click",obtenerDatosUsuario);