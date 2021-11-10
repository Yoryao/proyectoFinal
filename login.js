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
  } else {
    mostrarDisplay("Ese nombre ya esta registrado.");
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

    //GUARDO EL NOMBRE DEL USUARIO PARA LEVANTARLO DESDE EL INDEX.
    localStorage.setItem("usuario", JSON.stringify(nombreLogin));

    $("#botonIngreso").append(`<button type="button"
                                id="ingreso1" value="Ingresar al sistema">
                                <a href="index.html" target="_blank">INGRESO AL SISTEMA</a>
                                </button>`);
  } else {
    mostrarDisplay("Los datos de ingreso no coinciden.");
  }
});

//FUNCIONES
function mostrarDisplay(msg) {
  $("#encabezado").text(msg);
}

//VERIFICACIONES
console.log(usuarios);
