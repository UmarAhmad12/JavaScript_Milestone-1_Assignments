const firstPassword = document.getElementById("password");
const confirmPassword = document.getElementById("passwordd");
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", () => {
  if (firstPassword.value === confirmPassword.value) {
    alert("Password Matched. Password validation Successful.");
  } else {
    alert("Password didn't match. Password validation unsuccessful");
  }
});
