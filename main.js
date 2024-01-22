//Responsive Nav
$(function(){
    menu= $('nav ul');

    $('#openuop').on('click', function(e) {
        e.preventDefault(); menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(this).width(); if(w> 480 && menu.is
            (':hidden')) {
                menu.removeAttr('style');
            }
    });

    $('nav li').on('clicl', function(e) {

        var w= $(window).width(); if(w < 480) {
            menu.slideToggle();
        }
    });

    $('.open-menu').height($(window).height());
});   

// Smooth Scrooling
$('.cf a').on('click', function(event) {
    if (this.hash !=='') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scroolTop: $(hash).offset().top
            },
            800,
            function(){
                window.location.hash= hash;
            }
        );
    } 
});