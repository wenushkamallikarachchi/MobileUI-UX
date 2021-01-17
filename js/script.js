// JavaScript Document
$(document).ready(function () {
  var isUserLogged = localStorage.getItem("isuserLogged");

  if(isUserLogged === "false" || isUserLogged === null) {
    var bannerElement = document.getElementById("slide1");
    var startShoppingButtonElement = document.getElementById("start-shopping-btn");
    if (bannerElement != null && startShoppingButtonElement != null) {
      bannerElement.remove();
      startShoppingButtonElement.remove();
      document.getElementById("slide2").style.display = "block";
    }
  }
  displayProducts();

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
  var x= document.getElementsByClassName("slide");
  var startShoppingButtonElement = document.getElementById("start-shopping-btn");

  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  if( x[slideIndex - 1].id == "slide1"){
    if(startShoppingButtonElement != null) {
      startShoppingButtonElement.style.display = "block";
    }
  }
  else{
    if(startShoppingButtonElement != null) {
    startShoppingButtonElement.style.display = "none";
    }
  }
   x[slideIndex - 1].style.display = "block";
}

function displayProducts() {
  var products = JSON.parse(data);
  console.log(products);

  var output = '';
  if (products != null) {
    for (var i = 0; i < products.length; i++) {
          output += '<li class="item"><section class="product">';
          output += '<div class="product-image"> <img src="' + products[i].image + '"> </div>';
          output += '<div class="product-name"><p>' + products[i].name + '</p></div>';
          output += '<div class="product-price"><p>' + products[i].price + '</p></div>';
          output += '<div class="product-quntity"><button class="decrease-button" data-role="none"> <span class="material-icons decrease-icon"> remove_circle_outline </span></button><input type="text" class="count" data-role="none" value="1"/><button class="increase-button" data-role="none"> <span class="material-icons decrease-icon"> control_point </span></button><button class="add-to-cart-button" data-role="none"><img src="images/Icon material-add-shopping-cart.png"/></button></div></section></li>';
    }
  }
  document.getElementById("autoWidth").innerHTML = output;
}




