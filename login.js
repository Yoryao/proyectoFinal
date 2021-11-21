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


  //obtengo el array de usuarios registrados.
  $.get("./users.json", (resp) => {
    console.log(resp);


    let idLogin = parseInt($("#nombreLogin").val());
console.log(idLogin);

    let passwordLogin = $("#passwordLogin").val();
  console.log(passwordLogin)


    let userRegistro = resp.find((value) => value.id === idLogin);

    console.log(userRegistro)

    //VERIFICO EQUIVALENCIA ENTRE PASSWORD INGRESA Y PASSWORD REGISTRADO.
  if ( userRegistro && passwordLogin === `${userRegistro.password}`) {
    //passwords iguales: se habilita el ingreso.
    mostrarDisplay("ya puede ingresar al sistema.");
    mensajePositivo();
    //GUARDO EL NOMBRE DEL USUARIO PARA LEVANTARLO DESDE EL INDEX.
    localStorage.setItem("usuario", JSON.stringify(userRegistro.nombre));

    $("#botonIngreso").append(`<button type="button"
                                id="ingreso1" value="Ingresar al sistema" style="display: none">
                                <a href="index.html" target="_blank">INGRESO AL SISTEMA</a>
                                </button>`);
   
   /////////////////////////////////
                                $("#ingreso1").show().css({
      "width" : "100px",
      "height": "100px"
    });
  } else {
    mostrarDisplay("Los datos de ingreso no coinciden.");
    mensajeNegativo();
  }
});
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
