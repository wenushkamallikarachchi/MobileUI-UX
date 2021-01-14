// JavaScript Document
$(document).ready(function () {
  $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: false,
    onSliderLoad: function () {
      $('#autoWidth').removeClass('cS-hidden');
    }
  });

  $(".product-quntity .increase-button").click(function () {
      var text = $(this).parent().parent().parent().find('.count', '.product-quntity')
      text.val(parseInt(text.val()) + 1);
  });
	
	$(".product-quntity .decrease-button").click(function () {
      var text = $(this).parent().parent().parent().find('.count', '.product-quntity')
      if(parseInt(text.val()) > 1){
			  text.val(parseInt(text.val()) - 1);  
	  }
  });
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
