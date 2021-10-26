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
//FUNCCIONALIDADES PACIENTE: SOLICITAR TURNO.
//INGRESADO: LLEGO AL CENTRO. ATENDIDO: ESTA SIENDO ATENDIDO POR EL DOCTOR. RETIRADO: SE RETIRO DEL CENTRO.

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

//------------------FIN DE DOCTOR--------------------------------

//------------------INICIO DE VERIFICACIONES---------------------

// ------------------FIN DE VERIFICACIONES-----------------------

//-------------EJECUCIONES DE VISUALIZACIÓN DE LA APLICACIÓN-----

//DECLARO UNA FUNCION QUE CARGA DATOS AL DOM PARA INFORMAR EL STATUS DE LA APP.(FECHA, HORA, USER)
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
statusApp();

//DECLARO LA FUNCIÓN QUE CREA EL PACIENTE NUEVO INVOCANDO AL CONSTRUCTOR.
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
  console.log(listaPacientes);
}

//EVENTO DEL USUARIO PARA CREAR EL PACIENTE.
let regButton = document.getElementById("ingresar");
regButton.addEventListener("click", ingresarPaciente);

const listaEspera = document.getElementById("medico1");

listaPacientes.forEach((paciente) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `${paciente.nombre}`;
  const btn = document.createElement("button");
  btn.id = `${paciente}`;
  btn.innerText = "Remover";

  listaEspera.append(tr);
  listaEspera.append(btn);
});
