function validate() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const displayValidate = document.getElementById('validate');

    if(email.includes("@") && password.length >= 8) {
        displayValidate.innerText = "Valid email and password!";
        displayValidate.style.color = "green";
    }
    else {
        displayValidate.innerText = "Invalid email or password!";
        displayValidate.style.color = "red";
    }
};

document.getElementById('submit-btn').addEventListener("click", validate);