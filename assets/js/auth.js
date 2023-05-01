let users = [
    {
        id:1,
        login: 'Zhenek',
        phone: '777',
        password: 'qwerty'
    }
]
let reg_phone = document.querySelector('.reg input[type=tel]')
let auth_phone = document.querySelector('.auth input[type=tel]')
const maskoption = {
    mask: '+{7}(000)000-00-00'
}
let maskedRegPhone = IMask(reg_phone , maskoption)
let maskedAuthPhone = IMask(auth_phone , maskoption)


const login =  () =>{
    let email = document.querySelector('.auth input[type=email]')
    let password = document.querySelector('.auth input[type=password]')
    users.forEach(user =>{
        if(user.password === password.value && user.phone === maskedAuthPhone.unmaskedValue && user.login === email.value){
            window.location = 'app.html'
        }

    })
    console.table([email.value , phone.value, password.value])
}
const reg = () =>{
    let email_user = document.querySelector('.reg input[type=email]')
    let password_user = document.querySelector('.reg input[type=password]')
    let user_phone_input = document.querySelector('.reg input[type=tel]')
    if(email_user.value.trim() === '' ||
        password_user.value.trim() === ''
    ){
        if(user_phone_input.value === ''){
            user_phone_input.style = 'border: 1px solid red;'
            function deleteStyle(){
                user_phone_input.style = 'border:1px solid gray;'
            }
            user_phone_input.addEventListener('keydown' , deleteStyle )}
        if(password_user.value === ''){
            password_user.style = 'border: 1px solid red;'
            function deleteStyle(){
                password_user.style = 'border:1px solid gray;'
            }
            password_user.addEventListener('keydown' , deleteStyle )
        }
        if(email_user.value === ''){
            email_user.style = 'border: 1px solid red;'
            function deleteStyle(){
                email_user.style = 'border:1px solid gray;'
            }
            email_user.addEventListener('keydown' , deleteStyle )}
        alert('Не все поля заполнены')

    }
    else{
        users.push({
            id: users[users.length -1] + 1,
            login: email_user,
            phone: maskedRegPhone.unmaskedValue,
            password: password_user
        })
        let reg = document.querySelector('.reg')
        let auth = document.querySelector('.auth')
        reg.classList.remove('open')
        auth.classList.add('open')
    }

}
const navigate = (e) =>{
    let forms = e.parentElement.parentElement
    forms.querySelector('.auth').classList.add('open')
    forms.querySelector('.reg').classList.add('open')
    e.parentElement.classList.remove('open')
}