$(document).ready(function(){

	// Initialisierung
	// $('#container div:not(#home)').hide();

	// Navigation
	
	$('nav a').click(function(e){
		var target = $(this).attr('href');

		// $('#container div').show();
		// $('#container div:not(' + target + ')').hide();
		
		$('#container div').addClass('hide-page');
		$('#container div' + target).removeClass('hide-page');
		
		e.preventDefault();
		
	})
	
	
})
