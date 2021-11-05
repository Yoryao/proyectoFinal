//PAGINA WEB PARA GESTIONAR LA ATENCIÓN DE UN CONSULTORIO MEDICO.

//INICIO LISTAS DE ARRAYS.

let listaTurnos = []; // TURNOS DEL DIA.
let listaPacientes = [
  /*{
    nombre: "Andy ",
    dni: 11111111,
    apellido: "Dufresne",
  },
  {
    nombre: "John",
    dni: 22222222,
    apellido: "Coffey",
  },
  {
    nombre: "Eddie",
    dni: 33333333,
    apellido: "Dupris",
  },
  {
    nombre: "Billy",
    dni: 44444444,
    apellido: "Chapel",
  }*/
]; // INGRESOS AL CENTRO MEDICO
let listaBox1 = []; // INGRESO AL CONSULTORIO.
let listaCoberturas = []; //COBERTURAS PERMITIDAS.

//FIN LISTA DE ARRAYS


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
}

//--------------FIN PACIENTE------------------

//--------------INICIO CENTRO MEDICO----------
//CLASE CREACION DE EDIFICIO. GENERA CONSULTORIOS Y LISTA DE TURNOS DE LOS PACIENTES QUE ASISTIRAN ESE DÍA.
//MOSTRAR TIEMPO APROXIMADO PARA TERMINAR LAS CONSULTAS Y EL TIEMPO DE ESPERA ESTIMADO PARA SER ATENDIDO
//VALIDAR OBRAS SOCIALES PERMITIDAS

class Edificio {
  constructor() {
    this.box1 = false;
    this.box2 = false;
    this.box3 = false;
  }
}

//------------------FIN CENTRO MEDICO----------------------------

//------------------INICIO DE DOCTOR-----------------------------

//DEFINIR LA CLASE PARA HABILITAR UN MEDICO AL CENTRO MEDICO
class Doctor {
  constructor(nombre, apellido, dni, consultorio, cobertura) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.dni = dni),
      (this.consultorio = consultorio),
      (this.cobertura = cobertura),
      (this.atendiendo = false);
  }
};

//------------------FIN DE DOCTOR--------------------------------

//-------------EJECUCIONES DE VISUALIZACIÓN DE LA APLICACIÓN-----
//-------INVOCADAS POR EVENTOS

//CREAR NUEVO DOCTOR
//DECLARO LA FUNCIÓN QUE CREA EL DOCTOR NUEVO INVOCANDO AL CONSTRUCTOR.
function ingresarDoctor() {
  //CAPTURO VALORES DESDE EL FORMULARIO.
  let nombre = document.getElementById("nombreDoc").value;
  let apellido = document.getElementById("apellidoDoc").value;
  let dni = document.getElementById("dniDoc").value;
  let box = document.getElementById("boxDoc").value;
  let cobertura = document.getElementById("coberturaDoc").value;

  //INVOCO AL CONSTRUCTOR.
  const doctor = new Doctor(nombre, apellido, dni, box, cobertura);

  mostrarDisplay(
    `El Doctor ${doctor.apellido} se ha registrado para atender en el box ${doctor.consultorio}.`
  );

  const adviceBox = document.getElementById(`doctor${box}`);
  adviceBox.innerText = `Dr. ${doctor.nombre} ${doctor.apellido}`;
}

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
  console.log(listaPacientes);
};

//ELIMINIO EL PACIENTE DEL BOX
const vaciarBox = () => {
  listaBox1 = [];
  let atendiendo1 = document.getElementById("consultorioOcupado1");
  atendiendo1.innerText = "CONSULTORIO VACIO";
};

//tenia el siguiente problema... .los pacientes pre cargados en el array, con dni number, podian ingresar sin problema en ingresarPaciente().
//Pero los que creaba con el constructor y formulario, se creaban bien, se agregaban a listaPacientes[], pero no se ejecutaban en
//ingresarPaciente(). esto lo corregi con suerte, poniendo el campo dni en texto en el form, y parseando el valor cuando lo capturo.

//FUNCION CREAR PACIENTE
function ingresarPaciente() {
  //CAPTURO VALORES DESDE EL FORMULARIO.
  let nombre = document.getElementById("nombrePac").value;
  let dni = parseInt(document.getElementById("dniPac").value);
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

  // //MODIFICO EL DOM INFORMANDO LO REALIZADO.

  mostrarDisplay(
    `El paciente ${paciente.nombre} se ha registrado para ser atendido en el consultorio.`
  );

  //CARGO AL PACIENTE A LA LISTA DE ESPERA.
  listaPacientes.push(paciente);

  console.log(listaPacientes);
}

//PROMOCION DE LISTA DE ESPERA A CONSULTORIO
const ingresarConsultorio = (dni) => {
  const paciente = listaPacientes.find((paciente) => paciente.dni === dni);

  listaBox1.push(paciente);
  console.log("paciente: " + paciente);
  console.log("Lista Box1" + listaBox1);
  let pacienteNyA = `${paciente.nombre} ${paciente.nombre}`;

  let atendiendo1 = document.getElementById("consultorioOcupado1");
  atendiendo1.innerText = pacienteNyA;

  const remover = listaPacientes.find((paciente) => paciente.dni === dni);
  listaPacientes.splice(listaPacientes.indexOf(remover), 1);

  actualizarEspera();
};

//REMOCION DE LISTA DE ESPERA
const cancelarConsultorio = (dni) => {
  const remover = listaPacientes.find((paciente) => paciente.dni === dni);
  console.log(remover);
  listaPacientes.splice(listaPacientes.indexOf(remover), 1);

  actualizarEspera();
};

//EVENTO DEL USUARIO PARA CREAR EL PACIENTE.
let regButton = document.getElementById("ingresar");
regButton.addEventListener("click", ingresarPaciente);

//EVENTO DEL USUARIO PARA CREAR EL DOCTOR.
let btnIngresarDoc = document.getElementById("ingresarDoc");
btnIngresarDoc.addEventListener("click", ingresarDoctor);

//EVENTO DEL USUARIO PARA CREAR LISTA DE ESPERA.
let btnRefresh1 = document.getElementById("refresh1");
btnRefresh1.addEventListener("click", actualizarEspera);

//EVENTO DEL USUARIO PARA LIBERAR CONSULTORIO.
let btnVaciarConsultorio1 = document.getElementById("liberar1");
btnVaciarConsultorio1.addEventListener("click", vaciarBox);

//DECLARO UNA FUNCION QUE CARGA DATOS AL DOM PARA INFORMAR EL STATUS DE LA APP.(FECHA, HORA, USER)
function date() {
  //INSERTAR FECHA
  const hora = document.getElementById("date");
  hora.innerText = new Date().toDateString();

  //INSERTAR HORA
  const fecha = document.getElementById("hour");
  fecha.innerText = new Date().toLocaleTimeString();
}

//INTERVALO DE LA FUNCION STATUS PARA FUNCIONAMIENTO DEL RELOJ.
setInterval(date, 1000);

//MOSTRAR USUARIO LOGUEADO
function usuarioLogeado() {
  //INSERTAR USUARIO
  let user = document.getElementById("user");
  let logeado = JSON.parse(localStorage.getItem("usuario"));
  user.innerText = `Usuario: ${logeado}`;
}

usuarioLogeado();

function mostrarDisplay(msg) {
  //MODIFICO EL DOM INFORMANDO LO REALIZADO. // puedo hacer una función con esto.
  const advice = document.getElementById("display");
  advice.innerText = msg;
}
