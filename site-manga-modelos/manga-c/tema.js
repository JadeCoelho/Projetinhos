tema = document.getElementsByClassName('tema')
lua = document.getElementById('lua')
sol = document.getElementById('sol')
header = document.getElementsByTagName('header')


function muda(){
    if (lua.classList.contains('bxs-moon')){
        lua.classList.remove('bxs-moon')
        lua.classList.add('bxs-sun')
    
    } else if (lua.classList.contains('bxs-sun')){
        lua.classList.remove('bxs-sun')
        lua.classList.add('bxs-moon')
        document.body.style.backgroundColor='#15151d'
    } 
}
