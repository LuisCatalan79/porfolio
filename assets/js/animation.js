// Api web animations

document.addEventListener('DOMContentLoaded', function(){
    const progressBar=document.getElementById('progress')

    progressBar.animate(
        //como primer argumento, el metodo recibe un array de objetos que describen los estados de la animacion 
        [
            {width:0},
            {width:'100%'}
        ],
        {
            fill:'forwards',
            timeline:new ScrollTimeline({
                subject:document.documentElement
            })
        }
    )

       const sections = document.querySelectorAll("section")

       sections.forEach(function(section){
        section.animate(
            [
                {opacity:0, transform: "translateY(200px)", scale: 0.5},
                {opacity:1, transform: "translateY(0)", scale: 1}
            ],
            {
                fill:'both',
                timeline:new ViewTimeline({
                    subject: section
                }),
                rangeStart: 'entry 10%',
                rangeEnd:'cover 45%'
            }
        )
       })

})
