$(document).ready(function(){
	$(".box").on("click",function(){
		/**
		 * When we click on an element that has a 
		 * box class, the elements will be fired
		 *  */
		var classNames = $(this).attr("class").split(" ");
		var boxClass = classNames[0];
		var className = classNames[1];
		console.log("in click");
		if ($(this).css("background-color") == "rgb(255,0,0)"){
			// if this object is already red, turn it black
			$("." + className).css("background-color","#000");
		} else {
			//Else turn all the elements with a class black
			//and then change the color of all elements with
			// the same class as the clicked element to red
			$("." + boxClass).css("background-color","#000");
			$("." + className).css("background-color","red");
		}
	});
})