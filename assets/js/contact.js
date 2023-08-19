$(document).ready(function () {
    let tl = gsap.timeline()

    tl.from('h1', {
        text: {
            value: ''
        },
        duration: 1
    })    
    
    let contacts = gsap.utils.toArray('.contacts')

    contacts.forEach(element => {
        tl.from(element, {
            scale: 1.2,
            opacity: 0,
    
        })
    });

});