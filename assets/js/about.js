$(document).ready(function () {
    
    gsap.from('#about h1', {
        text: {
            value: ''   
        },
        opacity: 0,
        duration: 1
    })

    gsap.from('#about p', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1
    })

    gsap.from('#contact h1', {
        text: {
            value: ''   
        },
        opacity: 0,
        duration: 1
    })

    gsap.from('#contact h4', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1
    })
    gsap.from('#contact div li', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1
    })



    //     mm.add("(max-width: 767px)", () => {
            
    //         tl.from('#empty-el', {
    //             duration: 0.1
    //         })
    //         tl.from('h1', {
    //                 y: -30,
    //                 duration: 0.5,
    //                 opacity: 0
    //             })
    //     tl.from('#main-headphone', {
    //         scale: 0.3,
    //         rotate: 640,
    //         opacity: 0,
    //         duration: 1.5,
    //         ease: "back.out(0.5)"
    //     })

    //     tl.from('#name', {
    //         x: -20,
    //         duration: 0.5,
    //         opacity: 0
    //     })
    //     tl.from('#location', {
    //         x: -20,
    //         duration: 0.5,
    //         opacity: 0
    //     })
    //     tl.from('#thanks', {
    //         x: -20,
    //         duration: 0.5,
    //         opacity: 0
    //     })
    //     tl.from('#bg-headphone', {
    //         x: '100%',
    //         duration: 0.5,
    //         opacity: 0
    //     })

    // });
    // mm.add("(min-width: 768px)", () => {
    
    //     tl.from('#empty-el', {
    //         duration: 0.1
    //     })

    //     tl.from('h1', {
    //                 y: -30,
    //                 duration: 0.5,
    //                 opacity: 0
    //             })

    //     tl.from('#main-headphone', {
    //         scale: 0.3,
    //         rotate: 640,
    //         opacity: 0,
    //         duration: 1.5,
    //         ease: "back.out(0.5)"
    //     })

    //     tl.from('#name', {
    //         scale: 0.3,
    //         x: '100%',
    //         duration: 0.5,
    //         opacity: 0
    //     })
    //     tl.from('#location', {
    //         scale: 0.3,
    //         y: '-100%',
    //         duration: 0.5,
    //         opacity: 0
    //     })
    //     tl.from('#thanks', {
    //         scale: 0.3,
    //         x: '-100%',
    //         duration: 0.5,
    //         opacity: 0
    //     })
    //     tl.from('#bg-headphone', {
    //         scale: 0.3,
    //         y: '-50%',
    //         x: '-100%',
    //         duration: 0.5,
    //         opacity: 0
    //     })

    // });

     $('.nav-btn').click(function () {
        $('#nav-list').toggleClass('active')
    })
});