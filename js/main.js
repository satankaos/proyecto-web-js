window.addEventListener('load', () => {
  const form = document.querySelector('#form');
  const usuario = document.getElementById('usuario')
  const nombre = document.getElementById('nombre')
  const dni = document.getElementById('dni')
  const apellido = document.getElementById('apellidos')
  const correo = document.getElementById('correo')
  const contraseña = document.getElementById('contraseña')
  const c2 = document.getElementById('repetir_contraseña')
  const telefono = document.getElementById('telefono')
  const IBAN = document.getElementById('IBAN')
  const SWIFT = document.getElementById('SWIFT')
  const fecha_nacimiento = document.getElementById('fecha_nacimiento')
  const registrar=document.getElementById('boton')
  function validar() {
    window.open("./html/validaido.html", "_self");
}
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    validaCampos()

    if (validaCampos()==true){
      validar()
    }

  })

  const validaCampos = () => {
    //cap elementos
    const usuarioValor = usuario.value.trim()
    const nombreValor = nombre.value.trim()
    const dniValor = dni.value.trim()
    const apellidoValor = apellido.value.trim()
    const correoValor = correo.value.trim()
    const contraseñaValor = contraseña.value.trim()
    const c2Valor = c2.value.trim()
    const telefonoValor = telefono.value.trim()
    const ibanValor = IBAN.value.trim()
    const SWIFTValor = SWIFT.value.trim()
    const fnValor = fecha_nacimiento.value.trim()
    var regus = /([A-Za-z]{1,2}|[0-9]{1,2}|[A-Za-z][0-9])/
    if (!usuarioValor) {
      //console.log('CAMPO VACIO')
      validaFalla(usuario, 'Campo vacío1')
    } else if(!usuarioValor.match(regus)){
      validaFalla(usuario, 'formato de ususario invalido')
  }else{
      validaOk(usuario)
    }
    var reget = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    if (!correoValor) {
      validaFalla(correo, 'Campo vacío')
    } else if (!correoValor.match(reget)) {
      validaFalla(correo, 'El e-mail no es válido')
    } else {
      validaOk(correo)
    }
    //validando campo password
    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/
    if (!contraseñaValor) {
      validaFalla(contraseña, 'Campo vacío')
    } else if (contraseñaValor.length < 8) {
      validaFalla(contraseña, 'Debe tener 8 caracteres cómo mínimo.')
    } else if (!contraseñaValor.match(er)) {
      validaFalla(contraseña, 'Debe tener al menos una may., una min. y un núm.')
    } else {
      validaOk(contraseña)
    }
    //validando campo password Confirmación
    if (!c2Valor) {
      validaFalla(c2, 'Confirme su password')
    } else if (contraseñaValor !== c2Valor) {
      validaFalla(c2, 'La password no coincide')
    } else {
      validaOk(c2)
    }


    if (!nombreValor) {

      validaFalla(nombre, "nombre no valido")
    } else if(nombreValor.length<4){
      validaFalla(nombre, "nombre demasido corto")
    }else{
      validaOk(nombre)
    }
    if (!dniValor) {
      validaDni(dniValor)

    } else {
      validaOk(dni)
    }

    if (!apellidoValor) {

      validaFalla(apellido, "apellido no valido")
    } else {
      validaOk(apellido)
    }






    var rexte2 = /^(0034|\+34)?(\d\d\d)-? ?(\d\d)-? ?(\d)-? ?(\d)-? ?(\d\d)$/;

    if (!telefonoValor) {

      validaFalla(telefono, "telefono no valido")
    } else if (!telefonoValor.match(rexte2)) {
      validaFalla(telefono, "formato de telefono mal")
    } else {
      validaOk(telefono)
    };
    var rexib = /([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/g
    if (!ibanValor) {
      validaFalla(IBAN, "iban no valido")
    } else if (!ibanValor.match(rexib)) {
      validaFalla(IBAN, "formato incorrecto")
    } else (
      validaOk(IBAN)
    )
      var regsw = /([a-zA-Z]{4})([a-zA-Z]{2})(([2-9a-zA-Z]{1})([0-9a-np-zA-NP-Z]{1}))((([0-9a-wy-zA-WY-Z]{1})([0-9a-zA-Z]{2}))|([xX]{3})|)/g
    if (!SWIFTValor) {

      validaFalla(SWIFT, "swift no valido")
    } else if (!SWIFTValor.match(regsw)){
      validaFalla(SWIFT, "swift no valido")
    }else{
      validaOk(SWIFT)
    }

    if (!fnValor) {

      validaFalla(fecha_nacimiento, "edad no valida")
    } else {
      validaOk(fecha_nacimiento)
    }

  }

  const validaFalla = (input, msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje

    formControl.className = 'form-control falla'
  }
  const validaOk = (input, msje) => {
    const formControl = input.parentElement
    formControl.className = 'form-control ok'
  }



//   function validaDni(dniVAlor) {
//     var numero
//     var letr
//     var letra
//     var expresion_regular_dniVAlor

//     expresion_regular_dniVAlor = /^\d{8}[a-zA-Z]$/;

//     if(expresion_regular_dniVAlor.test (dniVAlor) == true){
//        numero = dniVAlor.substr(0,dniVAlor.length-1);
//        letr = dniVAlor.substr(dniVAlor.length-1,1);
//        numero = numero % 23;
//        letra='TRWAGMYFPDXBNJZSQVHLCKET';
//        letra=letra.substring(numero,numero+1);
//       if (letra!=letr.toUpperCase()) {
//          validaFalla(dni,'Dni erroneo, la letra del NIF no se corresponde');
//        }else{
//          validaOk(dni)
//        }
//     }else{
//       validaFalla(dni,'Dni erroneo, formato no válido');
//      }
//   }
function validaDni(dniVAlor)
{
    var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
    var valueDni = dni.substr(0,dni.length-1);
    var letra = dni.substr(dni.length-1,1).toUpperCase();
 
    /* el dni viene vacio, le damos como bueno*/
    if (dni.length == 0) {
        return true;
    } else {
        /* El dni no trae ni espacion ni guiones */
        if ((dni.indexOf(' ') == 0) || (dni.indexOf('-') == 0)) {
            alert ("El DNI/CIF no puede tener ni espacion ni guiones");
            document.getElementById("nif").focus();
            return false;
        }
        /* El DNI tiene 9 posiciones */
        if (dni.length < 9) {
            alert ("El DNI/CIF debe tener tener 9 caracteres");
            document.getElementById("nif").focus();
            return false;
        }
        /* Si la primera posicion es uuna letra, no se valida */
        if (isNaN(dni.substr(0,1))) {
            return true;
        }else{
            var corresponde =lockup.charAt(valueDni % 23);
            if (corresponde == letra ) {
                return true;
            } else {
                alert("La letra del DNI esta mal, debe ser " && corresponde);
                document.getElementById("nif").focus();
                return false;
            }
        }
    }
 
}

})

