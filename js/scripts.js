
$(document).ready(function(){

	// Smooth Scroll
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top + 25
		}, 1000, function(){
		});
	} 
	});

	// Mobile Navigation
	$('.menu, #mobile-nav a').on('click', function() {
        $('.menu').toggleClass('menu-open');
        $('#mobile-nav').slideToggle(600);
        $("body").toggleClass("js-menu__toggle");
        $('#mobile-nav ul').toggleClass('js-menu__open');
    });

});

$(window).load(function() {

	// Hide Preloader
	$("#loading img").fadeOut(600);
	$("#loading").delay(300).fadeOut(600);

	// Start Block Reveal
	$('#home h1').addClass('pre_appear')
  		setTimeout(function(){
    	$('#home h1').removeClass('pre_appear')
  	}, 600)

	// Wow.js
	var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 100, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

    // Rellax.js
    var rellax = new Rellax('.rellax');

});

// Hide Down Arrow
$(window).scroll(function(){
	$("#scroll_down").css("opacity", 1 - $(window).scrollTop() / 350);
});


