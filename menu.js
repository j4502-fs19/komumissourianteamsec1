
$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('#nav').slideToggle(500);
  });


  $(window).resize(function() {
	   if (  $(window).width() > 600 ) {
		$('#nav').removeAttr('style');
	 }
	});


});
