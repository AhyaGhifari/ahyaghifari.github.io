var tl = gsap.timeline();
tl.from("#home-name", {
    text: {
        value: ""
    },
    duration: 1.5,
    opacity: 0
})
tl.from("#home-profile", {
    text: {
        value: ""
    },
    duration: 2.5,
})
tl.from('.home-leaf-2', {
    scale: 1.5,
    rotate: 2,
    opacity: 0,
    duration: 1
})
tl.from('.home-leaf-1', {
    rotate: 1,
    scale: 1.5,
    opacity: 0,
    duration: 1
})