/* lo que tenia inicialmente que encontre por internet pero me funcionaba con el link de otra página.....

window.onscroll = function(){

	if(document.body.scrollTop > 90){
		document.getElementById('menus').style.background = "white";
		
	}

	if(document.body.scrollTop < 90){
		document.getElementById('menus').style.background = "transparent";				
	}
}*/

var menus = document.getElementById('menus');

window.onscroll = function(){
	"use strict";
	if (document.body.scrollTop > 90){
		menus.classList.add('menu3');
		menus.classList.remove('menu2');
	} else{
		menus.classList.add('menu2');
		menus.classList.remove('menu3');
	}
};