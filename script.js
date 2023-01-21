const form = document.querySelector('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const firstNameSmall = document.getElementById('firstnamesmall');
const lastNameSmall = document.getElementById('lastnamesmall');
const emailSmall = document.getElementById('emailsmall');
const passwordSmall = document.getElementById('passwordsmall');
const firstNameImg = document.getElementById('firstNameimg');
const lastNameImg = document.getElementById('lastNameimg');
const emailImg = document.getElementById('emailimg');
const passwordImg = document.getElementById('passwordimg');
const small = document.querySelectorAll('small');
const img = document.querySelectorAll('img');



form.addEventListener('submit', (e) => {
    e.preventDefault()

    let firstNameValue = firstName.value
    let lastNameValue = lastName.value
    let emailValue = email.value
    let passwordValue = password.value

    if (firstNameValue == '') {
        firstNameSmall.style.display = 'block'
        firstNameImg.style.display = 'block'
        firstName.classList.add('alert')
    }

    if (lastNameValue == '') {
        lastNameSmall.style.display = 'block'
        lastNameImg.style.display = 'block'
        lastName.classList.add('alert')
    }

    if (passwordValue == '') {
        passwordSmall.style.display = 'block'
        passwordImg.style.display = 'block'
        password.classList.add('alert')
    }


    if (!firstNameValue == '') {
        firstNameSmall.style.display = 'none'
        firstNameImg.style.display = 'none'
        firstName.classList.remove('alert')
    }

    if (!lastNameValue == '') {
        lastNameSmall.style.display = 'none'
        lastNameImg.style.display = 'none'
        lastName.classList.remove('alert')
    }

    if (!passwordValue == '') {
        passwordSmall.style.display = 'none'
        passwordImg.style.display = 'none'
        password.classList.remove('alert')
    }
    if (!validateEmail(emailValue)) {
        emailSmall.style.display = 'block'
        emailImg.style.display = 'block'
        email.classList.add('alert')
    }
    if (validateEmail(emailValue)) {
        emailSmall.style.display = 'none'
        emailImg.style.display = 'none'
        email.classList.remove('alert')
    }
})

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}