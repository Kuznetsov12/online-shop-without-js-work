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
// let cards_data = [
//     {
//         src: "./assets/img/t-shirt.png",
//         title: "T-shirt summer collection",
//         price: 1000
//     },
//     {
//         src: "./assets/img/woman.jpg",
//         title: "Woman of ur disare",
//         price: 10
//     },
//     {
//         src: "./assets/img/clothes.jpg",
//         title: "Одежда Ашота",
//         price: 1000000
//     },
//     {
//         src: "./assets/img/accessories.jpg",
//         title: "Watch ur grandma",
//         price: 10000
//     },
//     {
//         src: "./assets/img/sneaker.jpg",
//         title: "sneaker daddy",
//         price: 3000
//     },
//     {
//         src: "./assets/img/man.jpg",
//         title: "Man of ur disare",
//         price: 1500
//     }
// ]

// let cards_container = document.querySelector('.cards .container')
// console.log(cards_container)



// cards_data.forEach(item => {
//     let card = `
//     <a href="./assets/pages/product.html">
//     <div class="card">
//         <div class="cover">
//             <img src=${item.src} alt="">
//             <div class="circle"></div>
//         </div>
//         <div class="card-content">
//             <h4>${item.title}</h4>
//             <p class="price">${item.price}$</p>
//         </div>
//     </div>
//     </a>
//     `
//     cards_container.innerHTML += card
// })


let cards = [
    {
        img: "./assets/img/t-shirt.png",
        title: "oksi",
        price: 34
    },
    {
        img: "./assets/img/sneaker.jpg",
        title: "snikers",
        price: 340
    },
    {
        img: "./assets/img/man.jpg",
        title: "arinkakrasava",
        price: 3400
    },
]

let container_for_cards = document.querySelector('.cards .container')
console.log(container_for_cards)

container_for_cards.innerHTML = ``

cards.forEach(item => {
    let htmlCard = `
    <a href="./assets/pages/product.html">
     <div class="card">
         <div class="cover">
             <img src=${item.img} alt="">
             <div class="circle"></div>
        </div>
         <div class="card-content">
            <h4>${item.title}</h4>
             <p class="price">${item.price}$</p>
         </div>
     </div>
     </a>
    `
    container_for_cards.innerHTML += htmlCard
})
