document.addEventListener('DOMContentLoaded',function(){
    const menu= document.getElementById('menu')

    const navMenu=document.querySelector('.nav--menu')

    menu.addEventListener('click', function(){
       // window.alert('clikkkkk')
        navMenu.classList.toggle('translate--menu')
    })
})