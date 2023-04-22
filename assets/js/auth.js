let users = [
    {
        id:1,
        login: 'Zhenek',
        phone: '777',
        password: 'qwerty'
    }
]



const login =  () =>{
    let email = document.querySelector('.auth input[type=email]')
    let phone = document.querySelector('.auth input[type=tel]')
    let password = document.querySelector('.auth input[type=password]')
    users.forEach(user =>{
        if(user.password === password.value && user.phone === phone.value && user.login === email.value){
            window.location = 'app.html'
        }

    })
    console.table([email.value , phone.value, password.value])
}