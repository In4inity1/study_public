function register() {
    alert('Registration logic goes here'); // Додайте логіку реєстрації
}

function login() {
    alert('Login logic goes here'); // Додайте логіку входу
}

function toggleForm() {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const toggleFormText = document.getElementById('toggleFormText');

    if (registrationForm.style.display === 'none') {
        registrationForm.style.display = 'flex';
        loginForm.style.display = 'none';
        toggleFormText.innerHTML = "Already have an account? <a href='#' onclick='toggleForm()'>Login here</a>";
    } else {
        registrationForm.style.display = 'none';
        loginForm.style.display = 'flex';
        toggleFormText.innerHTML = "Don't have an account? <a href='#' onclick='toggleForm()'>Register here</a>";
    }
}