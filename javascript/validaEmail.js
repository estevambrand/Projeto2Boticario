document.getElementById('btnVerifica').addEventListener('click', function(event) {
    event.preventDefault();
    validaEmail();
});

function validaEmail() {
    const emailInput = document.getElementById('email');
    const emailMensagem = document.getElementById('emailMensagem');
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        emailMensagem.textContent = 'O email foi cadastrado com sucesso!';
        emailMensagem.style.color = 'blue';
    } else {
        emailMensagem.textContent = 'O email inserido está incorreto.';
        emailMensagem.style.color = 'red';
    }
}
