$('.nav-heading').click(function(){
	if($(this).attr("data-choose")==0){
		$(this).addClass('nav-heading-active');
		$('.list-nav').show();
		$(this).attr("data-choose",1);
	}
	else{
		$(this).removeClass('nav-heading-active');
		$('.list-nav').hide();
		$(this).attr("data-choose",0);
	}
});
