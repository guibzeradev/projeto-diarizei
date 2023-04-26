const loginForm = document.querySelector('#loginbutton');
const EmailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#pwd');

loginForm.addEventListener('click', (event) => {
    event.preventDefault();
    const Email = EmailInput.value;
    const password = passwordInput.value;
    
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
    const nome = data[Email]["nome"]
    if (Email in data && password === data[Email]["senha"]) {

        localStorage.setItem("emailtow", Email);
        localStorage.setItem("passtow", password);
        localStorage.setItem("nometow", nome)
        console.log(localStorage.getItem("nometow"))
        alert("a")
        window.location.href = 'inicioDia.html';
        }else {
            alert('Email ou senha incorretos.');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


});