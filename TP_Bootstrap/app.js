const button_sIn = document.querySelector('.btn-sign-in');
const alert = document.querySelector('.alert');
const alert_heading = document.querySelector('.alert-heading');

button_sIn.addEventListener('click', function (event) {
    var inputs = document.querySelectorAll('input');
    var email = document.querySelector('#email').value;
    var psw = document.querySelector('#password').value;

    if (email === 'toto@gmail.com' && psw === 'Picsou86') {
        alert.classList.remove('is-none');
        alert.classList.remove('alert-danger');
        alert.classList.add('alert-success');
        alert_heading.textContent = "Authentification confirmé !!"
        alert.textContent = "Le mot de passe est correct !"
    } else {
        /* inputs.forEach(input => {
            input.classList.remove('apply-shake');
        }); */
        alert.value = "";
        alert_heading.value = "";
        alert.classList.remove('is-none');
        alert.classList.remove('alert-success');
        alert.classList.add('alert-danger');
        alert_heading.textContent = "Aie !!"
        alert.textContent = "Erreur sur le mot de passe veuillez ré-essayer"

        inputs.forEach(input => {
            input.classList.toggle('apply-shake');
            item.addEventListener(transitionEvent, transitionEndCallback);
        });
    }
    console.log(email, psw);

    event.preventDefault();
    inputs.forEach(input => {
        input.value = "";
        transitionEndCallback = (e) => {
            input.removeEventListener(transitionEvent, transitionEndCallback);
            input.classList.remove('apply-shake');
        }
    });
})


document.addEventListener('DOMContentLoaded', function () {

})