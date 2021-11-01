//PAGINA WEB PARA GESTIONAR LA ATENCIÓN DE UN CONSULTORIO MEDICO.

//INICIO LISTA DE ARRAYS.

let listaTurnos = []; // TURNOS DEL DIA.
let listaPacientes = [
  {
    nombre: "jorge",
    dni: 29946811,
    apellido: "Rivera",
  },
  {
    nombre: "Romina",
    dni: 33082251,
    apellido: "Fernandez",
  },
  {
    nombre: "Almita",
    dni: 54996245,
    apellido: "Fernandez Rivera",
  },
  {
    nombre: "Helena",
    dni: 58252869,
    apellido: "Fernandez Rivera",
  },
  {
    nombre: "Iron",
    dni: 25,
    apellido: "Man",
  },
]; // INGRESOS AL CENTRO MEDICO
let listaBox1 = []; // INGRESO AL CONSULTORIO.
let listaCoberturas = []; //COBERTURAS PERMITIDAS.

//FIN LISTA DE ARRAYS.

//------------------INICIO PACIENTE--------------------

//DEFINIR LA CLASE PARA CREAR UN PACIENTE QUE SE ATENDERA EN CENTRO MEDICO
class Paciente {
  constructor(nombre, dni, apellido, email, doctor, cobertura) {
    (this.nombre = nombre),
      (this.dni = dni),
      (this.apellido = apellido),
      (this.email = email),
      (this.doctor = doctor),
      (this.cobertura = cobertura),
      (this.ingresado = false),
      (this.atendido = false),
      (this.retirado = false);
  }

  //FUNCION PARA REGISTRAR EL INGRESO Al CENTRO MEDICO
  ingresar = (index) => {
    if (this.ingresado != true) {
      this.ingresado = true;
      this.retirado = false;
      console.log(`El paciente ${index.nombre} ha ingresado al Centro Médico.`);

      //lo ingreso en la lista de espera del doctor.
      listaPacientes.push(index);
    } else {
      console.log("El paciente ya se encuentra ingresado.");
    }
  };

  //FUNCION PARA REGISTRAR EL EGRESO DEL CENTRO MEDICO
  egresar = (index) => {
    if (this.retirado != true) {
      this.retirado = true;
      this.ingresado = false;
      console.log(
        `El paciente ${index.nombre} se ha retirado del Centro Médico.`
      );

      //lo retiro de la lista de turnos. Esto deberia suceder al ingresar al consultorio.
      listaTurnos.shift(index);
    } else {
      console.log("El paciente no esta en el centro.");
    }
  };
}

//--------------FIN PACIENTE------------------

//--------------INICIO CENTRO MEDICO----------
//CLASE CREACION DE EDIFICIO. GENERA CONSULTORIOS Y LISTA DE TURNOS DE LOS PACIENTES QUE ASISTIRAN ESE DÍA.
//MOSTRAR TIEMPO APROXIMADO PARA TERMINAR LAS CONSULTAS
//MOSTRAR CONSULTORIOS DISPONIBLES.
//MOSTRAR LOS PACIENTES EN FILA POR MEDICO
//MOSTRAR EL TIEMPO DE ESPERA ESTIMADO PARA SER ATENDIDO
//CANTIDAD DE PERSONAS DENTRO DEL CENTRO.
//VALIDAR OBRAS SOCIALES PERMITIDAS
//PERSONAL ADMINISTRATIVO.
//MANEJO DE CAJA.

class Edificio {
  constructor() {
    this.box1 = false;
    this.box2 = false;
    this.box3 = false;
  }

  //INGRESO DEL PACIENTE AL BOX.
  iniciarConsulta = (paciente, box) => {
    let room;

    if (box == consultorio.box1) {
      room = "Consultorio 1.";
    } else {
      room = "Consultorio 2.";
    }

    if (!consultorio.box) {
      paciente.atendido = true;
      this.box1 = true;
      listaBox1.push(paciente);
      //listaTurnos.shift(paciente);

      console.log(
        `El paciente ${paciente.nombre} esta siendo atendido en ${room}`
      );

      //MODIFICO EL CONSULTORIO A OCUPADO.
    } else {
      console.log(`No hay consultorio disponible para atención`);
    }
  };

  //EGRESO DEL PACIENTE DEL BOX.
  finalizarConsulta = (paciente) => {
    paciente.atendido = false;
    this.box1 = false;

    //saco al paciente del array del box.
    listaBox1.shift(paciente);

    console.log(`------------`);
    console.log(`El paciente ${paciente.nombre} finalizó su consulta.`);

    //MODIFICO EL CONSULTORIO A OCUPADO.
  };
}

//------------------FIN CENTRO MEDICO----------------------------

//------------------INICIO DE DOCTOR-----------------------------

// //DEFINIR LA CLASE PARA HABILITAR UN MEDICO AL CENTRO MEDICO
class Doctor {
    constructor ( nombre, apellido, dni, consultorio, cobertura) {
      this.nombre = nombre,  
      this.apellido = apellido,
        this.dni = dni,
        this.consultorio = consultorio,
        this.cobertura = cobertura,
        this.atendiendo = false
    
    };
    
    // ingresar() {
    //     if (this.ingresado != true) {
    //         this.ingresado = true;
    //         this.retirado = false;
    //         console.log("El doctor ha llegado.")
    //     } else {
    //         console.log("El doctor ya se encuentroba en el centro.")
    //     }
    // };
    
    // egresar() {
    //     if (this.retirado != true) {
    //         this.retirado = true;
    //         this.ingresado = false;
    //         console.log("El doctor se ha retirado.")
    //     } else {
    //         console.log("El doctor no esta en el centro.")
    //     }
    // };
};

//------------------FIN DE DOCTOR--------------------------------

//-------------EJECUCIONES DE VISUALIZACIÓN DE LA APLICACIÓN-----


//DECLARO LA FUNCIÓN QUE CREA EL PACIENTE NUEVO INVOCANDO AL CONSTRUCTOR.
function ingresarDoctor() {
  //CAPTURO VALORES DESDE EL FORMULARIO.
  let nombre = document.getElementById("nombreDoc").value;
  let apellido = document.getElementById("apellidoDoc").value;
  let dni = document.getElementById("dniDoc").value;
  let box = document.getElementById("boxDoc").value;
  let cobertura = document.getElementById("coberturaDoc").value;

  //INVOCO AL CONSTRUCTOR.
  const doctor = new Doctor(
    nombre,
    apellido,
    dni,
    box,
    cobertura
    );
    
    //MODIFICO EL DOM INFORMANDO LO REALIZADO.
    const advice = document.getElementById("display");
    const message = `El Doctor ${doctor.apellido} se ha registrado para atender en el ${doctor.consultorio}.`;
    advice.innerText = message;

    const adviceBox = document.getElementById(`doctor${box}`);
    adviceBox.innerText = `Dr. ${doctor.nombre} ${doctor.apellido}`;
    
  };
  
  

  
  //CREA LA LISTA DE ESPERA EN BASE A LOS PACIENTES INGRESADOS
  const actualizarEspera = () => {
    const div = document.getElementById("medico1");
    div.innerHTML = "";
    
    listaPacientes.forEach((paciente) => {
      const lista = document.createElement("div");
      
      lista.className = "pacienteEsperando";
      lista.innerHTML = `
      <p>${paciente.nombre}</p>
      <p> ${paciente.apellido}</p>
      <button onclick="ingresarConsultorio(${paciente.dni})" 
      class="btn-ing-con">INGRESAR</button>
      <button onclick="cancelarConsultorio(${paciente.dni})"
      class="btn-can-con">CANCELAR</button>    
      `;
      div.appendChild(lista);
    });
  };
  
  const vaciarBox = () => {
    listaBox1 = [];
    let atendiendo1 = document.getElementById("consultorioOcupado1");
    atendiendo1.innerText = "CONSULTORIO VACIO";
  };
  
  
  //PROMOCION DE LISTA DE ESPERA A CONSULTORIO
  const ingresarConsultorio = (dni) => {
    const paciente = listaPacientes.find((paciente) => paciente.dni === dni);
    listaBox1.push(paciente.nombre);
    let pacienteNyA = `${paciente.nombre} ${paciente.apellido}`;
    
  const remover = listaPacientes.find((paciente) => paciente.dni === dni);
  listaPacientes.splice(listaPacientes.indexOf(remover), 1);
  
  let atendiendo1 = document.getElementById("consultorioOcupado1");
  atendiendo1.innerText = pacienteNyA;
  
  actualizarEspera();
};

//EVENTO DEL USUARIO PARA CREAR EL PACIENTE.
let regButton = document.getElementById("ingresar");
regButton.addEventListener("click", ingresarPaciente);

let btnIngresarDoc = document.getElementById("ingresarDoc");
btnIngresarDoc.addEventListener("click", ingresarDoctor);

let btnRefresh1 = document.getElementById("refresh1");
btnRefresh1.addEventListener("click", actualizarEspera);

let btnVaciarConsultorio1 = document.getElementById("liberar1");
btnVaciarConsultorio1.addEventListener("click", vaciarBox);

//DECLARO UNA FUNCION QUE CARGA DATOS AL DOM PARA INFORMAR EL STATUS DE LA APP.(FECHA, HORA, USER)
let reloj;

function statusApp() {
  //INSERTAR HORA
  const hora = document.getElementById("date");
  hora.innerText = new Date().toDateString();
  
  //INSERTAR HORA
  const fecha = document.getElementById("hour");
  fecha.innerText = new Date().toLocaleTimeString();
  
  //INSERTAR USUARIO
  const user = document.getElementById("user");
  user.innerText = localStorage.getItem("userLogged"); //ESTO LO TENGO QUE TRAER DESDE EL LOGIN.
}

function relojNav(){
  let reloj = setTimeout(statusApp, 1000);
};
relojNav();

function ingresarPaciente() {
  //CAPTURO VALORES DESDE EL FORMULARIO.
  let nombre = document.getElementById("nombrePac").value;
  let dni = document.getElementById("dniPac").value;
  let apellido = document.getElementById("apellidoPac").value;
  let email = document.getElementById("emailPac").value;
  let doctor = document.getElementById("doctorPac").value;
  let cobertura = document.getElementById("coberturaPac").value;

  //INVOCO AL CONSTRUCTOR.
  const paciente = new Paciente(
    nombre,
    dni,
    apellido,
    email,
    doctor,
    cobertura
    );
    
    //MODIFICO EL DOM INFORMANDO LO REALIZADO.
    const advice = document.getElementById("display");
    const message = `El paciente ${paciente.nombre} se ha registrado para ser atendido en el consultorio.`;
    advice.innerText = message;
    
    //CARGO AL PACIENTE A LA LISTA DE ESPERA.
    listaPacientes.push(paciente);

    console.log(listaPacientes)
    };