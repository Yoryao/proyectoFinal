//PAGINA WEB PARA GESTIONAR LA ATENCIÓN DE UN CONSULTORIO MEDICO.

//MOSTRAR USUARIO LOGUEADO
$(() => {
  $("#user").text(`Usuario: ${JSON.parse(localStorage.getItem("usuario"))}`);
});

//INICIO LISTAS DE ARRAYS.
let listaTurnos = []; // TURNOS DEL DIA.
let listaPacientes = [
  {
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
  },
]; // INGRESOS AL CENTRO MEDICO
let listaBox1 = []; // INGRESO AL CONSULTORIO.
let listaCoberturas = []; //COBERTURAS PERMITIDAS.

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

class Edificio {
  constructor() {
    this.box1 = false;
    this.box2 = false;
    this.box3 = false;
  }
}

//------------------INICIO DE DOCTOR-----------------------------
//DEFINIR LA CLASE PARA HABILITAR UN MEDICO AL CENTRO MEDICO
class Doctor {
  constructor(nombre, apellido, dni, box, cobertura) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.dni = dni),
      (this.box = box),
      (this.cobertura = cobertura),
      (this.atendiendo = false);
  }
}

// //EVENTO DEL USUARIO PARA CREAR EL DOCTOR.
$("#ingresarDoc").click(function () {
  //CAPTURO VALORES DESDE EL FORMULARIO.
  let nombre = $("#nombreDoc").val();
  let apellido = $("#apellidoDoc").val();
  let dni = $("#dniDoc").val();
  let box = $("#boxDoc").val();
  let cobertura = $("#coberturaDoc").val();

  //INVOCO AL CONSTRUCTOR.
  const doctor = new Doctor(nombre, apellido, dni, box, cobertura);

  mostrarDisplay(
    `El Doctor ${doctor.apellido} se ha registrado para atender en el box ${doctor.box}.`
  );

  $(`#doctor${box}`).text(`Dr. ${doctor.nombre} ${doctor.apellido}`);
  console.log(doctor);
});

//EVENTO DEL USUARIO PARA CREAR EL PACIENTE.
/*
tenia el siguiente problema... .los pacientes pre cargados en el array, con dni number, podian ingresar sin problema en ingresarConsultorio(dni). Pero los que creaba con el constructor y formulario, se creaban bien, se agregaban a listaPacientes[], pero no se ejecutaban en ingresarConsultorio(). dando error "Uncaught TypeError: Cannot read property 'nombre' of undefined". esto lo corregi con suerte, poniendo el campo dni en texto en el form, y parseando el valor cuando lo capturo.*/

$("#ingresar").click(function (e) {
  e.preventDefault();

  let nombre = $("#nombrePac").val();
  let dni = parseInt($("#dniPac").val());
  let apellido = $("#apellidoPac").val();
  let email = $("#emailPac").val();
  let doctor = $("#doctorPAc").val();
  let cobertura = $("#coberturaPac").val();

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
});

//FUNCION LIBERAR CONSULTORIO
$("#liberar1").click(function () {
  console.log(listaBox1[0])
  $("#consultorioOcupado1").text("CONSULTORIO VACIO");
  listaBox1.shift();
});

//CREA LA LISTA DE ESPERA EN BASE A LOS PACIENTES INGRESADOS

const refrescar = () => {
  $("#medico1").empty();

  listaPacientes.forEach((paciente) => {
    $("#medico1").append(`
    <p>${paciente.nombre}</p>
    <p> ${paciente.apellido}</p>
    <button id="ing${paciente.dni}"  
    class="btn-ing-con">INGRESAR</button>
    <button id="sal${paciente.dni}"
    class="btn-can-con">CANCELAR</button>    
    `);

    $(`#ing${paciente.dni}`).on("click", () => {
      ingresar(paciente.dni);
    });

    $(`#sal${paciente.dni}`).on("click", () => {
      egresar(paciente.dni);
    });
  });
};
// //EVENTO DEL USUARIO PARA CREAR LISTA DE ESPERA.
let btnRefresh1 = document.getElementById("refresh1");
btnRefresh1.addEventListener("click", refrescar);

const ingresar = (dni) => {
  const paciente = listaPacientes.find((paciente) => paciente.dni === dni);

  listaBox1.push(paciente);

  $("#consultorioOcupado1").text(`${paciente.nombre} ${paciente.apellido}`);
  listaPacientes.splice(listaPacientes.indexOf(paciente), 1);
  refrescar();
};

const egresar = (dni) => {
  const remover = listaPacientes.find((paciente) => paciente.dni === dni);
  console.log(remover);
  listaPacientes.splice(listaPacientes.indexOf(remover), 1);

  refrescar();
};

//INSERTAR FECHA Y HORA
function date() {
  $("#date").text(new Date().toDateString());
  $("#hour").text(new Date().toLocaleTimeString());
}

//INTERVALO DE LA FUNCION DATE PARA FUNCIONAMIENTO DEL RELOJ.
setInterval(date, 1000);

//MODIFICO EL DOM INFORMANDO LO REALIZADO.
function mostrarDisplay(msg) {
  $("#display").text(msg);
}
