
document.addEventListener('DOMContentLoaded', function() {
    
    const loginButton = document.querySelector('.loginButton');
    const usernameField = document.getElementById('username'); 
    const passwordField = document.getElementById('password'); 

    loginButton.addEventListener('click', event => {
        event.preventDefault();

        const username = usernameField.value;
        const password = passwordField.value;

        if (username && password) {
            fetch('https://atlas-gym.vercel.app/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    console.log('Token:', data.token);
                     localStorage.setItem('authToken', data.token);
                     window.location.href = 'admin.html';
                } else {
                    console.error('Error de autenticación:', data);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});
