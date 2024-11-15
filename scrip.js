"use strict";

// Select form elements
let signinForm = document.getElementById("signinForm");
let signupForm = document.getElementById("signupForm");

let signupLink = document.getElementById("signupLink");
let signinLink = document.getElementById("signinLink");

let signinEmail = document.getElementById("signinEmail");
let signinPassword = document.getElementById("signinPassword");

let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");

// Show the Sign Up form and hide the Sign In form
function showSignupForm() {
    signinForm.classList.add("none");
    signupForm.classList.remove("none");
}

// Show the Sign In form and hide the Sign Up form
function showSigninForm() {
    signupForm.classList.add("none");
    signinForm.classList.remove("none");
}

// Add event listeners for the links
signupLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    showSignupForm();
});

signinLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    showSigninForm();
});

// Initial form visibility - Show Sign In form
showSigninForm();

// Sign In Form Validation and Reset on Error
signinForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    
    let email = signinEmail.value.trim();
    let password = signinPassword.value.trim();

    // Retrieve stored credentials from localStorage
    let storedEmail = localStorage.getItem("signupEmail");
    let storedPassword = localStorage.getItem("signupPassword");

    // Check if the entered email and password match the stored credentials
    if (email === storedEmail && password === storedPassword) {
        alert("Sign in successful!");
        // Redirect or show user data after successful login
        window.open("https://pinayum.org/hinimas-para-tumigas/");
    } else {
        // Clear the fields if wrong input
        alert("Incorrect email or password. Please try again.");
        signinEmail.value = "";
        signinPassword.value = "";
    }
});

// Sign Up Form Validation and Save Credentials
signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    
    let email = signupEmail.value.trim();
    let password = signupPassword.value.trim();

    // Save the credentials to localStorage
    if (email && password) {
        localStorage.setItem("signupEmail", email);
        localStorage.setItem("signupPassword", password);
        alert("Account created successfully!");
        // After successful signup, show sign in form
        showSigninForm();
        // Optionally, you can reset fields after sign up.
        signupEmail.value = "";
        signupPassword.value = "";
    } else {
        // Clear the fields if there is invalid input
        alert("Please fill out all fields correctly.");
        signupEmail.value = "";
        signupPassword.value = "";
    }
});
