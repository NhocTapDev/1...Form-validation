const close = document.querySelector('.close');
const account = document.querySelector('.account');

close.addEventListener('click', () => {
    containerAcc.style.display = 'none';
});

account.addEventListener('click', () => {
    containerAcc.style.display = 'block';
});

// ----------------- Change tab --------------------------------------------
const containerAcc = document.querySelector('#container-account');
const registerBtn = document.querySelector('#register');
const loginBtn = document.querySelector('#login');


registerBtn.addEventListener('click', () => {
    containerAcc.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    containerAcc.classList.remove('active');
});

// ----------------- Show/Hide password --------------------------------------
const password = document.querySelectorAll('.password');
const passwordI = document.querySelectorAll('.password-icon');

for (let i = 0; i < passwordI.length; i++) {
    passwordI[i].addEventListener('click', () => {
        passwordI[i].classList.toggle('bi-eye');
        if (password[i].type === 'password') {
            password[i].type = 'text';
        } else {
            password[i].type = 'password';
        };
    });
};

// function checkPassword() {
//     const checkPassword = document.getElementsByClassName('signup-password').value;
//     const checkcPassword = document.getElementsByClassName('confirm-password').value;

//     if (checkPassword == checkcPassword) {
//         document.getElementById('warning').innerHTML = 'Form is submitted';
//         return true;
//     } else {
//         document.getElementById('warning').innerHTML = 'Password did not match';
//         return false;
//     }
// }