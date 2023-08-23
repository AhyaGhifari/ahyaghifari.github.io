$(document).ready(function () {
    

    let mm = gsap.matchMedia();   

    function animation() {
        gsap.from('#me', {
            opacity: 0,
            x: -50,
            duration: 1
        })
        gsap.from('h3', {
            text: {
                value: ''
            },
            duration: 1
        })
        gsap.from('h1', {
            scale: 1.1,
            opacity: 0,
            duration: 0.5,
            delay: 1
        })
        gsap.from('#explore-portfolio', {
            y: 100,
            opacity: 0,
            duration: 0.6,
            delay: 1.5
        })
    }

    mm.add('(max-width: 767px)', () => {
        animation()
    })
    mm.add('(min-width: 768px)', () => {
        animation()
    })

    $('.nav-btn').click(function () {
        $('#nav-list').toggleClass('active')
    })

});