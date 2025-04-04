document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simple validation
        if (username === "" || email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Store user data
        const userData = {
            username: username,
            email: email,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("username", username); // 💡 Key fix

        // Redirect to the dashboard
        window.location.href = "dashboard.html";
    });
});
