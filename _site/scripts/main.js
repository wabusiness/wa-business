/*Stop sticky element based on the position of a "stopper" element*/
function stopSticky(element, stopper) {
	var docDistance = $(document).scrollTop() + window.innerHeight;
	var elementDistance = element.offset().top + element.height();
  var stopperDistance = stopper.offset().top;
  if ( elementDistance >= stopperDistance) {
  	//Set to absolute position if footer reaches element.
    element.css('position', 'absolute');
  }

  if (docDistance < stopperDistance) {
  	//return to fixed position
    element.css('position', 'fixed');
  }
}

/*Check if the point is passed the viewport.*/
function passedPoint(element, offset) {
	var elementTop = element.offset().top;
  if ($(window).scrollTop() > (elementTop + offset)) {
    return true;
  }else{
		return false;
	}
}


$(document).scroll(function() {
  stopSticky($('.add_business'), $('.footer'));
	if(passedPoint($('.goals-wrapper'), -200)){
		$('.add_business').removeClass('add_business-hidden');
	}else{
		$('.add_business').addClass('add_business-hidden');
	}
});





//Change banner image on index page.
function myFunction(x) {
  if (x.matches) { // If media query matches
    $(".banner-wrapper .image").attr("src","images/svg/index/banner_image.svg");
  } else {
    $(".banner-wrapper .image").attr("src","images/svg/index/desktop_banner_image.svg");
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

















/*
function myFunction(x) {
	alert("test");
	if (x.matches) { // If media query matches
		document.getElementsByClassName("image")[0].src="images/svg/banner_image.svg";
	} else {
	 document.getElementsByClassName("image")[0].src="images/svg/desktop_banner_image.svg";
	}
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
x.addListener(alert("test"))
*/

/*
var x = window.matchMedia("(min-width: 1000px) and (max-width:1100px)");
x.addEventListener("change", console.log("test"));
*/

/*
const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

function test(h, w){
	if(h > w){
		alert("test");
	}
}
*/
