//DECLARO LA CLASE PARA CREAR LOS USUARIOS
class Usuario {
  constructor(nombre, password) {
    (this.nombre = nombre), (this.password = password);
  };
};

//ARRAY VACIO PARA GUARDAR LOS USUARIOS Y ENVIAR AL STORAGE
let usuarios = [];

//------------PENDIENTE
//MANEJAR EL ERROR DE QUE SE REESCRIBE EL REGISTRO
//IMPEDIR CREACION DUPLICADA DE NOMBRE DE USUARIO

//FUNCION REGISTRO DE USUARIOS
function registro(e) {
  e.preventDefault();

  // CAPTURO DATOS DEL USUARIO.
  const nombreRegistro = document.getElementById("nombreRegistro").value;
  const passwordRegistro = document.getElementById("passwordRegistro").value;

  //CREO EL OBJETO USUARIO Y LO ENVIO AL STORAGE CONVERTIDO EN JSON
  const usuario = new Usuario(nombreRegistro, passwordRegistro);
  usuarios.push(usuario);

  //CON CADA CREACION DE USUARIO ENVIO LOS DATOS AL STORAGE.
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}


//FUNCION LOGIN DE USUARIO
function login(e) {
  e.preventDefault();

  //EXTRAIGO LOS USUARIOS DEL STORAGE Y LO PARSEO. 
  let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"));
  
  //CAPTURO LOS DATOS INGRESADOS EN EL LOGIN
  let nombreLogin = document.getElementById("nombrelogin").value;
  let passwordLogin = document.getElementById("passwordLogin").value;
  
  //RECORRE LOS OBJETOS-USUARIOS CON EL PARAMETRO NOMBRE.
  let usuarioRegistrado = usuariosRegistrados.find((user) => user.nombre === nombreLogin);
  
  //ACA TENEMOS QUE MANEJAR EL ERROR CUANDO NO EXISTE EL USUARIO
  
  //VERIFICO EQUIVALENCIA ENTRE PASSWORD INGRESA Y PASSWORD REGISTRADO.
    if (passwordLogin === `${usuarioRegistrado.password}`){
    //passwords iguales: se habilita el ingreso.
    alert("Bienvenido.");
    
    const boton = document.getElementById("botonIngreso");
    boton.innerHTML = `<button type="button" id="ingreso1" value="Ingresar al sistema"><a href="index.html" target="_blank">INGRESO AL SISTEMA</a></button>`;
    document.body.append(boton);
    } else {
      alert("LOS DATOS NO COINCIDEN!")
    }
};

//EVENTOS DEL USUARIO

let regButton = document.getElementById("btnRegistro");
regButton.addEventListener("click", registro);

let logButton = document.getElementById("logButton");
logButton.addEventListener("click", login);

//VERIFICACIONES
console.log(usuarios);

