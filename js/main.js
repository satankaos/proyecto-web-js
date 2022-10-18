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
      validaOk(usuario,"usuario  valido")
    }

    var reget = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    if (!correoValor) {
      validaFalla(correo, 'Campo vacío')
    } else if (!correoValor.match(reget)) {
      validaFalla(correo, 'El e-mail no es válido')
    } else {
      validaOk(correo,"correo valido")
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
      validaOk(contraseña,"contraseña valida") 
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
      validaOk(nombre,"nombre valido")
    }
    if (!apellidoValor) {

      validaFalla(apellido, "apellido no valido")
    } else {
      validaOk(apellido," ") 
    }
    var rexte2 = /^(0034|\+34)?(\d\d\d)-? ?(\d\d)-? ?(\d)-? ?(\d)-? ?(\d\d)$/;

    if (!telefonoValor) {

      validaFalla(telefono, "telefono no valido")
    } else if (!telefonoValor.match(rexte2)) {
      validaFalla(telefono, "formato de telefono mal")
    } else {
      validaOk(telefono,"telefono valido")
    };
    var rexib = /([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/g
    if (!ibanValor) {
      validaFalla(IBAN, "iban no valido")
    } else if (!ibanValor.match(rexib)) {
      validaFalla(IBAN, "formato incorrecto")
    } else (
      validaOk(IBAN,"iban valido")
    )
      var regsw = /([a-zA-Z]{4})([a-zA-Z]{2})(([2-9a-zA-Z]{1})([0-9a-np-zA-NP-Z]{1}))((([0-9a-wy-zA-WY-Z]{1})([0-9a-zA-Z]{2}))|([xX]{3})|)/g
    if (!SWIFTValor) {

      validaFalla(SWIFT, "swift no valido")
    } else if (!SWIFTValor.match(regsw)){
      validaFalla(SWIFT, "swift no valido")
    }else{
      validaOk(SWIFT,"swift  valido")
    }

    if (!fnValor) {

      validaFalla(fecha_nacimiento, "edad no valida")
    } else {
      validaOk(fecha_nacimiento,"fecha  valida")
    }
    if (validaDni(dniValor)) {

      validaFalla(dniValor, "edad no valida")
    } else {
      validaOk(dni,"dni correcto")
    }

  }


   function validaDni(dniVAlor) {
     var numero
     var letr
     var letra
     var expresion_regular_dniVAlor

     expresion_regular_dniVAlor = /(^([0-9]{8,8}\-[A-Z])|^)$/;

     if(expresion_regular_dniVAlor.test (dniVAlor) == true){
      letra='TRWAGMYFPDXBNJZSQVHLCKET';  
      numero = dniVAlor.substr(0,8);//saco los numeros de el dni
        letr = dniVAlor.substr(8,9);//saco la letra de el dni 
       
        completra= letra.charAt(numero % 23)// hacemos la division para qur nos de el indice y saquemos la letra
       if (completra!=letr.toUpperCase()) {
          validaFalla(dni,'Dni erroneo, la letra del NIF no se corresponde');
        }else{
          validaOk(dni)
        }
     }else{
       validaFalla(dni,'Dni erroneo, formato no válido');
      }
      var numero
      var letr
      var letra
      var expresion_regular_dniVAlor
      var dniVAlor= "45808188P"
 
      expresion_regular_dniVAlor = /[0-9]{7,8}[A-Z]/;
 
      if(dniVAlor.match(expresion_regular_dniVAlor)){//conprueba con la expresion regular que el formato sea el adecuado
       letra='TRWAGMYFPDXBNJZSQVHLCKET';  
       numero = dniVAlor.substr(0,8);//saco los numeros de el dni
         letr = dniVAlor.substr(8,9);//saco la letra de el dni 
         completra= letra.charAt(numero % 23)// hacemos la division para qur nos de el indice y saquemos la letra
       if (dniVAlor.length>9){//comprueva que no tenga mas de 9 caracteres
        validaFalla(dni,"tiene mas de 9 caracteres")
          }else if (completra!=letr.toUpperCase()) {//conprueba la letra del dni con la sacada de la formula 
                 validaFalla(dni,'Dni erroneo, la letra del NIF no se corresponde');
              }else{
              validaOk(dni,"dni correcto")
            }
         }else{
          validaFalla(dni,'Dni erroneo, formato no válido');
             }
      
 }
 const validaFalla = (input, msje) => {
  const formControl = input.parentElement
  const aviso = formControl.querySelector('p')
  aviso.innerText = msje

  formControl.className = 'form-control falla'
}
const validaOk = (input,msje) => {
  const formControl = input.parentElement
  const aviso = formControl.querySelector('p')
  aviso.innerText = msje
  formControl.className = 'form-control ok'
}


})

