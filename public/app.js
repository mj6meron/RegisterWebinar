// forms
const signUpForm = document.querySelector('#registerForm');

// Sign up inputs
const registerName = document.querySelector('#name');
const registerEmail = document.querySelector('#email');
const registerEmployment = document.querySelector('#employment');

// error messages
const errorMsg = document.querySelector('#error');

signUpForm.addEventListener('submit', e => {
    e.preventDefault();
    const registerDetails = {
        name: registerName.value,
        email: registerEmail.value,
        employment: registerEmployment.value
    };

    fetch('/api/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerDetails)
    })
    .then(res => res.json())
    .then(response => { 
        if(response.error) {
            errorMsg.innerHTML = response.error;
        } else {
            console.log(response);
            errorMsg.innerHTML = '';
            localStorage.setItem('auth-token', response.token);
            location.href = response.redirect;
        }
    });
});


/* 

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const loginDetails = {
        email: loginEmail.value,
        password: loginPassword.value
    };

    fetch('/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginDetails)
    })
    .then(res => res.json())
    .then(response => {
        if(response.error) {
            errorMsg.innerHTML = response.error;
        } else {
            errorMsg.innerHTML = '';
            localStorage.setItem('auth-token', response.token);
            location.href = response.redirect;
        }
    });
});

 */