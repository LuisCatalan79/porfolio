document.addEventListener('DOMContentLoaded',function(){
    const changeMode = document.querySelector('#toggleModeBtn')
    //boton de cambio de tema
    const body= document.querySelector('body')
    //seleccion del body

    changeMode.addEventListener('click',function(){
        //console.log('cambio');
        const currentMode = changeMode.textContent.trim()
        if (currentMode==='light_mode') {
            changeMode.textContent='dark_mode'
            body.classList.remove('body--dark')
            document.getElementById('logo').src ='../../assets/img/logos/logo-ligth-sin-fondo.png'
            
        }else{
            changeMode.textContent='light_mode'
            body.classList.add('body--dark')
            document.getElementById('logo').src ='../../assets/img/logos/logo-dark-sin-fondo.png'
        }

    })

    console.log(changeMode);
})