gsap.from("#me h1", {
            text: {
                value: ""
            },
            opacity: 0,
            duration: 3,
            // ease: "power4.out"
        });
        gsap.from("#me img", {
            opacity: 0,
            duration: 1,
            delay: 5,
        })
        gsap.from("#me p", {
            text:{
                value: ""
            },
            opacity: 0,
            duration: 3,
            delay: 2,
        })