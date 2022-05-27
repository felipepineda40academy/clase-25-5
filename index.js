var form_submit = document.getElementById('myForm');

var informacion = {
    nombre:"",
    email:""
}


form_submit.addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    informacion.nombre=name;
    informacion.email=email;
    console.log(informacion);
})