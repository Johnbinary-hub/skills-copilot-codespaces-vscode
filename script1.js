document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const signinForm = document.getElementById("signinForm");

    // Registration logic
    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (username === "" || email === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }

            const userData = {
                username: username,
                email: email,
                password: password
            };

            localStorage.setItem("user", JSON.stringify(userData));
            alert("Registration successful! Please sign in.");
            window.location.href = "signin.html";
        });
    }

    // Sign-in logic
    if (signinForm) {
        signinForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("signin-username").value;
            const password = document.getElementById("signin-password").value;
            const savedUser = JSON.parse(localStorage.getItem("user"));

            if (!savedUser || savedUser.username !== username || savedUser.password !== password) {
                alert("Invalid username or password.");
                return;
            }

            localStorage.setItem("username", username); // For dashboard display
            window.location.href = "Dashboard.html";
        });
    }
});
