
const getLinks = () =>{
    let linksContainer = document.querySelector('.nav-links')
    linksContainer.innerHTML = ''

    links.forEach(item =>{
        let link = `<h4>${item}</h4>`
        linksContainer.innerHTML += link
    })
}
const addLink = (e) =>{
    let inputLink = e.previousElementSibling.value
    if(inputLink.trim()){
        links.push(inputLink)
        getLinks()
    }

}
const getTitle = () =>{
    let titleText = document.querySelector('.title .container p')
    titleText.innerHTML = title
    titleText.style.display = 'block'
    titleText.parentNode.querySelector('.edit').style.display = 'block'
    titleText.parentNode.querySelector('input[type=text]').style.display = 'none'
    titleText.parentNode.querySelector('.save').style.display = 'none'
}


getTitle()

const changeTitle = (e =>{
    e.style.display = 'none'
    e.parentNode.querySelector('p').style.display = 'none'
    e.parentNode.querySelector('input[type=text]').style.display = 'inline-block'
    e.parentNode.querySelector('.save').style.display = 'block'
})

const saveTitle = (e) =>{
    title = e.parentNode.querySelector('input[type=text]').value
    getTitle()
}

