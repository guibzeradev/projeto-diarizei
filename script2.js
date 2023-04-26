const registro = document.querySelector('#registro');
const NomeInput = document.querySelector('#Nome');
const passwordInput = document.querySelector('#pwd');
const EmailInput = document.querySelector('#email');
const passwordInput2 = document.querySelector('#pwd2');

registro.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form from submitting and reloading the page
    const nome = NomeInput.value;
    const password = passwordInput.value;
    const Email = EmailInput.value;
    const password2 = passwordInput2.value;
    

    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Check if the login credentials are correct
    if (Email in data) {  
        alert('Email já cadastrado');

        }else if(password === password2){
            localStorage.setItem('emailtow', Email);
            localStorage.setItem('passtow', password);
            localStorage.setItem('nometow', nome);
            window.location.href = "inicioDia.html";
        }else {
            alert("As senhas não estão iguais")

    }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


})