let basket_cards = [
    {
    src: "./assets/img/t-shirt.png",
    title: "T-shirt summer collection",
    price: 1000,
    color: 'orange',
    size: 'XXXL iluha',
    cifr: '-',
    cifr2: '+',
    count: "1",

    },
    {
    src: "./assets/img/woman.jpg",
    title: "Woman of ur disare",
    price: 1,
    color: 'black',
    size: 'XXXXXXL',
    cifr: '-',
    cifr2: '+',
    count: "1",


    },
    {
    src: "./assets/img/clothes.jpg",
    title: "Одежда Ашота",
    price: 1000000,
    color: 'pink',
    size: 'XXXL',
    cifr: '-',
    cifr2: '+',
    count: "1",

    }
]
const set_basket_cards = () => {
let basket_card = document.querySelector('.basket .wrapper .table-basket .products-container ')
console.log(basket_card)

basket_cards.forEach(item =>{
    let basket = `
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
                <div class="ellipse" id="${item.color}"></div>
                <p class="size">${item.size}</p>
            </div>
        </div>
    </div>
    <div class="column" id="second">
        <p>${item.price}$</p>
    </div>
    <div class="column" id="third">
        <div class="counter">
            <input type="button" value="${item.cifr}" class="btn minus" onclick="changeCounter('minus' , this)" >
            <p class="count">${item.count}</p>
            <input type="button" value="${item.cifr2}" class="btn plus" onclick="changeCounter('plus' , this)">
        </div>
    </div>
    <div class="column" id="forth">
        <p>$45</p>
    </div>
    <div class="column" id="fifth">
        <p class="delete" onclick="DelContainer(this)">x</p>
    </div>
</div>`
basket_card.innerHTML += basket
})
}
function SortCard() {
    
    basket_cards.sort((a, b) => {
        return a.price - b.price
    })

}






// let basket_cards = [
//     {

//         src: "../img/man.jpg",
//         title: "iluha",
//         price: 40000000,
//         color: "blue",
//         size: "XLXLXLXLXLXL",
//         cifra: "sak",
//         cifra2: "sak2",
//         count: "nah",
//         total: 3000000909998,
//         delete_point: "cancel in ass"

//     },
//     {

//         src: "../img/man.jpg",
//         title: "arin",
//         price: 90000,
//         color: "pink",
//         size: "XLXLXL",
//         cifra: "sak3",
//         cifra2: "sak4",
//         count: "nahu",
//         total: 1000000009090,
//         delete_point: "cancel in ass"

//     },
//     {

//         src: "../img/woman.jpg",
//         title: "zhenya",
//         price: 400000000000,
//         color: "orange",
//         size: "XLXL",
//         cifra: "sak3",
//         cifra2: "sak4",
//         count: "nahui",
//         total: 213423452349978,
//         delete_point: "cancel in ass"

//     },
    
// ]



// let iluhakrasava = document.querySelector('.basket .products-container ')
// console.log(iluhakrasava)

// iluhakrasava.innerHTML = ``


// basket_cards.forEach(item =>{
//     let musor = `
//     <div class="item">
//                 <div class="column" id="first">
//                     <div class="card">
//                          <div class="cover">
//                              <img src="${item.src}" alt="">
//                                 <div class="circle"></div>
//                         </div>
//                     </div>
//                         <div class="item-info">
//                             <p class="name">${item.title}</p>
//                             <div class="settings">
//                                  <div class="ellipse" id=${item.color}></div>
//                                   <p class="size">${item.size}</p>
//                              </div>
//                           </div>
//                      </div>
//                         <div class="column" id="second">
//                             <p>${item.price}$</p>
//                         </div>
//                         <div class="column" id="third">
//                             <div class="counter">
//                                 <input type="button" value="${item.cifra}" class="btn minus">
//                                 <p class="count">${item.count}</p>
//                                 <input type="button" value="${item.cifra2}" class="btn plus">
//                             </div>
//                         </div>
//                         <div class="column" id="forth">
//                             <p>${item.total}$</p>
//                         </div>
//                         <div class="column" id="fifth">
//                             <p class="delete">${item.delete_point}</p>
//                         </div>
//                     </div>
//     `
//     iluhakrasava.innerHTML += musor
//  })








// let basket = [
//     {

//         src: "../img/man.jpg",
//         title: "iluha",
//         price: 40,
//         color: "pink",
//         size: "XL",
//         cifra: "sak1",
//         cifra2: "sak2",
//         count: "nan",
//         total: 3000,
//         delete_point: "sasi"
    
//     },
//     {

//         src: "../img/man.jpg",
//         title: "aldik",
//         price: 4,
//         color: "blue",
//         size: "XLXLXLXL",
//         cifra: "sak1",
//         cifra2: "sak2",
//         count: "nan",
//         total: 5,
//         delete_point: "sasi"
    
//     },
//     {

//         src: "../img/man.jpg",
//         title: "arin",
//         price: 400000,
//         color: "orange",
//         size: "XLXLXLXLXL",
//         cifra: "sak1",
//         cifra2: "sak2",
//         count: "nan",
//         total: 3000909090,
//         delete_point: "sasi"
    
//     }
// ]

// let ilyakros = document.querySelector('.basket .products-container')
// console.log(ilyakros)

// ilyakros.innerHTML = ``

// basket.forEach(item =>{
//     let musornyak = `
//                         <div class="item">
//                         <div class="column" id="first">
//                             <div class="card">
//                                 <div class="cover">
//                                     <img src="${item.src}" alt="">
//                                     <div class="circle"></div>
//                                 </div>
//                             </div>
//                             <div class="item-info">
//                                 <p class="name">${item.title}</p>
//                                 <div class="settings">
//                                     <div class="ellipse" id="${item.color}"></div>
//                                     <p class="size">${item.size}</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="column" id="second">
//                             <p>${item.price}$</p>
//                         </div>
//                         <div class="column" id="third">
//                             <div class="counter">
//                                 <input type="button" value="${item.cifra}" class="btn minus">
//                                 <p class="count">${item.count}</p>
//                                 <input type="button" value="${item.cifra2}" class="btn plus">
//                             </div>
//                         </div>
//                         <div class="column" id="forth">
//                             <p>${item.total}$</p>
//                         </div>
//                         <div class="column" id="fifth">
//                             <p class="delete">${item.delete_point}</p>
//                         </div>
//                     </div>
//     `

//     ilyakros.innerHTML += musornyak
// })


function clearContainer(){
    let basket_item = document.querySelector('.item')
    basket_item.setAttribute('style', 'display:none' , 'transition: 5s')
}

// function addNumber(){
//     let count = document.querySelector('.count')
//     let count_number = parseInt(count.innerHTML)
//     let total_old = document.querySelector('.item #forth p')
//     if(count_number >= 10){
//         alert('Не бывает больше .!.')
//         count.innerHTML = count_number
//     }   
//     else{
//         count_number += 1
//         let price = document.querySelector('.item #second p')
//         price = parseInt(price.innerHTML.replace('$' , ''))
//         if(count_number == 0){
//             total_old.innerHTML = 0
//         }
//         else{
//            let total = price * count_number
//             total_old.innerHTML = '$' + total 
//         }
//         count.innerHTML = count_number     
//     }


   

// }

// function minusNumber(){
//     let count = document.querySelector('.count')
//     let count_number = parseInt(count.innerHTML)
   
//     let total_old = document.querySelector('.item #forth p') 
//     if(count_number < 1){
//         total_old.innerHTML = 'Ты что долбаеб?'

//     }   
//     else{
//         count.innerHTML = count_number -=1
//         let price = document.querySelector('.item #second p')
//         price = parseInt(price.innerHTML.replace('$' , ''))
//         if(count_number == 0){
//             total_old.innerHTML = 0
//         }
//         else{
//         let total = price * count_number
//         total_old.innerHTML = '$' + total 
//         }
        
//     }

// }


function getDisount(discount){
    let price = document.querySelector('.item #second p')
    let new_price = parseInt(price.innerHTML.replace('$' , ''))
    let total = new_price - discount
    price.innerHTML = '$' + total
    
        if(total > 45){
        price.setAttribute('style' , 'color:red;')
        }
        else if(total < 45){
        price.setAttribute('style' , 'color:green;')
        }
        else{
        price.setAttribute('style' , 'color:black;')
        }
     
    
}






function changePrice(change = 0){
    let price = document.querySelector('.item #second p')
    let total_old = document.querySelector('.item #forth p')
    let new_price = parseInt(price.innerHTML.replace('$' , ''))
    let change_price = new_price + change
    total_old.innerHTML  = '$' + change_price
    price.innerHTML = '$' + change_price
    if(change_price == 45){
        price.setAttribute('style' , 'color:black;')

    }
    else{
        if(change_price > 45){
            price.setAttribute('style' , 'color:red;')
        }
        if(change_price < 45 ){
            price.setAttribute('style' , 'color:green;')
        }
    }

    return new_price
}


function addNumber(element){
    let current_product = element.parentNode.parentNode.parentNode
    let count = current_product.querySelector('.count')
    let total_old = current_product.querySelector('.item #forth p')
    let count_number = parseInt(count.innerHTML)
    if(count_number == 10){
        alert('Мы не курим мы перипатетизмом занимаемся')
    }
    else{
        count_number += 1
        let price = current_product.querySelector('.item #second p')
        price = parseInt(price.innerHTML.replace('$' , ''))
        let total = count_number * price
        total_old.innerHTML ='$' + total
        count.innerHTML = count_number
    }
    console.log(current_product)
  

}





function minusNumber(element){
    let current_product = element.parentNode.parentNode.parentNode
    let count = current_product.querySelector('.count')
    let total_old = current_product.querySelector('.item #forth p')
    let count_number = parseInt(count.innerHTML)
    if(count_number != 0){
        count_number -= 1
    }
    

    if(count_number <= 0){
        let basket_item = element.parentNode.parentNode.parentNode
        basket_item.remove()
  
    }

    else{
        let price = current_product.querySelector('.item #second p')
        price = parseInt(price.innerHTML.replace('$' , ''))
        let total = count_number * price
        total_old.innerHTML = '$' + total
        count.innerHTML = count_number
    }
 


}



function setTotal(){
    let products = document.querySelectorAll('.products-container .item')
    products.forEach(item =>{
        let price = item.querySelector('.item #second p ')
        let new_price = parseInt(price.innerHTML.replace('$' , ''))
        let total_old = item.querySelector(' .item #forth p')
        let count = item.querySelector('.count')
        let count_number = parseInt(count.innerHTML)
        let total = new_price * count_number
        count.innerHTML = count_number
        total_old.innerHTML = '$' + total
    })
    
}




const changeCounter = (action , element) =>{
    let counter = element.parentNode.querySelector('.count')
    console.log(counter)
    let count = parseInt(counter.innerHTML)
    let item = element.closest('.item')
    if(action === 'minus'){
        if(count > 0){
            count -= 1
        }
        else{
            let item =  element.parentNode.parentNode.parentNode
            if(item.classList.contains('item')){
                item.remove()
            }
         }
       
    }
    
    else{
        if(count >= 10){
            alert('я не курю яйца')
        }
        if( count != 10){
         count += 1
        }

    }
    counter.innerHTML = count
    if(item){
        let total_html = item.querySelector('#forth p')
        let price = parseInt(item.querySelector('#second p ').innerHTML.replace('$', ''))
        total_html.innerHTML ='$' + (price * count)
    }
}


















function total_sha(){
    let count = document.querySelector('.count')
    let total_old = document.querySelector('.item #forth p')
    let price = document.querySelector('.item #second p')
    let new_price = parseInt(price.innerHTML.replace('$' , ''))
    let count_number = parseInt(count.innerHTML)
    count_number += 1
    let total = new_price * count_number
    count.innerHTML = count_number
    total_old.innerHTML = total
}