$(document).ready(function () {
    $('#nav-toggle').click(function(){
            $(this).toggleClass('active');
            $('#nav-list').toggleClass('active');
        });
        $("main").load("me.html");

        $('.nav').click(function(){
            $('main').removeClass("fade-in");
            var nav = $(this).data('nav');
            $('#nav-list').removeClass('active');
            $('#nav-toggle').toggleClass('active');
            $('main').addClass('fade-out');
            setTimeout(function(){
                $('main').removeClass('fade-out');
                $('main').load(nav+".html");
                $('main').addClass("fade-in");
            }, 1500);
            });
});