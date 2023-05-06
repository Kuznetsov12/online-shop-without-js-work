// let section = document.querySelector('section');
// let title = section.querySelector('h1');
// title.innerHTML = "madik gay";


// let image = section.querySelector('img');
// image.setAttribute('src','./assets/img/sneaker.jpg' ) 
// console.log(image)

// let cards = document.querySelector('.cards')
// let card = cards.querySelector('.card-content')
// let car = card.querySelector('.price')
// console.log(car)
// car.innerHTML = "20$"

// let smotri = document.querySelector('.category .category-cards:nth-child(2) h3')

// let all_covers = document.querySelectorAll('.cover');
// console.log(all_covers)

// if (5==5){
//     console.log("madikgaygay")
// }
// else if(5 === 5){
//     console.log("madikvrotberet")
// }
// else{
//     console.log("madikgaychmopidr")
// }

// let num1 = 3
// do{
//     console.log(num1)
//     num1++
// }
// while(num1<10){
//     console.log(num1)
//     num1++
// }

// for(let i = 1 ; i < 11; i++){

//     console.log(5 + '*' + i + '=' + 5*i)
// }

// let text = "hfrefhjerfrejf"
// let position = 0
// for(let i = 0; i < text.length; i++){
//     console.log(text[i]);
//     if(text[i] == "f"){
//         position=i;
//         console.log(position);
//     }
// }
// console.log("")
// console.log("")
// console.log("")
// for(let i = 0; i < text.length; i++){
//     if(i === position){
//         continue
//     }
//     console.log(text[i])
// }

// let students = ["vlad", "ilya", "zhenya", "nikita"]

// students.forEach(name1 => {
//     console.log(name1)
// })

// console.log("")
// console.log("")

// for(let i = 0; i < students.length; i++){
//     console.log(students[i])
// }
let cards_data = [
    {
        src: "./assets/img/t-shirt.png",
        title: "T-shirt summer collection",
        price: 1000
    },
    {
        src: "./assets/img/woman.jpg",
        title: "Woman of ur disare",
        price: 10
    },
    {
        src: "./assets/img/clothes.jpg",
        title: "Одежда Ашота",
        price: 1000000
    },
    {
        src: "./assets/img/accessories.jpg",
        title: "Watch ur grandma",
        price: 10000
    },
    {
        src: "./assets/img/sneaker.jpg",
        title: "sneaker daddy",
        price: 3000
    },
    {
        src: "./assets/img/man.jpg",
        title: "Man of ur disare",
        price: 1500
    },
    {
        src: '/assets/img/man.jpg',
        title: 'new ship',
        price: 2000
    }
]



const setCards = (cards_array) =>{
    let cards_container = document.querySelector('.cards .container')
    let cards_container_2 = ''
    cards_array.forEach(item => {
    let card = `
    <a href="#" onclick="navigation('productpage')" >
    <div class="card">
        <div class="cover">
            <img src=${item.src} alt="">
            <div class="circle"></div>
        </div>
        <div class="card-content">
            <h4>${item.title}</h4>
            <p class="price">${item.price}$</p>
        </div>
    </div>
    </a>
    `
    cards_container_2 += card
    })
    cards_container.innerHTML = cards_container_2
}


const sortCards = (typeSort) => {
    let cards_new = []
    cards_new.push(...cards_data)
    switch (typeSort){
        case 'UP':
            cards_new.sort((a,b) =>{
                return a.price - b.price
            })
            break
        case 'DOWN':
            cards_new.sort((a,b) =>{
                return b.price - a.price
            })
            break
        default:
            break
    }  
    setCards(cards_new) 
}



const navigation = (pageOpen) =>{
    const pages = document.querySelectorAll('.fullpage')

    pages.forEach(page =>{
        page.classList.remove('open')

        page.classList.forEach(pageClass =>{
            if(pageOpen === pageClass){
                page.classList.add('open')
            }
        })
    })
    
}



// let cards = [
//     {
//         img: "./assets/img/t-shirt.png",
//         title: "oksi",
//         price: 34
//     },
//     {
//         img: "./assets/img/sneaker.jpg",
//         title: "snikers",
//         price: 340
//     },
//     {
//         img: "./assets/img/man.jpg",
//         title: "arinkakrasava",
//         price: 3400
//     },
// ]

// let container_for_cards = document.querySelector('.cards .container')
// console.log(container_for_cards)

// container_for_cards.innerHTML = ``

// cards.forEach(item => {
//     let htmlCard = `
//     <a href="./assets/pages/product.html">
//      <div class="card">
//          <div class="cover">
//              <img src=${item.img} alt="">
//              <div class="circle"></div>
//         </div>
//          <div class="card-content">
//             <h4>${item.title}</h4>
//              <p class="price">${item.price}$</p>
//          </div>
//      </div>
//      </a>
//     `
//     container_for_cards.innerHTML += htmlCard
// })

// let cards = [
//     {
//         img: "./assets/img/woman.jpg",
//         title: "T-shirt arin  collection",
//         price: 1
//     },
//     {
//         img: "./assets/img/sneaker.jpg",
//         title: "easy boost 350",
//         price: 7000
//     },
//     {
//         img: "./assets/img/man.jpg",
//         title: "sak",
//         price: 100000
//     }
// ]

// let cards_container = document.querySelector('.cards .container')
// console.log(cards_container)


// cards_container.innerHTML = ``

// cards.forEach(item =>{
//     let cardssection = `
//     <a href="./assets/pages/product.html">
//     <div class="card">
//         <div class="cover">
//             <img src="${item.img}" alt="">
//             <div class="circle"></div>
//         </div>
//         <div class="card-content">
//             <h4>${item.title}</h4>
//             <p class="price">${item.price}$</p>
//         </div>
//     </div>
//     </a>
//     `

//     cards_container.innerHTML += cardssection
// })

const changeCheckbox = (e) =>{
    e.parentNode.querySelector('.checkbox').classList.toggle('checked')
}

const setCheckboxes = () =>{
    const checkboxes = document.querySelectorAll('input[type=checkbox]')
    checkboxes.forEach(item =>{
        if(item.checked){
            item.parentNode.querySelector('.checkbox').classList.add('checked')
        }
    })
}

const setSize = (e) =>{
    let size_html = e.target.parentElement
    let sizes = size_html.querySelectorAll('p')
    sizes.forEach(item =>{
        item.classList.remove('active')
    })
    e.target.classList.toggle('active')
}

const setColor = (e) =>{
    let color_html = e.target.closest('.color')
    let colors = color_html.querySelectorAll('.circle-container .circle')
    colors.forEach(item =>{
        item.classList.remove('active')
    })
    e.target.classList.toggle('active')
}

const modal = (open) =>{
    let modal = document.getElementById('modalCat')
    if(open){
        modal.classList.add('open')
    }
    else{
        modal.classList.remove('open')
    }
   
}

        


// let key = 'da'

// while(key === 'da' || key === 'Da' || key === 'DA'){
//     let num1 = parseFloat(prompt('введите первое число '))
//     let num2 = parseFloat(prompt('введите второе число'))
//     let action = prompt('введите арифметическое действие')
//     switch(action){
//     case '+':
//         alert(num1 + num2)
//         break;
//     case '-':
//         alert(num1 - num2)
//         break;
//     case '*':
//         alert(num1 * num2)
//         break;
//     case '/':
//         if(num2 === 0 ){
//             alert('пошел нахуй')
//         }
//         else{
//             alert(num1 / num2)
//         } 
//         break;
//     case '**':
//         alert(Math.pow(num1,num2))
//         break;
//     case '^':
//         alert('корень первого числа' + Math.sqrt(num1))
//         alert('корень второго числа' + Math.sqrt(num2))
//         break;

//     }
//     key = prompt('Вы хотите продолжить? da или net')
// }
// let num = parseFloat(prompt('Число для умножения'))
// let rangemin = parseFloat(prompt('Введите начало диапазона'))
// let rangemax = parseFloat(prompt('Введите конечное число диапазона '))
// for(let i = rangemin;i<=rangemax; i++){
//     console.log(num + '*' + i +'=' + i*num)
// }


    





