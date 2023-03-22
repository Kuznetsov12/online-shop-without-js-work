// let basket_cards = [
//     {
//     src: "../img/t-shirt.png",
//     title: "T-shirt summer collection",
//     price: 1000,
//     color: 'orange',
//     size: 'XXXXXXXXXXXXL максимальный размер удовольствия',
//     cifr: 'dinahui',
//     cifr2: 'samdinahui',
//     count: "1razapizdi"
//     },
//     {
//     src: "../img/woman.jpg",
//     title: "Woman of ur disare",
//     price: 1,
//     color: 'black',
//     size: 'XXXXXXL',
//     cifr: 'dinahu',
//     cifr2: 'samdinahu',
//     count: "3razapizdi"

//     },
//     {
//     src: "../img/clothes.jpg",
//     title: "Одежда Ашота",
//     price: 1000000,
//     color: 'pink',
//     size: 'XXXL',
//     cifr: 'dinah',
//     cifr2: 'samdinah',
//     count: "2razapizdi"
//     }
// ]

// let basket_card = document.querySelector('.basket .wrapper .table-basket .products-container ')
// console.log(basket_card)

// basket_cards.forEach(item =>{
//     let basket = `
//     <div class="item">
//     <div class="column" id="first">
//         <div class="card">
//             <div class="cover">
//                 <img src="${item.src}" alt="">
//                 <div class="circle"></div>
//             </div>
//         </div>
//         <div class="item-info">
//             <p class="name">${item.title}</p>
//             <div class="settings">
//                 <div class="ellipse" id="${item.color}"></div>
//                 <p class="size">${item.size}</p>
//             </div>
//         </div>
//     </div>
//     <div class="column" id="second">
//         <p>${item.price}$</p>
//     </div>
//     <div class="column" id="third">
//         <div class="counter">
//             <input type="button" value="${item.cifr}" class="btn minus">
//             <p class="count">${item.count}</p>
//             <input type="button" value="${item.cifr2}" class="btn plus">
//         </div>
//     </div>
//     <div class="column" id="forth">
//         <p>$45</p>
//     </div>
//     <div class="column" id="fifth">
//         <p class="delete">x</p>
//     </div>
// </div>`
// basket_card.innerHTML += basket
// })







let basket_cards = [
    {

        src: "../img/man.jpg",
        title: "iluha",
        price: 40000000,
        color: "blue",
        size: "XLXLXLXLXLXL",
        cifra: "sak",
        cifra2: "sak2",
        count: "nah",
        total: 3000000909998,
        delete_point: "cancel in ass"

    },
    {

        src: "../img/man.jpg",
        title: "arin",
        price: 90000,
        color: "pink",
        size: "XLXLXL",
        cifra: "sak3",
        cifra2: "sak4",
        count: "nahu",
        total: 1000000009090,
        delete_point: "cancel in ass"

    },
    {

        src: "../img/woman.jpg",
        title: "zhenya",
        price: 400000000000,
        color: "orange",
        size: "XLXL",
        cifra: "sak3",
        cifra2: "sak4",
        count: "nahui",
        total: 213423452349978,
        delete_point: "cancel in ass"

    },
    
]



let iluhakrasava = document.querySelector('.basket .products-container ')
console.log(iluhakrasava)

iluhakrasava.innerHTML = ``


basket_cards.forEach(item =>{
    let musor = `
    <div class="item">
                <div class="column" id="first">
                    <div class="card">
                         <div class="cover">
                             <img src="${item.src}" alt="">
                                <div class="circle"></div>
                        </div>
                    </div>
                        <div class="item-info">
                            <p class="name">${item.title}</p>
                            <div class="settings">
                                 <div class="ellipse" id=${item.color}></div>
                                  <p class="size">${item.size}</p>
                             </div>
                          </div>
                     </div>
                        <div class="column" id="second">
                            <p>${item.price}$</p>
                        </div>
                        <div class="column" id="third">
                            <div class="counter">
                                <input type="button" value="${item.cifra}" class="btn minus">
                                <p class="count">${item.count}</p>
                                <input type="button" value="${item.cifra2}" class="btn plus">
                            </div>
                        </div>
                        <div class="column" id="forth">
                            <p>${item.total}$</p>
                        </div>
                        <div class="column" id="fifth">
                            <p class="delete">${item.delete_point}</p>
                        </div>
                    </div>
    `
    iluhakrasava.innerHTML += musor
 })