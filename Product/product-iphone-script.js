
$(document).ready(function () {
  // var productList = JSON.parse(data);
  // localStorage.setItem("productList",productList)
  var favouriteList =[];
  // localStorage.setItem("product", "product8");

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


function displayProduct(productId) {
  var products = JSON.parse(data);
  console.log(products);

  var image_output = "";
  var info_output = "";
  var description_ouput = "";

  for (var i = 0; i < products.length; i++) {
    if (products[i].id == productId) {
      image_output += '<img src="' + products[i].image + '" alt="beetroot">';

      info_output += '<div class="ui-grid-a productname-grid-iphone">';
      info_output += '<div class="ui-block-a product-name-block"><p class="product-name-iphone">' + products[i].name + '</p></div>';
      info_output += '<div class="ui-block-b"><div class="flexbox"><div class="fav-btn"><span class="favme-iphone dashicons dashicons-heart"></span></div></div></div></div>';
      info_output += '<div class="star-rating-avg"><span class="stars" id="star-descrip" data-rating=4 data-num-stars="5"></span> <span class="product-rating">0.4</span></div>';
      info_output += '<p class="product-price">' + products[i].price + '</p>';

      description_ouput+='<p class="description-heading">Description</p>'
      description_ouput+='<p class="description-content">' + products[i].description+ '</p>'
    }
  }

  document.getElementById("product-image-iphone").innerHTML = image_output;
  document.getElementById("product-info-iphone").innerHTML = info_output;
  document.getElementById("product-description-iphone").innerHTML =  description_ouput;
}

// function displayComments(productId,products){
//     var comments = [];
//     var commentOutput = '';

//     for (var j = 0; j < products.length; j++) {
//       if(products[j].id == productId){
//         comments = products[j].feedback;

//         for(var k = 0;k < comments.length; k++){
//           $(function () {
//             $(".stars").stars();
//           });

//           commentOutput += '<li class="comment-details-iphone"><div class="product-detail-section-iphone">';
//           commentOutput += '<div class="avatar-iphone"><img class="user-avatar-iphone" src="' + comments[j].image + '" alt = "profile-picture">';
//           commentOutput += '<div class="name-iphone"><span class="user-name-iphone">' + comments[j].username + '</span>';
//           commentOutput += '<div class="date-iphone"><span class="stars" id="star-comment" data-rating="' + comments[j].rating + '" data-num-stars="5" ></span>Posted on ' + comments[j].date + '</div><br><p class="user-comment-iphone">"Very good!"</p> </div></div></div></li><br>';
//         }
//       }
//     }

//     document.getElementById("review-card").innerHTML = commentOutput;
// }

