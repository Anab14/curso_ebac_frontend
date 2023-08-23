const form = document.getElementById('form-exercicio');
const numeroA = document.getElementById('A');
const numeroB = document.getElementById('B');
let formEValido = true;

function validaNumero(A,B) {
    return B > A;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

formEValido = validaNumero(numeroA, numeroB)
if (!validaNumero) {
    const containermensagemsucesso = document.querySelector('.success-message');
    containermensagemsucesso.innerHTML = mensagemSucesso;
    containermensagemsucesso.computedStyleMap.display = 'block';
} 
else {
    numeroA.style.border = '1px solid red';
    document.querySelector('.error-message').style.display= 'block';
}
})