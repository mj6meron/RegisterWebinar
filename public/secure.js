
const name = document.querySelector('#username');
const email = document.querySelector('#useremail');
const employment = document.querySelector('#useremployment');
const title = document.querySelector('#title');
const leave = document.querySelector('#leave');

fetch('/api/secure', {
    method: 'GET',
    headers: {
        'auth-token': localStorage.getItem('auth-token')
    }
});

let myUser = {}
fetch('/getDetails/aUser', {
    method: 'GET',
    headers : {
        'auth-token': localStorage.getItem('auth-token')
    } 
}).then(result => result.json()).then(data => {
        name.innerHTML = `${data.name}`
        email.innerHTML  = `${data.email}`
        employment.innerHTML  = `${data.employment}`
        title.innerHTML  = `${data.employment}\'s secure page`
    }
)


leave.addEventListener('click', leaveFunction)

function leaveFunction (){
    console.log('we hit this bitch')
    }