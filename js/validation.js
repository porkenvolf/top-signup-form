const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
confirmPassword.addEventListener("input", (event) => {
    if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("dsa");
    } else {
        confirmPassword.setCustomValidity("");
    }
});
