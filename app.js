const API_KEY = '3TRpwMLAo7tXOCC4GRJj1r3O7eOrdJZlu94gHdZxf7rLD6IMzMSUz1Ty';

const alert = document.querySelector('.alert')
const input = document.querySelector('.input');
const formBtn = document.querySelector('.search_btn');
let searchText = "";
let search = false

// /default photos

async function defaultPhotos(){
    const data = await fetch(`https://api.pexels.com/v1/curated`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            Authorization:API_KEY,
        }
    })
    const response = await data.json()
    console.log(response)
    displayImages(response)
}

function displayImages(response){
    response.photos.forEach((image)=>{
        const photodiv = document.createElement("div")
        photodiv.innerHTML = `
        <a href=${image.src.large} target="_blank">
            <img class="image" src=${image.src.large} alt=${image.url} width="400' height="400">

        </a>
        <figcaption class="caption">📸${image.photographer}></figcaption>
        `
        document.querySelector('.display_images').appendChild(photodiv)
    })
}

// search photo

async function searchPhotos(query){
    const data = await fetch(`https://api.pexels.com/v1/search?query=${query}`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            Authorization:API_KEY,
        }
    })
    const response = await data.json()
    console.log(response)

    displayImages(response)
}

input.addEventListener('input',(e)=>{
    e.preventDefault()
    searchText = e.target.value

})

formBtn.addEventListener("click",()=>{
    if(input.value === ''){
        document.querySelector('.alert').innerHTML = 'Empty search! Please add any value'
    }else{
        document.querySelector('.alert').innerHTML = ""
        clear()
        search = true
        searchPhotos(searchText)
        input.value = ''
    }
})




function clear(){
    document.querySelector('.display_images').innerHTML = ""

}

defaultPhotos()