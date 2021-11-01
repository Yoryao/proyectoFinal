//DECLARO LA CLASE PARA CREAR LOS USUARIOS
class Usuario {
  constructor(nombre, password){
    this.nombre = nombre,
    this.password = password
  }
};

let user = [
 ];


 //MANEJAR EL ERROR DE QUE SE REESCRIBE EL REGISTRO

function registro(e) {
  e.preventDefault();
  

  console.log(user);
  const nombreReg = document.getElementById("nombreReg").value;
  const passwordReg = document.getElementById("passwordReg").value;
  
      const usuario = new Usuario(
        nombreReg,
        passwordReg
        );
        user.push(usuario);
        console.log(usuario);
        console.log(user);    
        
         localStorage.setItem("usuarios" , JSON.stringify(user));
      };
      //eventos del usuario.
      
      let regButton = document.getElementById("regButton");
      regButton.addEventListener("click", registro);
      
  //LOGIN funcion llamada desde el boton
  function login(e) {
    e.preventDefault();
    //extraigo el password desde el storage en base al nombre.
    let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"));
    
    console.log(usuariosRegistrados);
    
    //capturo los datos ingresados por el usuario.
    let nombreLogin = document.getElementById("nombrelog").value;
    let passwordLogin = document.getElementById("passwordLog").value;
    
    let logReg = usuariosRegistrados.find((user) => user.nombre === nombreLogin);
     
  //ACA TENEMOS QUE MANEJAR EL ERROR CUANDO NO EXISTE EL USUARIO
      let passwordRegistrado = `${logReg.password}`;
  {
    if (passwordLogin === passwordRegistrado) 
      //passwords iguales: se habilita el ingreso.
      alert("Bienvenido.");
      
      const boton = document.getElementById("botonIngreso");
      boton.innerHTML = `<button type="button" id="ingreso1" value="Ingresar al sistema"><a href="index.html" target="_blank">INGRESO AL SISTEMA</a></button>`
    document.body.append(boton);
  }
  
}
  
  
  

  



let logButton = document.getElementById("logButton");
logButton.addEventListener("click", login);










