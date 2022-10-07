


const formulario = document.getElementById('form-register');
const input = document.querySelectorAll('#formulario');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

var warnings=""
input.forEach((input) => {
    const validarcampos = (e) => {
      var warnings=""
      var entrar=false
      switch (e.target.name){
        case "nombres_usuario":
        if (expresiones.usuario.test(e.target.value)) {
            warnings+="el usuario no es valido"
            entrar=true
        }
        
        break;
        case "dni":
        
        break;
        case "nombres":
        
        break;
        case "apellidos":
        
        break;
        case "correo":
        
        break;
        case "contraseña":
        
        break;
        case "repetir_contraseña":
        
        break;
        
        case "IBAN":
        
        break;
        
        case "SWIFT":
        
        break;
        case "telefono":
        
        break;
        
        case "fecha_nacimiento":
        
        break;
      }
      if (entrar) {
        parrafo.innerHTML = warnings
      }
    }
    input.addEventListener('keyup', validarcampos)
    input.addEventListener('blur', validarcampos)
})
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
})


/*
function validaDni() {
    var dni = document.getElementById("dni").value;
    var numero
    var letr
    var letra
    var expresion_regular_dni
   
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
    if(expresion_regular_dni.test (dni) == true){
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
  }*/
