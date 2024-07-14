document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const correctPassword = 'test';
    const enteredPassword = document.getElementById('password').value;

    if (enteredPassword === correctPassword) {
        window.location.href = '../index.html';
    } else {
        document.getElementById('error-message').textContent = 'Incorrect password. Please try again.';
    }
});
