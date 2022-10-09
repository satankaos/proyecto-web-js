window.addEventListener('load',() => {
 const form= document.querySelector('#form');
 const usuario=document.getElementById('usuario')
 const nombre=document.getElementById('nombre')
 const dni=document.getElementById('dni')
 const apellido=document.getElementById('apellidos')
 const correo=document.getElementById('correo')
 const contraseña=document.getElementById('contraseña')
 const c2=document.getElementById('repetir_contraseña')
 const telefono=document.getElementById('telefono')
 const IBAN=document.getElementById('IBAN')
 const SWIFT=document.getElementById('SWIFT')
 const fecha_nacimiento=document.getElementById('fecha_nacimiento')

 form.addEventListener('submit',(e)=> {
  e.preventDefault()
  validaCampos()
 })
 const validaCampos = ()=>{
  //cap elementos 
  const usuarioValor=usuario.value.trim()
  const nombreValor=nombre.value.trim()
  const dniValor=dni.value.trim()
  const  apellidoValor=apellido.value.trim()
  const correoValor=correo.value.trim()
  const contraseñaValor=contraseña.value.trim()
  const c2Valor=c2.value.trim()
  const telefonoValor=telefono.value.trim()
  const ibanValor=IBAN.value.trim()
  const SWIFTValor =SWIFT.value.trim()
  const fnValor=fecha_nacimiento.value.trim()
  
  if(!usuarioValor){
    //console.log('CAMPO VACIO')
    validaFalla(usuario, 'Campo vacío1')
}else{
    validaOk(usuario)
}
if(!correoValor){
  validaFalla(correo, 'Campo vacío')            
}else if(!validaEmail(correoValor)) {
  validaFalla(correo, 'El e-mail no es válido')
}else {
  validaOk(correo)
}
//validando campo password
const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/          
if(!contraseñaValor) {
   validaFalla(contraseña, 'Campo vacío')
} else if (contraseñaValor.length < 8) {             
   validaFalla(contraseña, 'Debe tener 8 caracteres cómo mínimo.')
} else if (!contraseñaValor.match(er)) {
   validaFalla(contraseña, 'Debe tener al menos una may., una min. y un núm.')
} else {
   validaOk(contraseña)
}
 //validando campo password Confirmación
 if(!c2Valor){
  validaFalla(c2, 'Confirme su password')
} else if(passValor !== c2Valor) {
  validaFalla(c2, 'La password no coincide')
} else {
  validaOk(c2)
}


if(!dniValor){
 
    validaFalla(dni,"dni no valido")
 } else{
  validaOk(dni)
 } 
 
 if (!apellidoValor) {
 
    validaFalla(apellido,"apellido no valido")
  } else{
   validaOk(apellido)
  } 
  
 



  
 if (!telefonoValor) {
  
   validaFalla(telefono,"telefono no valido")
 }  else{
  validaOk(telefono)
 }
  
 if (!ibanValor) {

    validaFalla(IBAN,"iban no valido")
 }else{
  validaOk(IBAN)
}
 
if (!SWIFTValor) {

  validaFalla(SWIFT,"swift no valido")
} else{
  validaOk(SWIFT)
}
 
if (!fnValor) {

validaFalla(fecha_nacimiento,"edad no valida")
  }else{
    validaOk(fecha_nacimiento)
  }  

 
  }
  const validaFalla = (input, msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje

    formControl.className = 'warnings'
}
const validaOk = (input, msje) => {
    const formControl = input.parentElement
    formControl.className = 'form-control ok'
}

const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
}

})
