$(document).ready(function () {
    var tl = gsap.timeline();
    tl.from("#about h1", {
        text:{
            value: ""
        },
        duration: 1
    })
    tl.from("#about p", {
        text: {
            value: ""
        },
        duration: 5,
    })
    tl.from("#about-image", {
        y: 10,
        opacity: 0,
        duration: 0.8
    })
    tl.from("#about-cloud-1", {
        x: 10,
        opacity: 0,
        duration: 0.8
    })
    tl.from("#about-cloud-2", {
        x: 10,
        opacity: 0,
        duration: 0.5
    })
    tl.from("#about-cloud-3", {
        x: 10,
        opacity: 0,
        duration: 0.7
    })
});