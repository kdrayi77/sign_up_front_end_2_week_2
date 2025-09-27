const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailMsg = document.getElementById("emailMsg");
const passwordMsg = document.getElementById("passwordMsg");
const form = document.getElementById("signupForm");

// Email validation onChange
emailInput.addEventListener("input", () => {
  const emailValue = emailInput.value;
  if (emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")) {
    emailMsg.textContent = "All good to go ✅";
    emailMsg.className = "success";
  } else {
    emailMsg.textContent = "Invalid email (must be >3 chars, contain @ and .)";
    emailMsg.className = "error";
  }
});

// Password validation onChange
passwordInput.addEventListener("input", () => {
  const passwordValue = passwordInput.value;
  if (passwordValue.length > 8) {
    passwordMsg.textContent = "All good to go ✅";
    passwordMsg.className = "success";
  } else {
    passwordMsg.textContent = "Password must be more than 8 characters";
    passwordMsg.className = "error";
  }
});

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isEmailValid =
    emailInput.value.length > 3 &&
    emailInput.value.includes("@") &&
    emailInput.value.includes(".");

  const isPasswordValid = passwordInput.value.length > 8;

  if (isEmailValid && isPasswordValid) {
    const confirmSignup = confirm("Are you sure you want to signup?");
    if (confirmSignup) {
      alert("Successful signup!");
    } else {
      // Reset form if user cancels
      form.reset();
      emailMsg.textContent = "";
      passwordMsg.textContent = "";
    }
  } else {
    alert("Please fix the errors before submitting.");
  }
});
