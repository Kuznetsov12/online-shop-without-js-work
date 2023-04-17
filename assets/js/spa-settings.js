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

    },

    

    
]


info.forEach(item =>{
    fetch(item.url)
    .then(response =>{
    return response.text()
    })
    .then(data =>{
    document.querySelector(item.include).innerHTML = data
    if(item.include === '.cards-include'){
        setCards()
    }
    if(item.include === '.basket-include'){
        set_basket_cards()
        setTotal()
    }
    })
})











