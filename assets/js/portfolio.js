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
                items: 2
            }
        }
    })

    let websites = [1, 2, 3, 4, 5]

    function appendWebsites() {
        $('.website-carousel div').remove()
        $.each(websites, function (i, w) { 
            $('.website-carousel').append(`<div class="h-[40vh] md:h-[50vh] lg:h-[45vh] w-full flex justify-center items-center">
                <input type="hidden" class="website-name" value="${w.name}" />
                <input type="hidden" class="website-note" value="${w.note}" />
                <input type="hidden" class="website-uses" value="${w.uses}" />
                <input type="hidden" class="website-link" value="${w.link}" />
                    <div class="w-11/12 sm:w-10/12 xl:w-8/12 mx-auto">
                        <img src="assets/images/${w.image}" class="object-cover" alt="">
                    </div>
                </div>`)
        });
        owl.owlCarousel('initialize')
    }

    $.getJSON("assets/data/portfolio.json", function (data) {
        websites = data
        $('#website-name').html(data[0].name)
        $('#website-note').html(data[0].note)
        $('#website-uses').html(data[0].uses)
        $('#website-link').attr('href', data[0].link)
        $('#portfolio-bg').attr('src', data[0].image)
        appendWebsites()
    }
    );
    
    
    owl.on('changed.owl.carousel', function (event) {
        $('#portfolio-bg').removeClass('in')
        setTimeout(() => {
            $('#portfolio-bg').addClass('in')
            $('#portfolio-bg').attr('src', $('.owl-item.active.center img').attr('src'))        
            $('#website-name').html($('.owl-item.active.center .website-name').val())
            $('#website-note').html($('.owl-item.active.center .website-note').val())
            $('#website-uses').html($('.owl-item.active.center .website-uses').val())
            $('#website-link').attr('href', $('.owl-item.active.center .website-link').val())
        }, 100);
    })

     $('.nav-btn').click(function () {
        $('#nav-list').toggleClass('active')
    })

});