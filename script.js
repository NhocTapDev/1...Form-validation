const containerAcc = document.getElementById("container-account");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
    containerAcc.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    containerAcc.classList.remove("active");
});

function showPassword() {
    const signupPassword = document.getElementById("signup-password");
    const signinPassword = document.getElementById("signin-password");
    const signupPasswordI = document.getElementById("signup-password-icon");
    const signinPasswordI = document.getElementById("signin-password-icon");

    if (signupPassword.type === "password" & signinPassword.type === "password") {
        signupPassword.type = "text";
        signupPasswordI.classList.remove("bi-eye-slash");
        signupPasswordI.classList.add("bi-eye")

        signinPassword.type = "text";
        signinPasswordI.classList.remove("bi-eye-slash");
        signinPasswordI.classList.add("bi-eye")
    } else {
        signupPassword.type = "password";
        signupPasswordI.classList.remove("bi-eye");
        signupPasswordI.classList.add("bi-eye-slash");

        signinPassword.type = "password";
        signinPasswordI.classList.remove("bi-eye");
        signinPasswordI.classList.add("bi-eye-slash");
    }
};

function showCPassword() {
    const cPassword = document.getElementById("confirm-password");
    const cPasswordI = document.getElementById("confirm-password-icon");

    if (cPassword.type === "password") {
        cPassword.type = "text";
        cPasswordI.classList.remove("bi-eye-slash");
        cPasswordI.classList.add("bi-eye")
    } else {
        cPassword.type = "password";
        cPasswordI.classList.remove("bi-eye");
        cPasswordI.classList.add("bi-eye-slash");
    }
};

function checkPassword() {
    const checkPassword = document.getElementsByClassName("signup-password").value;
    const checkcPassword = document.getElementsByClassName("confirm-password").value;

    if (checkPassword == checkcPassword) {
        document.getElementById("warning").innerHTML = "Form is submitted";
        return true;
    } else {
        document.getElementById("warning").innerHTML = "Password did not match";
        return false;
    }
}