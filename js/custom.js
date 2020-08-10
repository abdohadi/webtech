$(function() {
	// NiceScroll
    $("body").niceScroll({
    	cursorcolor: "#E41B17",
    	cursoropacitymin: 0.4,
    	cursorborder: "1px solid #888",
    });

    // Initialize the slider
    $('.slider').bxSlider({
    	randomStart: true,
    	pager: false,
    	nextText: "<i class='fas fa-chevron-right'></i>",
    	prevText: "<i class='fas fa-chevron-left'></i>",
    	auto: true,
    	autoHover: true,
    });

    // Initialize mixitup
    var mixer = mixitup('.mixitup-container');


    // Smooth scroll when clicking navbar links
    $('a.section-link, .hire-us').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('#' + $(this).data('target-id')).offset().top
        }, 500);
    });

    // Scroll to about section when clicking the 'arrow-down'
    $('.arrow-down').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 500);
    });

    // Hide header intro when displaying the navbar links in small devices
    $('.navbar .navbar-toggler').on('click', function() {
        $('header .intro').fadeToggle(250);
    });

    // Show 'arrow-up' when reaching about section
    $(document).on('scroll', function() {
        if ($(window).scrollTop() >= $('#about').offset().top) { 
            $('.arrow-up').fadeIn(300);
        } else {
            $('.arrow-up').fadeOut(300);
        }
    });

    // Scroll to top when clicking 'arrow-up'
    $('.arrow-up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});