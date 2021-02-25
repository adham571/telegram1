let contactsListElement = document.querySelector(".contacts-list")
let infoTitleElement = document.querySelector(".info-title")
let messagesListElement = document.querySelector(".massage-list")
let modalImageElement = document.querySelector(".rasm")
let modalNameElement = document.querySelector(".group-name")
let modalNumberElement = document.querySelector(".profil-number")

data.users.forEach(user =>{
    let newUserItemElement = document.createElement("li")
    newUserItemElement.classList.add("contact-item")
    let newUserImageElement = document.createElement("img")
    newUserImageElement.classList.add("image-avatar")
    newUserImageElement.src = user.photo
    newUserItemElement.appendChild(newUserImageElement)
    let newUserTextElement = document.createElement("p")
    newUserTextElement.classList.add("contact-name")
    newUserTextElement.textContent = user.name
    newUserItemElement.appendChild(newUserTextElement)

    newUserItemElement.addEventListener('click', event => {
        messagesListElement.textContent = ""
        modalImageElement.src = user.photo
        modalNameElement.textContent = user.name
        modalNumberElement.textContent = user.phonenumber
        infoTitleElement.textContent = user.name


        user.messages.forEach( message => {
            newMessageItemElement = document.createElement("p")
            newMessageItemElement.classList.add("massage-text")
            newMessageItemElement.textContent = message.text
            if( message.owner){
                newMessageItemElement.classList.add("send")
            } else{
                newMessageItemElement.classList.add("from")
            }
            messagesListElement.appendChild(newMessageItemElement)
        })
    })
    contactsListElement.appendChild(newUserItemElement)
})
infoTitleElement.addEventListener('click',function(event){
    document.body.classList.toggle("body-modal")
})

let modalElementOpasityClose = document.querySelector(".close")
modalElementOpasityClose.addEventListener('click', function (e){
    document.body.classList.toggle("body-modal")
})


let openleftModalElement = document.querySelector(".settings-icon")
let closeLeftModalElement = document.querySelector(".left-modal-opasity")
openleftModalElement.addEventListener('click', function(event){
    document.body.classList.add("left-modal")
})

closeLeftModalElement.addEventListener('click', function(event){
	document.body.classList.toggle('left-modal')
})




let massageFormElement = document.querySelector(".massage-form")
let massageTextareaElement = document.querySelector(".massage-textarea")
let massageListElement = document.querySelector(".massage-list")

massageFormElement.onsubmit = function (event){
    event.preventDefault()
    
    let newMassageItemElement = document.createElement("li")
    newMassageItemElement.classList.add("massage-item")
    let newMassageTextElement = document.createElement("p")
    newMassageTextElement.classList.add("massage-text")
    massageTextareaElement.focus()
    newMassageTextElement.textContent =  massageTextareaElement.value
    newMassageItemElement.appendChild(newMassageTextElement)
    massageListElement.appendChild(newMassageItemElement)
    massageFormElement.reset()
}

let paperElement = document.querySelector(".footer-icon-left")

paperElement.onclick = function (){
    window.location.href = "https://www.google.com" 
}




let searchInputElement = document.querySelector(".search-input")
let searchFormElement = document.querySelector(".search-form")
let searchListElement = document.querySelector(".contacts-list")

searchFormElement.addEventListener('keyup', function (event){
    event.preventDefault()
    searchListElement.textContent = ""
    let searchInputValue = searchInputElement.value

    let filteredContacts = search(searchInputValue)

    renderData(filteredContacts)
})


function renderData(array){
    if(array.length){
        for(let item of array){
            let newSearchImgElement = document.createElement("img")
            newSearchImgElement.classList.add("image-avatar")
            newSearchImgElement.src = item.photo
            let newSearchLiElement = document.createElement("li")
            newSearchLiElement.classList.add("contact-item")
            let newSearchTextElement = document.createElement("p")
            newSearchTextElement.classList.add("contact-name")
            newSearchTextElement.textContent = item.name

            newSearchLiElement.textContent = item.title
            newSearchLiElement.appendChild(newSearchImgElement)
            newSearchLiElement.appendChild(newSearchTextElement)
            searchListElement.appendChild(newSearchLiElement)
        }
    }
}

function search(name){
   
    let filtered = data.users.filter( user =>{
        return user.name.toLowerCase().includes(name)
    })
    return filtered
}













