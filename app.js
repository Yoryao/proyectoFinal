//PAGINA WEB PARA GESTIONAR LA ATENCIÓN DE UN CONSULTORIO MEDICO.
$(() => {
  console.log("DOM ready");
});

//INICIO LISTAS DE ARRAYS.
let listaTurnos = []; // TURNOS DEL DIA.
//PACIENTES REGISTRADOS POR CONSULTORIO
let listaPacientes2 = []; 
let listaPacientes3 = [];
let listaPacientes = [];
//PACIENTES EN EL CONSULTORIO
let listaBox1 = []; 
let listaBox2 = []; 
let listaBox3 = []; 


//FUNCIONES DEL HEADER. ==> //INSERTAR FECHA Y HORA
function date() {
  $("#date").text(`Fecha: ${new Date().toLocaleDateString()}`);
  $("#hour").text(`Hora: ${new Date().toLocaleTimeString()}`);
};
//==>INTERVALO DE LA FUNCION DATE PARA FUNCIONAMIENTO DEL RELOJ.
setInterval(date, 1000);
//==>MODIFICO EL DOM INFORMANDO LO REALIZADO.
function mostrarDisplay(msg) {
  $("#display").text(msg)
  .slideDown(2000)
  .delay(4000)
  .slideUp(4000);

};
//==>MOSTRAR USUARIO LOGUEADO
$(() => {
  $("#user").text(`Usuario: ${JSON.parse(localStorage.getItem("usuario"))}`);
});


//------------------INICIO PACIENTE--------------------
//DEFINIR LA CLASE PARA CREAR UN PACIENTE QUE SE ATENDERA EN CENTRO MEDICO
class Paciente {
  constructor(nombre, dni, apellido, doctor, cobertura) {
    (this.nombre = nombre),
    (this.dni = dni),
      (this.apellido = apellido),
      (this.doctor = doctor),
      (this.cobertura = cobertura)
  };
};

//------------------INICIO DE DOCTOR-----------------------------
//DEFINIR LA CLASE PARA HABILITAR UN MEDICO AL CENTRO MEDICO
class Doctor {
  constructor(nombre, apellido, dni, box, cobertura) {
    (this.nombre = nombre),
    (this.apellido = apellido),
    (this.dni = dni),
    (this.box = box),
    (this.cobertura = cobertura)
  };
};

//EVENTO DEL USUARIO PARA CREAR EL PACIENTE.
$("#ingresar").click(function (e) {
  e.preventDefault();

  let nombre = $("#nombrePac").val();
  let dni = parseInt($("#dniPac").val());
  let apellido = $("#apellidoPac").val();
  let doctor = parseInt($("#doctorPac").val());
  let cobertura = $("#coberturaPac").val();

  //INVOCO AL CONSTRUCTOR.
  const paciente = new Paciente(nombre, dni, apellido, email, doctor, cobertura);

  // //MODIFICO EL DOM INFORMANDO LO REALIZADO.
  mostrarDisplay(`El paciente ${paciente.nombre} se ha registrado para ser atendido en el consultorio N° ${paciente.doctor}.`
  );

  //CARGO AL PACIENTE A LA LISTA DE ESPERA ACORDE EL DOCTOR ELEGIDO.
  switch (paciente.doctor) {
    case 1:
      listaPacientes.push(paciente);
      break;
    case 2:
      listaPacientes2.push(paciente);
      console.log(listaPacientes2);
      break;
    case 3:
      listaPacientes3.push(paciente);
      console.log(listaPacientes3);
      break;
    default:
      break;
  };
});



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
  // //MODIFICO EL DOM INFORMANDO LO REALIZADO.
  mostrarDisplay(
    `El Doctor ${doctor.apellido} se ha registrado para atender en el box ${doctor.box}.`
  );
//AGREGO EL NOMBRE DEL DOCTOR AL SELECT DE CREACIÓN DE PACIENTE.
  switch (box) {
    case "1":
      $("#selectDoctor1").text(apellido);
      break;
    case "2":
      $("#selectDoctor2").text(apellido);
      break;
    case "3":
      $("#selectDoctor3").text(apellido);
      break;
  };
  //AGREGO EL NOMBRE DEL DOCTOR AL BOX ELEGIDO.
  $(`#doctor${box}`).text(`Dr. ${doctor.nombre} ${doctor.apellido}`);
});


//FUNCIONALIDAD BOX 1

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
//EVENTO DEL USUARIO PARA CREAR LISTA DE ESPERA.
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
  listaPacientes.splice(listaPacientes.indexOf(remover), 1);
  refrescar();
};

//FUNCION LIBERAR CONSULTORIO
$("#liberar1").click(function () {
  $("#consultorioOcupado1").text("CONSULTORIO VACIO");
  listaBox1.shift();
});

//FIN FUNCIONALIDAD BOX 1

//FUNCIONALIDAD BOX 2

const refrescar2 = () => {
  $("#medico2").empty();

  listaPacientes2.forEach((paciente) => {
    $("#medico2").append(`
    <p>${paciente.nombre}</p>
    <p> ${paciente.apellido}</p>
    <button id="ing2${paciente.dni}"  
    class="btn-ing-con">INGRESAR</button>
    <button id="sal2${paciente.dni}"
    class="btn-can-con">CANCELAR</button>    
    `);

    $(`#ing2${paciente.dni}`).on("click", () => {
      ingresar2(paciente.dni);
    });

    $(`#sal2${paciente.dni}`).on("click", () => {
      egresar2(paciente.dni);
    });
  });
};

let btnRefresh2 = document.getElementById("refresh2");
btnRefresh2.addEventListener("click", refrescar2);

const ingresar2 = (dni) => {
  const paciente2 = listaPacientes2.find((paciente) => paciente.dni === dni);
  listaBox2.push(paciente2);
  $("#consultorioOcupado2").text(`${paciente2.nombre} ${paciente2.apellido}`);
  listaPacientes2.splice(listaPacientes2.indexOf(paciente2), 1);
  refrescar2();
};

const egresar2 = (dni) => {
  const remover2 = listaPacientes2.find((paciente) => paciente.dni === dni);
  listaPacientes2.splice(listaPacientes2.indexOf(remover2), 1);
  refrescar2();
};

$("#liberar2").click(function () {
  $("#consultorioOcupado2").text("CONSULTORIO VACIO");
  listaBox2.shift();
});

//FIN FUNCIONALIDAD BOX 2

//FUNCIONALIDAD BOX 3

const refrescar3 = () => {
  $("#medico3").empty();

  listaPacientes3.forEach((paciente) => {
    $("#medico3").append(`
    <p>${paciente.nombre}</p>
    <p> ${paciente.apellido}</p>
    <button id="ing3${paciente.dni}"  
    class="btn-ing-con">INGRESAR</button>
    <button id="sal3${paciente.dni}"
    class="btn-can-con">CANCELAR</button>    
    `);

    $(`#ing3${paciente.dni}`).on("click", () => {
      ingresar3(paciente.dni);
    });

    $(`#sal3${paciente.dni}`).on("click", () => {
      egresar3(paciente.dni);
    });
  });
};

let btnRefresh3 = document.getElementById("refresh3");
btnRefresh3.addEventListener("click", refrescar3);

const ingresar3 = (dni) => {
  const paciente3 = listaPacientes3.find((paciente) => paciente.dni === dni);
  listaBox3.push(paciente3);
  $("#consultorioOcupado3").text(`${paciente3.nombre} ${paciente3.apellido}`);
  listaPacientes3.splice(listaPacientes3.indexOf(paciente3), 1);
  refrescar3();
};

const egresar3 = (dni) => {
  const remover3 = listaPacientes3.find((paciente) => paciente.dni === dni);
  listaPacientes3.splice(listaPacientes3.indexOf(remover3), 1);
  refrescar3();
};

$("#liberar3").click(function () {
  $("#consultorioOcupado3").text("CONSULTORIO VACIO");
  listaBox3.shift();
});
