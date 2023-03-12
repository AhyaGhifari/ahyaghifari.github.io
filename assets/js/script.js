$(document).ready(function () {
    $('title').html('Home | Ahya Ghifari');
    $("main").load("home.html");
    
    $('.nav').click(function () {
        $('#main-transition').addClass('fade-in');
        var nav = $(this).data('nav');
        $('title').html(nav[0].toUpperCase() + nav.slice(1) + ' | Ahya Ghifari');
        $('#main-transition').html(nav + ".");
        $('.nav').removeClass('active');
        $(this).addClass('active');
        setTimeout(function(){
            $('main').load(nav + ".html");
            $('#main-transition').removeClass('fade-in');
            $('#main-transition').addClass('fade-out');
        }, 1000);
        setTimeout(function () {
            $('#main-transition').removeClass('fade-out');
            $('#main-transition').addClass('done');
        }, 2000);
        setTimeout(function () {
            $('#main-transition').removeClass('done');
        }, 2500)
    });
});