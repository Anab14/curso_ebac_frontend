const form = document.getElementById('form-exercicio');
const numeroA = document.getElementById('A');
const numeroB = document.getElementById('B');
let formEValido = true;

function validaNumero(A,B) {
    return B > A;
}

let mensagemSucesso = document.getElementsByClassName('success-message')

form.addEventListener('submit', function(e) {
    e.preventDefault();

formEValido = validaNumero(numeroA.value, numeroB.value)
if (formEValido) {
    alert("A é menor que B")
    const containermensagemsucesso = document.querySelector('.success-message');
    document.querySelector('.success-message').style.display= 'block';
} 
else {
    alert("A não é menor que B")
    numeroA.style.border = '1px solid red';
    document.querySelector('.error-message').style.display= 'block';
}
})