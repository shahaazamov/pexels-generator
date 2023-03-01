const btn = document.querySelector('.btn')
const light = document.querySelector('.light')
const body = document.querySelector('body')

const modeLocal = localStorage.getItem('mode')

if(modeLocal){
    body.classList.add('dark')
    btn.classList.toggle('hidden')
    light.classList.toggle('hidden')
}

const toggleBtn = ()=>{
    body.classList.toggle('dark')
    btn.classList.toggle('hidden')
    light.classList.toggle('hidden')
}


btn.addEventListener('click',()=>{
    toggleBtn()
    localStorage.setItem('mode','dark')
})
light.addEventListener('click',()=>{
    toggleBtn()
    localStorage.setItem('mode','')
})
