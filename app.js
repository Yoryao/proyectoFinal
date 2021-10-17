//PAGINA WEB PARA GESTIONAR LA ATENCIÓN DE UN CONSULTORIO MEDICO.

//DEFINIR LA CLASE PARA CREAR UN PACIENTE QUE SE ATENDERA EN CENTRO MEDICO
//INGRESADO: LLEGO AL CENTRO. ATENDIDO: ESTA SIENDO ATENDIDO POR EL DOCTOR. RETIRADO: SE RETIRO DEL CENTRO. 
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
        this.retirado = false
    }

    //FUNCION PARA REGISTRAR EL INGRESO A CONSULTORIO
    ingresar = (index) => {
        if (this.ingresado != true) {
                this.ingresado = true;
                this.retirado = false;
                console.log(`El paciente ${index.nombre} ha ingresado al Centro Médico.`);
                
                //lo ingreso en la lista de espera del doctor.
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
            console.log(`El paciente ${index.nombre} se ha retirado del Centro Médico.`);
         
            //lo retiro de la lista de turnos. Esto deberia suceder al ingresar al consultorio. 
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

//INICIO LISTA DE ARRAYS.

let listaTurnos = []; // TURNOS DEL DIA.

let listaPacientes = []; // INGRESOS AL CENTRO MEDICO

let listaBox1 = []; // INGRESO AL CONSULTORIO.

//FUNCION INICIADORA QUE REALIZA LA CARGA INICIAL POR CONSOLA
// DE LOS PACIENTES QUE SE ATENDERAN ESE DIA EN EL CONSULTORIO.
// NO IMPLICA QUE HAYAN INGRESADO AL CONSULTORIO.

//CLASE CREACION DE EDIFICIO. GENERA CONSULTORIOS Y LISTA DE TURNOS DE LOS PACIENTES QUE ASISTIRAN ESE DÍA.
class Edificio {
    constructor () {
        this.box1 = false;
        this.box2 = false;
    };
    
    //REGISTROS TURNOS DEL DIA. 
    registroDiario = () => {
        for (let i = 0; i < 3; i++) {
            const paciente = new Paciente (
                prompt("Ingrese el nombre del paciente:"),
               // prompt("Ingrese el apellido del paciente:"),
                prompt("Ingrese el dni del paciente:"),
                //prompt("Ingrese el mail del paciente:"),
                //prompt("Ingrese el medico del paciente:"),
                //prompt("ingrese la cobertura del paciente:")
                );
             
                alert(`El paciente ${paciente.nombre} se ha registrado para ser atendido en el consultorio.`);
                
                //ingreso las cargas de 3 pacientes en la lista de turnos del día.
                listaTurnos.push(paciente);
            }

            console.log(`PACIENTES QUE ASISTIRAN HOY AL CONSULTORIO.`)
            console.log(listaTurnos);
        };

    //INGRESO DEL PACIENTE AL BOX.    
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
    
    
    
    //------------------INICIO DE EJECUCIONES---------------------
    ///EJECUCION DEL PROGRAMA.
    //CREA EL CONSULTORIO.
    const consultorio = new Edificio();
    console.log("Objecto Consultorio")
    console.log(consultorio);
    console.log(`---------------------------`)

    //INGRESA LOS TURNOS DEL DIA.
    consultorio.registroDiario();

  /*  

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
*/
    //------------------FIN DE INICIACIONES---------------------



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