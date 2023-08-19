$(document).ready(function () {
    
    let mm = gsap.matchMedia();
    let tl = gsap.timeline()

        
        mm.add("(max-width: 767px)", () => {
            
            tl.from('#empty-el', {
                duration: 0.1
            })
            tl.from('h1', {
                    y: -30,
                    duration: 0.5,
                    opacity: 0
                })
        tl.from('#main-headphone', {
            scale: 0.3,
            rotate: 640,
            opacity: 0,
            duration: 1.5,
            ease: "back.out(0.5)"
        })

        tl.from('#name', {
            x: -20,
            duration: 0.5,
            opacity: 0
        })
        tl.from('#location', {
            x: -20,
            duration: 0.5,
            opacity: 0
        })
        tl.from('#thanks', {
            x: -20,
            duration: 0.5,
            opacity: 0
        })
        tl.from('#bg-headphone', {
            x: '100%',
            duration: 0.5,
            opacity: 0
        })

    });
    mm.add("(min-width: 768px)", () => {
    
        tl.from('#empty-el', {
            duration: 0.1
        })

        tl.from('h1', {
                    y: -30,
                    duration: 0.5,
                    opacity: 0
                })

        tl.from('#main-headphone', {
            scale: 0.3,
            rotate: 640,
            opacity: 0,
            duration: 1.5,
            ease: "back.out(0.5)"
        })

        tl.from('#name', {
            scale: 0.3,
            x: '100%',
            duration: 0.5,
            opacity: 0
        })
        tl.from('#location', {
            scale: 0.3,
            y: '-100%',
            duration: 0.5,
            opacity: 0
        })
        tl.from('#thanks', {
            scale: 0.3,
            x: '-100%',
            duration: 0.5,
            opacity: 0
        })
        tl.from('#bg-headphone', {
            scale: 0.3,
            y: '-50%',
            x: '-100%',
            duration: 0.5,
            opacity: 0
        })

    });
});