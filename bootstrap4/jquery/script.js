(function(){
	$('.page-scroll').on('click', function(e){
		var link = $(this).attr('href');
		var elementLink = $(link);

		$('html,body').animate({
			scrollTop: elementLink.offset().top - 50
		},2000,'easeInOutExpo');

		e.preventDefault();
	});
})();

$(window).on('load',function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function(){
	
	var wScroll = $(this).scrollTop();

	// Portfolio
	if(wScroll > $('.portfolio').offset().top - 250){
		$('.portfolio .card').each(function(index){
			setTimeout(function(){
				$('.portfolio .card').eq(index).addClass('muncul');
			},300*(index+1));
		}); 
	}
});