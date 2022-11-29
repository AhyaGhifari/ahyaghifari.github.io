 var me = document.getElementById('me-image');
        var p = new Parallax(me);

$(document).ready(function () {
    
     $('img').bind('contextmenu', function (e) {
        return false;
     });

    let y = new Date();
    $('#thisyear').html(y.getFullYear());

    $('#old').html(y.getFullYear() - 2003);

    $('.menu-toggle').click(function (e) {
        $('nav').toggleClass('nav-anim');
        $('.menu-toggle').toggleClass('hidden');
    });

    // GSAP

    gsap.to("#me h1", {
        duration: 1.5,
        text: {
            value: "Ahya Ghifari",
        },
    }); 

    gsap.from("#works-header p", {
        scrollTrigger: {
            trigger: '#works',           
        },
        duration: 2,
        text: {
            value: "",
        },
    }); 

    gsap.set("#designs", {perspective: 500});
    gsap.from("#designs img", {
        scrollTrigger: "#design h3",
        scale: 0.5,
        opacity: 0,
        transformOrigin: "bottom center",
        rotationX: "30deg",
        duration: 1,
        ease: "power3.in",
        delay: "random([0.1, 0.2, 0.6])"
        
    });

    gsap.from("#vectors img", {
        trigger: "#vector h3",
        translateY: "-4vh",
        duration: 0.8,
        opacity: 0,
        delay: "random([0, 0.2, 0.4])",
        ease: "power2.in"
    });

    gsap.from("#about h1", {
        scrollTrigger: "#about",
        duration: 0.8,
        scaleX: 0,
        opacity: 0.5
    });

    // TILT
    $('#manipulations img').tilt({
        maxTilt: 15,
        glare: true,
        speed: 500,
        maxGlare: .8,
        scale: 1.025
    });


});

