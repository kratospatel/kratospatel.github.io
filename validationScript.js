function validateForm() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // email regex pattern
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/; // password regex pattern
  let isValid = true;

  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Invalid email address";
    email.classList.add("invalid");
    isValid = false;
  } else {
    emailError.textContent = "";
    email.classList.remove("invalid");
  }

  if (!password.value.match(passwordPattern)) {
    passwordError.textContent = "Invalid password format";
    password.classList.add("invalid");
    isValid = false;
  } else {
    passwordError.textContent = "";
    password.classList.remove("invalid");
  }

  return isValid;
}

document.getElementById("login-button").addEventListener("click", (event) => {
  if (!validateForm()) {
    event.preventDefault(); // stop redirection if invalid
  } else {
    window.location.href = "page1.html"; // redirect to index page
  }
});
