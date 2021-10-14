//DEFINIR LA CLASE PARA INGRESAR UN PACIENTE AL CENTRO MEDICO

class Paciente {
    constructor (nombre, apellido, dni, email, doctor, cobertura) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.dni = dni,
        this.email = email,
        this.doctor = doctor,
        this.cobertura = cobertura,
        this.ingresado = false,
        this.atendido = false,
        this.retirado = true
    }

    ingresar() {
        if (this.ingresado != true) {
                this.ingresado = true;
                this.retirado = false;
                console.log("El paciente fue ingresado.")
            } else {
                console.log("El paciente ya se encuentra ingresado.")
            }
    };

    egresar() {
        if (this.retirado != true) {
            this.retirado = true;
            this.ingresado = false;
            console.log("El paciente se ha retirado.")
        } else {
            console.log("El paciente no esta en el centro.")
        }
    };
    



    reservarTurno(){
//por parametro se ingresa: doctor, fecha, hora
        if ( disponible = false){
            alert("El turno se encuentra ocupado. Elija otro turno.")
        } else {
            alert("El turno fue reservado con exito.")
        }
    }



};

const paciente1 = new Paciente ("Hugo", "Reyes", 14256528, "hugo@gmail.com", "Cormillot", "Osde");

console.log(paciente1);
paciente1.ingresar();
paciente1.egresar();


//MOSTRAR LOS PACIENTES EN FILA POR MEDICO
//MOSTRAR EL TIEMPO DE ESPERA ESTIMADO PARA SER ATENDIDO
//RESERVAR TURNO PROXIMA VISITA


//DEFINIR LA CLASE PARA HABILITAR UN MEDICO AL CENTRO MEDICO
class Doctor {
    constructor ( apellido, dni, email, doctor, cobertura) {
        this.apellido = apellido,
        this.dni = dni,
        this.cobertura = cobertura,
        this.ingresado = false,
        this.atendiendo = false,
        this.retirado = true
    }

    atender(paciente1) {

    }









//MOSTRAR LOS PACIENTES PENDIENTES DE ATENCIÓN
//MOSTRAR TIEMPO APROXIMADO PARA TERMINAR LAS CONSULTAS



//DEFINIR CENTRO MEDICO
/*FUNCIONES
-CONSULTORIOS DISPONIBLES.
-PERSONAS DENTRO DEL CENTRO.
-PERSONAL ADMINISTRATIVO.
-MANEJO DE CAJA.
-AGENDAR TURNO.
-VALIDAR OBRAS SOCIALES PERMITIDAS*/