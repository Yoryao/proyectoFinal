//REGISTRAR DATOS EN EL STORAGE / SESSION

// let registro = () => {

//     let nombreReg = prompt("Ingrese su nombre: ");
//     let passwordReg = prompt("Ingrese su clave: ");

//     if (nombreReg != "" || passwordReg != "") {
//         localStorage.setItem( nombreReg, passwordReg );
//         alert("Ya puede realizar el Login");
//     } else {
//         alert("Debe ingresar sus datos correctamente.");
//         registro();
//     }
// };

let login = () => {
    
    let nombreLog = prompt("Ingrese su nombre: ");
    let passwordLog = prompt("Ingrese su clave: ");
    let passwordStorage = localStorage.getItem(nombreLog);
    
    if (passwordLog === passwordStorage) {

        alert("Bienvenido a casa Forest.")
        
    } else {
        alert("Tu eres tonto o algo asi?");
        login();
    }

};

//registro();
login();
