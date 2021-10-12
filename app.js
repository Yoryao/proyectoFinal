//DEFINIR LA CLASE PARA INGRESAR UN PACIENTE AL CENTRO MEDICO

class Paciente {
    constructor (nombre, apellido, dni, email, doctor, cobertura) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.dni = dni,
        this.email = email,
        this.doctor = doctor,
        this.cobertura = cobertura
    }

    ingresar() {
        console.log("El paciente fue ingresado.")
    }

    egresar() {
        console.log("El paciente se ha retirado.")
    }

    reservarTurno(){
//por parametro se ingresa: doctor, fecha, hora
        if ( disponible = false){
            alert("El turno se encuentra ocupado. Elija otro turno.")
        } else {
            alert("El turno fue reservado con exito.")
        }
    }



};



//MOSTRAR LOS PACIENTES EN FILA POR MEDICO
//MOSTRAR EL TIEMPO DE ESPERA ESTIMADO PARA SER ATENDIDO
//RESERVAR TURNO PROXIMA VISITA


//DEFINIR LA CLASE PARA HABILITAR UN MEDICO AL CENTRO MEDICO

//MOSTRAR LOS PACIENTES PENDIENTES DE ATENCIÓN
//MOSTRAR TIEMPO APROXIMADO PARA TERMINAR LAS CONSULTAS




//DEFINIR CENTRO MEDICO
/*FUNCIONES
-CONSULTORIOS DISPONIBLES.
-PERSONAS DENTRO DEL CENTRO.
-PERSONAL ADMINISTRATIVO.
-MANEJO DE CAJA.
-AGENDAR TURNO.
-VALIDAR OBRAS SOCIALES PERMITIDAS



