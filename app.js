//PAGINA WEB PARA GESTIONAR LA ATENCIÓN DE UN CONSULTORIO MEDICO.

//INICIO LISTA DE ARRAYS.

let listaTurnos = []; // TURNOS DEL DIA.
let listaPacientes = []; // INGRESOS AL CENTRO MEDICO
let listaBox1 = []; // INGRESO AL CONSULTORIO.

//FIN LISTA DE ARRAYS.


//------------------INICIO PACIENTE--------------------
//FUNCCIONALIDADES PACIENTE: SOLICITAR TURNO.
//INGRESADO: LLEGO AL CENTRO. ATENDIDO: ESTA SIENDO ATENDIDO POR EL DOCTOR. RETIRADO: SE RETIRO DEL CENTRO. 

//DEFINIR LA CLASE PARA CREAR UN PACIENTE QUE SE ATENDERA EN CENTRO MEDICO
class Paciente {
    constructor (nombre, dni, apellido, email, doctor, cobertura) {
        this.nombre = nombre,
        this.dni = dni,
        this.apellido = apellido,
        this.email = email,
        this.doctor = doctor,
        this.cobertura = cobertura,
        this.ingresado = false,
        this.atendido = false,
        this.retirado = false
    };
    
//FUNCION PARA REGISTRAR EL INGRESO Al CENTRO MEDICO
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
    
//FUNCION PARA REGISTRAR EL EGRESO DEL CENTRO MEDICO
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

//FUNCION PARA RESERVAR TURNO
//  reservarTurno(){
// por parametro se ingresa: doctor, fecha, hora
//         if ( disponible = false){
//                 alert("El turno se encuentra ocupado. Elija otro turno.")
//             } else {
//                     alert("El turno fue reservado con exito.")
//                 }
//             }
        
//         };

//--------------FIN PACIENTE------------------
            

//--------------INICIO CENTRO MEDICO----------
//CLASE CREACION DE EDIFICIO. GENERA CONSULTORIOS Y LISTA DE TURNOS DE LOS PACIENTES QUE ASISTIRAN ESE DÍA.
//FUNCIONALIDAD EDIFICIO :MOSTRAR LOS PACIENTES PENDIENTES DE ATENCIÓN - MOSTRAR TIEMPO APROXIMADO PARA TERMINAR LAS CONSULTAS
//MOSTRAR CONSULTORIOS DISPONIBLES.
//MOSTRAR LOS PACIENTES EN FILA POR MEDICO
//MOSTRAR EL TIEMPO DE ESPERA ESTIMADO PARA SER ATENDIDO
//RESERVAR TURNO PROXIMA VISITA
//CANTIDAD DE PERSONAS DENTRO DEL CENTRO.
//VALIDAR OBRAS SOCIALES PERMITIDAS
//PERSONAL ADMINISTRATIVO.
//MANEJO DE CAJA.

class Edificio {
        constructor () {
            this.box1 = false;
            this.box2 = false;
            this.box3 = false;
        };
                
        //REGISTROS TURNOS DEL DIA. 
        registroDiario = () => {
            for (let i = 0; i < 3; i++) {
                const paciente = new Paciente (
                    prompt("Ingrese el nombre del paciente:"),
                    prompt("Ingrese el dni del paciente:"),
                    //prompt("Ingrese el apellido del paciente:"),
                    //prompt("Ingrese el mail del paciente:"),
                    //prompt("Ingrese el medico del paciente:"),
                    //prompt("ingrese la cobertura del paciente:")
                    );
                    
                    alert(`El paciente ${paciente.nombre} se ha registrado para ser atendido en el consultorio.`);
                    
                    //ingreso las cargas de los pacientes en la lista de turnos del día.
                    listaTurnos.push(paciente);
                };
                
                console.log(`PACIENTES QUE ASISTIRAN HOY AL CONSULTORIO.`)
                console.log(listaTurnos);
                alert(`El primer paciente es ${listaTurnos[0].nombre} `);
            };
            
            //INGRESO DEL PACIENTE AL BOX.    
        iniciarConsulta = (paciente, box) => {
            let room;
            
            if (box == consultorio.box1){
                room = "Consultorio 1."
            } else {
                room = "Consultorio 2."
            };
            
            if (!consultorio.box) {
                paciente.atendido = true;
                this.box1 = true;
                listaBox1.push(paciente);
                //listaTurnos.shift(paciente); 

                console.log(`El paciente ${paciente.nombre} esta siendo atendido en ${room}`);
                
                //MODIFICO EL CONSULTORIO A OCUPADO.
                
                
            } else {
                console.log(`No hay consultorio disponible para atención`);
            }
        }  
        
        //EGRESO DEL PACIENTE DEL BOX.    
        finalizarConsulta = (paciente) => {
                 
                paciente.atendido = false;
                this.box1 = false;
                
                //saco al paciente del array del box.
                listaBox1.shift(paciente); 
                
                console.log(`------------`);
                console.log(`El paciente ${paciente.nombre} finalizó su consulta.`);
                
                //MODIFICO EL CONSULTORIO A OCUPADO.
                
                
            } 
        };     
    
    /*------------------INICIO DE DOCTOR---------------------
    
    //DEFINIR LA CLASE PARA HABILITAR UN MEDICO AL CENTRO MEDICO
    class Doctor {
        constructor ( apellido, dni, email, doctor, cobertura) {
            this.apellido = apellido,
            this.dni = dni,
            this.cobertura = cobertura,
            this.ingresado = false,
            this.atendiendo = false,
            this.retirado = true
        };
        
        
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
    
    //------------------FIN DE DOCTOR---------------------*/
    
    // //------------------INICIO DE EJECUCIONES---------------------
    //             EJECUCION DEL PROGRAMA.
    //             CREA EL CONSULTORIO.
                const consultorio = new Edificio();
                console.log("Objecto Consultorio")
                console.log(`---------------------------`)
                console.log(consultorio);
                
    //             INGRESA LOS TURNOS DEL DIA.
                consultorio.registroDiario();
                
    //INGRESO DE PACIENTES AL CENTRO MEDICO Y LISTA DE ESPERA.
    
    // PRIMER PACIENTE PASA DE LISTA DE TURNOS A LISTA DE ESPERA.
    listaTurnos[0].ingresar(listaTurnos[0]);
    listaTurnos[2].ingresar(listaTurnos[2]);
    listaTurnos[1].ingresar(listaTurnos[1]);
    
    // IMPRIMO LISTA CON ORDEN DE ATENCIÓN.
    
    console.log("Lista de espera:");
    console.log(`------------------`);
    console.log(listaPacientes);
    
    
    // INGRESO DEL PACIENTE AL CONSULTORIO.
    
     consultorio.iniciarConsulta(listaPacientes[0], consultorio.box1);
    
    console.log(`------------------`);
    console.log("Pacientes en Consultorio");
    console.log(listaBox1);
    console.log(`Lista de espera.`)
    console.log(listaTurnos);
    
    console.log("Objecto Consultorio")
    console.log(`---------------------------`)
    console.log(consultorio);

    consultorio.finalizarConsulta(listaPacientes[0], consultorio.box1);
    


    console.log("Objecto Consultorio")
    console.log(`---------------------------`)
    console.log(consultorio);

    


    // ------------------FIN DE INICIACIONES---------------------
            