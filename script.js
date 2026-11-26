let btn = document.querySelector('#toggle')

let card = document.querySelector('.card')


btn.addEventListener('click', function (){
    card.classList.toggle('dark-mode')

    // ubah sesuai mode 
    if( card.classList.contains('dark-mode')){
        btn.innerHTML = 'Light Mode'
        btn.style.backgroundColor = 'antiquewhite'
        btn.style.color = 'black'
    }else {
        btn.innerHTML = 'Dark Mode'
        btn.style.backgroundColor = 'black'
        btn.style.color = 'white'
    }

})