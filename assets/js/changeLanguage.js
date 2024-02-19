document.addEventListener('DOMContentLoaded',function(){
    const elementsToTranaslate= document.querySelectorAll('[data-translate-es]')
    const btnChangeLanguage = document.getElementById('btn-translate')

    let language='es'

    btnChangeLanguage.addEventListener('click', function(){

        if (language==='es') {
            
            for(const phrase of elementsToTranaslate){
                const translation=phrase.getAttribute('data-translate-en')
                phrase.textContent=translation
            }
            document.getElementById('downloadCv').href='../cv/cv_en.pdf'
            language='en'
        } else {
            for(const phrase of elementsToTranaslate){
                const translation=phrase.getAttribute('data-translate-es')
                phrase.textContent=translation
            }
            document.getElementById('downloadCv').href='../cv/cv_es.pdf'
            language='es'
        }  
    })






})