/* lo que tenia inicialmente que encontre por internet pero me funcionaba con el link de otra página.....

window.onscroll = function(){

	if(document.body.scrollTop > 90){
		document.getElementById('menus').style.background = "white";
		
	}

	if(document.body.scrollTop < 90){
		document.getElementById('menus').style.background = "transparent";				
	}
}*/



window.onscroll = function(){
	
	if (document.body.scrollTop >= 130){
		document.getElementById('menus').style.display = 'none';
		document.getElementById('menus2').style.display = 'block';
	} else{
		document.getElementById('menus2').style.display = 'none';
		document.getElementById('menus').style.display = 'block';
	}
}


$(window).load(function(){
	$('#sliders').nivoSlider({
		effect: 'random',
		slices: 15,
		boxCols: 8,
		boxRows: 3,
		animSpeed: 600,
		pauseTime: 1500,
		startSlide: 0,
		directionNav: true,
		controlNav: true,
		controlNavThumbs: false,
		pauseOnHover: true,
		manualAdvance: false,
		prevText: '',
		nextText: '',
		randomStart: false,
		beforeChange: function(){},
		afterChange: function(){},
		slideshowEnd: function(){},
		lastSlide: function(){},
		afterLoad: function(){}
	});		
});

