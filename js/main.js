

const nombre = document.getElementsByName("Nombre")
const email = document.getElementsByName("correo")
const pass = document.getElementsByName("contraseña")
const pass_1 = document.getElementsByName("repetir_contraseña")
const form = document.getElementsByName("form")
const dni = document.getElementsByName("dni")
const parrafo = document.getElementById("warnings")

const expresiones = {
	reg_usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	reg_nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	reg_password: /^.{9,12}$/, // 4 a 12 digitos.
	reg_correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	reg_telefono: /^\d{9}$/, // 7 a 14 numeros.
  reg_dni : /^\d{8}[a-zA-Z]$/,
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

formulario.addEventListener("submit", e=>{
  let warnings = ""
  let entrar = false
  if (expresiones.usuario.test(e.target.value)) {
    warnings += `El nombre no es valido <br>`
    entrar = true
  }

})

if(entrar){
  parrafo.innerHTML = warnings
}else{
  parrafo.innerHTML = "Enviado"
}


/*function validaDni() {
    var dni = document.getElementById("dni").value;
    var numero
    var letr
    var letra
    var reg_dni
   
    
   
    if(reg_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       alert(letr)
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
         alert('Dni erroneo, la letra del NIF no se corresponde');
       }else{
         alert('Dni correcto');
       }
    }else{
       alert('Dni erroneo, formato no válido');
     }
  }
*/