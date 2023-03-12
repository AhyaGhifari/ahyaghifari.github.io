$(document).ready(function () {
    $.getJSON("assets/portofolio/portofolio.json", function (data) {
        var web = data.portofolio.web;
        $.each(web, function (i, w) { 
            $('#projects-container').append(`
                <button class="projects flex items-center text-xl md:text-2xl md:w-9/12 lg:w-7/12 text-olive border-b py-5 border-olive w-full text-left transition duration-300 ease-in-out px-1 hover:font-semibold hover:scale-[1.02]" data-slug="${w.slug}"><img src="assets/portofolio/${w.slug}/icon.svg" class="w-[25px] sm:w-[28px] mr-2" /> ${w.name}</button> 
            `);
        });
        }
    );
    $(document).on('click', '.projects', function (e) { 
        e.preventDefault();
        var slug = $(this).data('slug');
        $.getJSON("assets/portofolio/portofolio.json", function (data) {
            var web = data.portofolio.web;
            $('#project-uses p').remove()
                $.each(web, function (i, w) { 
                    if (w.slug === slug) {
                        $('#project-image').attr('src', 'assets/portofolio/' + w.slug + "/" + w.image);
                        $('#project-icon').attr('src', 'assets/portofolio/' + w.slug + "/icon.svg")
                        $('#project-name').html(w.name)
                        $('#project-type').html(w.type + " Website")
                        $('#project-notes').html(w.notes)
                        $.each(w.uses, function (i, u) { 
                            $('#project-uses').append(`
                            <p>${u}</p> 
                            `)
                        });
                        $('#project-link').attr('href', w.link)
                        setTimeout(() => {
                            $('#project').addClass('active');
                        }, 100);
                    }
                });                
            }
        );
    });
    $(document).on('click', '#project-close-btn', function () {
        $('#project').removeClass('active');
    })
});