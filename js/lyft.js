window.onscroll = function(){

	if(document.body.scrollTop > 90){
		document.getElementById('menus').style.background = "white";
		
	}

	if(document.body.scrollTop < 90){
		document.getElementById('menus').style.background = "transparent";
				
	}
}
}