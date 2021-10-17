//PAGINA WEB PARA GESTIONAR LA ATENCIÓN DE UN CONSULTORIO MEDICO.

//DEFINIR LA CLASE PARA CREAR UN PACIENTE QUE SE ATENDERA EN CENTRO MEDICO
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

    //FUNCION PARA REGISTRAR EL INGRESO A CONSULTORIO
    ingresar = (index) => {
        if (this.ingresado != true) {
                this.ingresado = true;
                this.retirado = false;
                console.log("El paciente fue ingresado.")
                listaPacientes.push(index);
            } else {
                console.log("El paciente ya se encuentra ingresado.")
            }
    };

    //FUNCION PARA REGISTRAR EL EGRESO DEL CONSULTORIO

    egresar = (index) => {
        if (this.retirado != true) {
            this.retirado = true;
            this.ingresado = false;
            console.log("El paciente se ha retirado.")
            listaTurnos.shift(index);
        } else {
            console.log("El paciente no esta en el centro.")
        }
    };
}; 
    //FUNCION PARA SER ATENDIDO.
    // atender() {
    //     if (consultorio.box1 == false) {

    //     }

    // };

//     reservarTurno(){
// por parametro se ingresa: doctor, fecha, hora
//         if ( disponible = false){
//             alert("El turno se encuentra ocupado. Elija otro turno.")
//         } else {
//             alert("El turno fue reservado con exito.")
//         }
//     }

// };

//GENERAR UN ARRAY PARA CARGANDO LOS TURNOS DEL DIA.
let listaTurnos = [];

//GENERAR UN ARRAY PARA CARGAR LOS PACIENTES QUE INGRESAN AL EDIFICIO.
let listaPacientes = [];

let listaBox1 = [];

//FUNCION INICIADORA QUE REALIZA LA CARGA INICIAL POR CONSOLA
// DE LOS PACIENTES QUE SE ATENDERAN ESE DIA EN EL CONSULTORIO.
// NO IMPLICA QUE HAYAN INGRESADO AL CONSULTORIO.



class Edificio {
    constructor () {
        this.box1 = false;
        this.box2 = false;
    };
    
    registroDiario = () => {
        for (let i = 0; i < 2; i++) {
            const paciente = new Paciente (
                prompt("Ingrese el nombre del paciente:"),
               // prompt("Ingrese el apellido del paciente:"),
                prompt("Ingrese el dni del paciente:"),
                //prompt("Ingrese el mail del paciente:"),
                //prompt("Ingrese el medico del paciente:"),
                //prompt("ingrese la cobertura del paciente:")
                );
                alert("El paciente se ha registrado para ser atendido en el consultorio.");
                listaTurnos.push(paciente);
            }
            //            console.log(paciente);
            console.log(listaTurnos);
        };

    atenderPaciente = (paciente, box) => {
        if (!consultorio.box) {
            paciente.atendido = true;
            console.log(`El paciente esta siendo atendido en ${box}`);
            box = true;
            this.box1 = true;
            listaBox1.push(paciente);
        } else {
            console.log(`No hay consultorio disponible para atención`);
        }
    }     
  };
    
    
    
    ///EJECUCION DEL PROGRAMA.
    //CREA EL CONSULTORIO.
    const consultorio = new Edificio();
    
    console.log("Objecto Consultorio")
    console.log(consultorio);
    
    //INGRESA LOS TURNOS DEL DIA.
    consultorio.registroDiario();
    
    //PRIMER PACIENTE PASA DE LISTA DE TURNOS A LISTA DE ESPERA.
   listaTurnos[0].ingresar(listaTurnos[0]);
   console.log("Lista de Turnos:")

   console.log(listaTurnos);
    
    console.log("Lista de pacientes:")
    console.log(listaPacientes);

    listaTurnos[0].egresar(listaTurnos[0]);

    console.log("Lista de pacientes:")
    console.log(listaPacientes);
    console.log("Lista de Turnos:")
    console.log(listaTurnos);

    
    consultorio.atenderPaciente(listaPacientes[0], consultorio.box1);
    
    console.log("box1 true o false? ")
    console.log(consultorio.box1);
    console.log("array box 1");
    console.log(listaBox1);


    console.log(consultorio);




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

    atender() {

    }

    ingresar() {
        if (this.ingresado != true) {
                this.ingresado = true;
                this.retirado = false;
                console.log("El doctor ha llegado.")
            } else {
                console.log("El doctor ya se encuentroba en el centro.")
            }
    };

    egresar() {
        if (this.retirado != true) {
            this.retirado = true;
            this.ingresado = false;
            console.log("El doctor se ha retirado.")
        } else {
            console.log("El doctor no esta en el centro.")
        }
    };
};




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