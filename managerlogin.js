function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('showPassword');

    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
}

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "keerat" && password === "keerat") {
           
            window.location.href = "managerpage.html";
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});

