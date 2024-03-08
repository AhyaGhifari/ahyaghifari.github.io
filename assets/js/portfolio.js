$(document).ready(function () {

    let mm = gsap.matchMedia();   

    function animation() {
        gsap.from('h1', {
            x: -30,
            opacity: 0,
            duration: 1.5
        })
        gsap.from('h2', {
            width: 0,
            opacity: 0,
            duration: 1,
            delay: 1.5
        })

        gsap.from('#website', {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 2.5
        })

        setTimeout(() => {
            $('#website').removeClass('hidden')
        }, 500);
    }

    mm.add('(max-width: 767px)', () => {
          animation()
    })
    mm.add('(min-width: 768px)', () => {
        animation()
    })

    let owl = $('.website-carousel').owlCarousel({
        items: 1,
        stagePadding: 2,
        center: true,
        responsive: {
            0: {
                autoplay: true,
                loop: true,
                items: 1
            },
            768: {
                autoplay: false,
                loop: true,
                items: 3
            }
        }
    })

    let websites = []

    function appendWebsites() {
        $('.website-carousel div').remove()
        $.each(websites, function (i, w) { 
            $('.website-carousel').append(`<div class="h-[250px] w-[250px] md:h-[300px] md:w-[300px] aspect-[1/1] w-full flex justify-center items-center overflow-visible">
                <input type="hidden" value="${w.code}" class="website-code">
                    <img src="/assets/images/${w.code}/preview.png" class="object-cover h-[250px] w-[250px] md:h-[300px] md:w-[300px] aspect-[1/1] object-cover shadow js-tilt" alt="">
            </div>`)
        });
        owl.owlCarousel('initialize')
        $('.js-tilt').tilt({
            maxTilt: 5,
            glare: true,
            // maxGlare: 2
        })
    }

    $.getJSON("assets/data/portfolio.json", function (data) {
            websites = data
            $('#website-name').html(data[0].name)
            $('#website-type').html(data[0].type)
            $('#website-note').html(data[0].note)
            $('#website-uses').html(data[0].uses)
            $('#website-link').attr('href', data[0].link)
            appendWebsites()
        }
    );
    
    
    owl.on('changed.owl.carousel', function (event) {
        setTimeout(() => {
            var find = websites.find((v) => v.code == $('.owl-item.active.center .website-code').val())            
            $('#website-name').html(find.name)
            $('#website-type').html(find.type)
            $('#website-note').html(find.note)
            $('#website-uses').html(find.uses)
            $('#website-link').attr('href', find.link)
        }, 100);
    })

     $('.nav-btn').click(function () {
        $('#nav-list').toggleClass('active')
    })

});