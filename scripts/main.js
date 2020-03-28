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

function fixedElementIsBelow(fixedElement, otherElement) {
	var docDistance = $(document).scrollTop() + window.innerHeight;
	var eDistance = fixedElement.offset().top + fixedElement.height();
  var feDistance = otherElement.offset().top;
  if ( eDistance >= feDistance) {
  	//Set to absolute position if footer reaches element.
    return true;
  }

  if (docDistance < feDistance) {
  	//return to fixed position
    return false;
  }
}

$(document).scroll(function() {
  stopSticky($('.add_business'), $('.footer'));
  if(fixedElementIsBelow($('.add_business'), $('#contact'))){
    $('.add_business').children('a').eq(0).attr("href", "https://forms.gle/LJTE8B1Z3rsMhe4k7");
  }else{
    $('.add_business').children('a').eq(0).attr("href", "#contact");
  }
});
