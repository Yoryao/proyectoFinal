//REGISTRAR DATOS EN EL STORAGE / SESSION

//debo pasar todos los strings a toUppercase. y debo prohibir nombres de usuarios iguales.

//REGISTRO funcion llamada desde el boton.
function registro() {
  //captura de datos
  let nombreReg = document.getElementById("nombreReg").value;
  let passwordReg = document.getElementById("passwordReg").value;

  //simple verificación de errores
  if (nombreReg == "" || passwordReg == "") {
    alert("Debe ingresar sus datos correctamente.");
  } else {
    //registro de los datos en el localStorage.
    localStorage.setItem(nombreReg, passwordReg);
    alert("Ya puede realizar el Login");
  }
};

//LOGIN funcion llamada desde el boton
function login(e) {
  e.preventDefault();


 //capturo los datos ingresados por el usuario.
  let nombreLog = document.getElementById("nombrelog").value;
  let passwordLog = document.getElementById("passwordLog").value;

  //extraigo el password desde el storage en base al nombre.
  let passwordReg = localStorage.getItem(nombreLog);

  if (passwordLog === passwordReg) {
    //passwords iguales: se habilita el ingreso.
    alert("Bienvenido.");
    console.log("Bienvenido.");

      
    const boton = document.getElementById("botonIngreso");
    boton.innerHTML = `<button type="button" id="ingreso1" value="Ingresar al sistema"><a href="index.html" target="_blank">INGRESO AL SISTEMA</a></button>`
    document.body.append(boton);

  } else {
    //passwords distintos: se prohibe el ingreso.
    alert("No coinciden los datos. ");
  };
    
  //  // CAPTURA DEL BOTON + CREACION ANCHOR
  //      const boton = document.getElementById("ingreso1");
  //    let link = document.createElement("a");
  //    let linkText = document.createTextNode("Ingrese al sistema.");
  //    link.appendChild(linkText);
  //    link.href = "index.html";
  //    boton.appendChild(link);  
};

//eventos del usuario.



let regButton = document.getElementById("regButton");
regButton.addEventListener("click", registro);

let logButton = document.getElementById("logButton");
logButton.addEventListener("click", login);