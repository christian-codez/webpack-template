$(document).ready(function(){
	$(document).scroll(function(){
		if($(document).scrollTop() > 30){
			$('.navbar').removeClass('nav-transparent');
			$('.navbar').addClass('nav-sticky');
		}else{
			$('.navbar').removeClass('nav-sticky');
			$('.navbar').addClass('nav-transparent');
		}
	});

	$('.nav-link').click(function(){
		var links = $('.nav-link');
		var current_target = $(this).data('target');
		$(links).each(function( index , obj) {
            var target = $(obj).data('target');
			
			if(current_target === target){
				$(obj).addClass('active');
			}else{
				$(obj).removeClass('active');
			}
        });
	});
});