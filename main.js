
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Rythm123' && password === 'Rythm223') {
        window.location.href = 'home.html';
    } else {
        document.getElementById('error-message').innerText = 'Only Admin is allowed to access it';
    }
});
