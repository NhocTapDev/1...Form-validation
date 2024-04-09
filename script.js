const containerAcc = document.querySelector("#container-account");
const registerBtn = document.querySelector("#register");
const loginBtn = document.querySelector("#login");

registerBtn.addEventListener("click", () => {
    containerAcc.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    containerAcc.classList.remove("active");
});

const password = document.querySelectorAll(".password");
const passwordI = document.querySelectorAll(".password-icon");

for (let i = 0; i < passwordI.length; i++) {
    passwordI[i].addEventListener('click', () => {
        if (password[i].type === 'password') {
            password[i].type = "text";
            passwordI[i].classList.remove("bi-eye-slash");
            passwordI[i].classList.add("bi-eye");
        } else {
            password[i].type === "password";
            passwordI[i].classList.remove("bi-eye");
            passwordI[i].classList.add("bi-eye-slash");
        }
    })
};

// function checkPassword() {
//     const checkPassword = document.getElementsByClassName("signup-password").value;
//     const checkcPassword = document.getElementsByClassName("confirm-password").value;

//     if (checkPassword == checkcPassword) {
//         document.getElementById("warning").innerHTML = "Form is submitted";
//         return true;
//     } else {
//         document.getElementById("warning").innerHTML = "Password did not match";
//         return false;
//     }
// }