$(document).ready(function () {
    
    var tl = gsap.timeline()

    tl.from('#home-svg', {
        transformOrigin: 'left bottom',
        scale: 0,
        duration: 0.5
    })

    tl.from('h1', {
        text: {
            value: ''
        },
        duration: 1.5,
    })

    tl.from('#explore-portfolio', {
        y: 20,
        opacity: 0,
        duration: 0.5
    })

});