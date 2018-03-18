
$(document).ready(function(){

	// Smooth Scroll
	$('a').click(function(){
	    var top = $('body').find($(this).attr('href')).offset().top;
	    $('html, body').animate({
	        scrollTop: top
	    },1500, 'easeInOutCubic');
	
	    return false;
	});

	// Mobile Nav
	$('.menu, #nav-mobile a').on('click', function() {
        $('.menu').toggleClass('menu-open'); // Burger Animation
        $("body").toggleClass("js-menu__toggle"); // Toggle Scrollbars
        $('#nav-mobile').slideToggle(450); // Slide In
        $('#nav-mobile ul').toggleClass('js-menu__open'); // Fade in
    });

});

$(window).load(function() {

	setTimeout(function(){
                $('#hola img').velocity({
                    opacity : 0.1,
                    translateY: "-80px"
                }, {
                    duration: 400,
                    complete: function(){
                    $('#hola').velocity({
                    translateY : "-100%"
                }, {
                    duration: 1000,
                    easing: [0.7,0,0.3,1],
                })  
                    }
                })
            },300)

	// Start Block Reveal
  		setTimeout(function(){
    	$('#home__section h1').removeClass('pre_appear')
  	}, 1200)

	// Define Wow Options
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

	// Start Wow
    setTimeout(function(){ 
    	wow.init(); 
    }, 900);

    // Rellax.js
    var rellax = new Rellax('.rellax');

});

// Hide Down Arrow
$(window).scroll(function(){
	$("#scroll_down").css("opacity", 1 - $(window).scrollTop() / 500);
});

// Swirl #2 Effects
var swirl02 = $('#swirl02');
$(window).resize(function(){
	if ($(window).width() > 1280){	
		$(window).scroll(function () {
			var st = $(this).scrollTop();
			swirl02.css({'background-position':'center calc(0% + '+(st*-.09375)+'px)'});
		});
	}	
});



