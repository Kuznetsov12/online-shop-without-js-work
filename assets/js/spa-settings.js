const info = [
    {
        url: "./assets/base/header.html",
        include: '.wrapper'
    },
    {
        url: "./assets/base/footer.html",
        include: '.footer-include'
    },
    {
        url: "./assets/pages/components/main.html",
        include: '.main-include'
    },
    {
        url: "./assets/pages/components/category.html",
        include: '.category-include'
    },
    {
        url: "./assets/pages/components/cards.html",
        include: '.cards-include'
    },
    {
        url: "./assets/pages/basket.html",
        include: '.basket-include'
    },
    {
        url: "./assets/pages/order.html",
        include: '.order-include'
    },
    {
        url: "./assets/pages/product.html",
        include: '.product-include'

    }
]


info.forEach(item =>{
    fetch(item.url)
    .then(response =>{
    return response.text()
    })
    .then(data =>{
        document.querySelector(item.include).innerHTML = data
    switch(item.include){
        case '.cards-include':
            setCards(cards_data)
            break
        case '.order-include':
            setCheckboxes()
            break
        case '.basket-include':
            set_basket_cards()
            setTotal()
            break
            default:
                break 
    }
        
    // if(item.include === '.basket-include'){
    //     set_basket_cards()
    //     setTotal()
    // }
    })
})

fetch('https://run.mocky.io/v3/b5ebb717-bb68-452c-abb3-19c45cebcb38') 
.then(response =>{   
    return response.json()

}).then(data =>{
    links.push(...data)
    let linksContainerTwo = document.querySelector('.nav-links')
    links.forEach(item =>{
        console.log(item.src)
        let linkTwo = `<a href="#" onclick="navigation('${item.src}')">${item.title}</a>`
        linksContainerTwo.innerHTML += linkTwo
    })
})










