
const menuBtn = document.querySelector('header nav .menu-btn')

menuBtn.addEventListener("click", ()=>{
    document.querySelector('header nav .menu').classList.toggle("active")
})


const featureBtn = document.querySelectorAll('.feature .content nav button')

featureBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.feature .content nav button.active').classList.remove('active')
        btn.classList.add('active')
    })
})