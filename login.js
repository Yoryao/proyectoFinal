//REGISTRAR DATOS EN EL STORAGE / SESSION


function registro() {
    
    let nombreReg = document.getElementById("nombreReg").value; 
    let passwordReg = document.getElementById("passwordReg").value;

    if (nombreReg == "" || passwordReg == "") {
        alert("Debe ingresar sus datos correctamente.");
    } else {
        localStorage.setItem( nombreReg, passwordReg );
        alert("Ya puede realizar el Login");
    }
};

function login() {
    
    let nombreLog = document.getElementById("nombrelog").value; 
    let passwordLog = document.getElementById("passwordlog").value;
    let passwordReg = localStorage.getItem(nombreLog);
    
    if (passwordLog === passwordReg) {
        
        alert("Bienvenido a casa Forest.")
        console.log("Bienvenido a casa Forest.")
        

    } else {
        alert("Tu eres tonto o algo asi?");
        

            }

};

let regButton = document.getElementById("regButton");
regButton.addEventListener("click", registro);


let logButton = document.getElementById("logButton");
logButton.addEventListener("click", login);

