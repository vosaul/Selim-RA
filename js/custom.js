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

  $('#scroll-btm').on('click', function(e){
      $('html, body').animate({
            scrollTop : $(this.hash).offset().top
        }, 1000, 'swing', function () {
      });
    });
 $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
           $('#scroll').addClass("active");
        } else { 
            $('#scroll').fadeOut(); 
           $('#scroll').removeClass("active");
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
$(window).scroll(function() {  
	var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$(".navigation_bar").addClass("darkHeader");
		} else {
        $(".navigation_bar").removeClass("darkHeader");
    }
	});






 $('#responsive-menu').click(function(e){
 
    $('.navigation_bar').toggleClass('active');
    $(".navigation_bar").removeClass("darkHeader");
    $(".overlay").removeClass("removebnr");
    $(".menu_blg ul").removeClass("removeul");
    $(".menu-icon").removeClass("checkmenu");

  });


  // $('.menu_blg ul li a').click(function(e){
  //  $('.navigation_bar').removeClass('active');
  //   $(".overlay").addClass("removebnr");
  //   $(".menu_blg ul").addClass("removeul");
  //   $(".menu-icon").addClass("checkmenu");


  // });

  $('.menu_blg ul li a').click(function() {
    $(".menu-icon").click();
    $('.navigation_bar').removeClass('active');
       });

