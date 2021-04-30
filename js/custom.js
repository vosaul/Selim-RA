/*------------------------------------File Name: custom.js---------------------------------------------*/



/* Scroll to Top*/

$(window).on('scroll', function () {
	scroll = $(window).scrollTop();
	if (scroll >= 100) {
		$("#back-to-top").addClass('b-show_scrollBut')
	} else {
		$("#back-to-top").removeClass('b-show_scrollBut')
	}
});


$("#back-to-top").on("click", function () {
	$('body,html').animate({
		scrollTop: 0
	}, 1000);
});



$(window).scroll(function() {  
	var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$(".navigation_bar").addClass("darkHeader");
		} else {
        $(".navigation_bar").removeClass("darkHeader");
    }
	});






 $('#menu-icon').click(function(){
    $('.navigation_bar').toggleClass('active');
    $(".navigation_bar").removeClass("darkHeader");
  });


