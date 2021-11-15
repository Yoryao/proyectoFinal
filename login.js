$(()=>{
console.log("DOM ready");
});


//DECLARO LA CLASE PARA CREAR LOS USUARIOS
class Usuario {
  constructor(nombre, password) {
    (this.nombre = nombre), (this.password = password);
  }
}

//ARRAY VACIO PARA GUARDAR LOS USUARIOS Y ENVIAR AL STORAGE
let usuarios = [];
//------------PENDIENTE
//MANEJAR EL ERROR DE QUE SE REESCRIBE EL REGISTRO
//IMPEDIR CREACION DUPLICADA DE NOMBRE DE USUARIO

//FUNCION REGISTRO DE USUARIOS
$("#btnRegistro").click(function (e) {
  e.preventDefault();

  // CAPTURO DATOS DEL USUARIO.
  const nombreRegistro = $("#nombreRegistro").val();
  const passwordRegistro = $("#passwordRegistro").val();

  let nombreExistente = usuarios.find((user) => user.nombre === nombreRegistro);

  if (!nombreExistente) {
    //CREO EL OBJETO USUARIO Y LO ENVIO AL STORAGE CONVERTIDO EN JSON
    const usuario = new Usuario(nombreRegistro, passwordRegistro);
    usuarios.push(usuario);

    //CON CADA CREACION DE USUARIO ENVIO LOS DATOS AL STORAGE.
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mostrarDisplay("ya puede realizar el Login");
    mensajePositivo();
  } else {
    mostrarDisplay("Ese nombre ya esta registrado.");
    mensajeNegativo();
  }
});

//FUNCION LOGIN DE USUARIO
$("#logButton").click(function (e) {
  e.preventDefault();

  //EXTRAIGO LOS USUARIOS DEL STORAGE Y LO PARSEO.
  let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"));
  //CAPTURO LOS DATOS INGRESADOS EN EL LOGIN
  let nombreLogin = $("#nombreLogin").val();
  let passwordLogin = $("#passwordLogin").val();
  //RECORRE LOS OBJETOS-USUARIOS CON EL PARAMETRO NOMBRE.
  let usuarioRegistrado = usuariosRegistrados.find(
    (user) => user.nombre === nombreLogin
  );

  //VERIFICO EQUIVALENCIA ENTRE PASSWORD INGRESA Y PASSWORD REGISTRADO.
  if (usuarioRegistrado && passwordLogin === `${usuarioRegistrado.password}`) {
    //passwords iguales: se habilita el ingreso.
    mostrarDisplay("ya puede ingresar al sistema.");
    mensajePositivo();
    //GUARDO EL NOMBRE DEL USUARIO PARA LEVANTARLO DESDE EL INDEX.
    localStorage.setItem("usuario", JSON.stringify(nombreLogin));

    $("#botonIngreso").append(`<button type="button"
                                id="ingreso1" value="Ingresar al sistema" style="display: none">
                                <a href="index.html" target="_blank">INGRESO AL SISTEMA</a>
                                </button>`);
    $("#ingreso1").show().css({
      "width" : "100px",
      "height": "100px"
    });
  } else {
    mostrarDisplay("Los datos de ingreso no coinciden.");
    mensajeNegativo();
  }
});

//FUNCIONES
function mostrarDisplay(msg) {
  $("#encabezado").text(msg);
}

//VERIFICACIONES
//    console.log(usuarios);

function mensajeNegativo() {
  $("header").slideDown(0);
  $("#encabezado").removeClass("positivo").fadeIn(3000);
  $("#encabezado").addClass("negativo").fadeOut(3000);
  $("header").delay(6000).slideUp(2000);
}

function mensajePositivo() {
  $("header").slideDown(0);
  $("#encabezado").removeClass("negativo").fadeIn(3000);
  $("#encabezado").addClass("positivo").fadeOut(3000);
  $("header").delay(6000).slideUp(2000);
}
