// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.querySelector("form");

    // Attach a submit event listener
    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const username = document.querySelector("input[name='username']").value.trim();
        const email = document.querySelector("input[name='email']").value.trim();
        const password = document.querySelector("input[name='password']").value;

        // Validate form inputs
        if (!validateForm(username, email, password)) {
            return;
        }

        // Simulate sending data to the server
        registerUser({ username, email, password });
    });
});

// Validate form inputs
function validateForm(username, email, password) {
    if (username === "") {
        alert("Username is required.");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    return true;
}

// Validate email format using a regex
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Simulate a user registration function
function registerUser(userData) {
    console.log("Registering user:", userData);

    // Simulate an API call (Replace with real API logic)
    setTimeout(() => {
        alert("Registration successful!");
    }, 1000);
}
