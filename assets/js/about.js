$(document).ready(function () {
    gsap.from("#about h1", {
        text:{
            value: ""
        },
        duration: 1
    })
    gsap.from("#about p", {
        text: {
            value: ""
        },
        duration: 5,
        opacity: 0,
        delay: 1
    })
    gsap.from("#about-image",{
        width: 0,
        opacity: 0,
        duration: 1.5,
        delay: 6
    })
});