    // //DEFINIR LA CLASE PARA HABILITAR UN MEDICO AL CENTRO MEDICO
    // class Doctor {
    //     constructor ( apellido, dni, email, doctor, cobertura) {
    //         this.apellido = apellido,
    //         this.dni = dni,
    //         this.cobertura = cobertura,
    //         this.ingresado = false,
    //         this.atendiendo = false,
    //         this.retirado = true
    //     };
        
        
    //     ingresar() {
    //         if (this.ingresado != true) {
    //             this.ingresado = true;
    //             this.retirado = false;
    //             console.log("El doctor ha llegado.")
    //         } else {
    //             console.log("El doctor ya se encuentroba en el centro.")
    //         }
    //     };
        
    //     egresar() {
    //         if (this.retirado != true) {
    //             this.retirado = true;
    //             this.ingresado = false;
    //             console.log("El doctor se ha retirado.")
    //         } else {
    //             console.log("El doctor no esta en el centro.")
    //         }
    //     };
    // };

        

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

//FUNCION PARA REGISTRAR EL INGRESO Al CENTRO MEDICO
  //OBSOLETO
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
  //OBSOLETO
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