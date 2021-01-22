
$(document).ready(function () {

  var selectedProductId = localStorage.getItem("product-page-item");
  displayProduct(selectedProductId);


$('.favme-iphone').click(function() {
  $(this).toggleClass('active');
  var favouriteProducts = JSON.parse(localStorage.getItem("favourites"));

  if(favouriteProducts != null){
    var storedFavouriteProducts = [];
    storedFavouriteProducts = favouriteProducts;
      storedFavouriteProducts.push(selectedProductId);
      localStorage.setItem("favourites", JSON.stringify(storedFavouriteProducts));
  }
  else{
    var favouriteProducts = [];
      favouriteProducts.push(selectedProductId);
      localStorage.setItem("favourites", JSON.stringify(favouriteProducts));
  }
});

/* when a user clicks, toggle the 'is-animating' class */
$(".favme-iphone").on('click touchstart', function(){
  $(this).toggleClass('is_animating');
});

/*when the animation is over, remove the class*/
$(".favme-iphone").on('animationend', function(){
  $(this).toggleClass('is_animating');
});

});

var reviewsList = JSON.parse(customer);

function displayProduct(productId) {
  var products = JSON.parse(data);

  var image_output = "";
  var info_output = "";
  var description_ouput = "";
  var rating = 0;
  var count = 0;
  var tempRate = 0;

  for (let i = 0; i < reviewsList.length; i++) {
    if (reviewsList[i].productId === productId) {
      count++;
      tempRate += reviewsList[i].rating;
    }
    rating = (tempRate / count).toFixed(1);
  }
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == productId) {
      image_output += '<img src="' + products[i].image + '" alt="beetroot">';

      info_output += '<div class="ui-grid-a productname-grid-iphone">';
      info_output += '<div class="ui-block-a product-name-block"><p class="product-name-iphone">' + products[i].name + '</p></div>';
      info_output += '<div class="ui-block-b"><div class="flexbox"><div class="fav-btn"><span class="favme-iphone dashicons dashicons-heart"></span></div></div></div></div>';
      info_output += '<div class="star-rating-avg"><span class="stars" id="star-descrip" data-rating='+ rating + ' data-num-stars="5"></span> <span class="product-rating">'+ rating + '</span></div>';
      info_output += '<p class="product-price">' + products[i].price + '</p>';

      description_ouput+='<p class="description-heading">Description</p>'
      description_ouput+='<p class="description-content">' + products[i].description+ '</p>'
    }
  }

  document.getElementById("product-image-iphone").innerHTML = image_output;
  document.getElementById("product-info-iphone").innerHTML = info_output;
  document.getElementById("product-description-iphone").innerHTML =  description_ouput;
}

