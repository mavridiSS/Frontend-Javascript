$("#toggleHighlight").click(function () {
	var highlighted = $("p.highlight");

	if(highlighted.length == 0) {
		$("p.first").addClass('highlight');
	} else {
		var next = $("p.highlight").next(); 
		$("p.highlight").removeClass('highlight');
		if(next.length > 0) {
			next.addClass('highlight');
		} else {
			$("p.first").addClass('highlight');
		}	
	}
})
