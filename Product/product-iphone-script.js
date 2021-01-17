
$(document).ready(function () {
  // var productList = JSON.parse(data);
  // localStorage.setItem("productList",productList)
  var favouriteList =[];
  localStorage.setItem("product", "product8");

  var selectedProductId = localStorage.getItem("product");
  displayProduct(selectedProductId);


$('.favme-iphone').click(function() {
  $(this).toggleClass('active');
  var favouriteProducts = JSON.parse(localStorage.getItem("favourites"));

  if(favouriteProducts != null){
    var storedFavouriteProducts = [];
    storedFavouriteProducts = favouriteProducts;
      storedFavouriteProducts.push("product2");
      localStorage.setItem("favourites", JSON.stringify(storedFavouriteProducts));
  }
  else{
    var favouriteProducts = [];
      favouriteProducts.push("product2");
      localStorage.setItem("favourites", JSON.stringify(favouriteProducts));
  }
  // if (favouriteProducts != null) {​​​​​
  //   var storedFavouriteProducts = [];
  //   storedFavouriteProducts = favouriteProducts;
  //   storedFavouriteProducts.push("product2");
  //   localStorage.setItem("favourites", JSON.stringify(storedFavouriteProducts));
  // }​​​​​ 
  // else {​​​​​
  //   var favouriteProducts = [];
  //   favouriteProducts.push("product2");
  //   localStorage.setItem("favourites", JSON.stringify(favouriteProducts));
  // }​​​​​
});

/* when a user clicks, toggle the 'is-animating' class */
$(".favme-iphone").on('click touchstart', function(){
  $(this).toggleClass('is_animating');
});

/*when the animation is over, remove the class*/
$(".favme-iphone").on('animationend', function(){
  $(this).toggleClass('is_animating');
});


  //displayComments(selectedProductId);

  //var productList = JSON.parse(data);
//   var ratingValue;

// $(".popup-btn").click(function () {
//   var userComment = $("#popup-textarea").val();
//   var productFeedback = [];

//   for (l = 0;l < productList.length; l++){
//     if(productList[l].id == selectedProductId){
//       productFeedback = productList[l].feedback;

//       var feedbackObject = {
//         username: "David Spade",
//         image: "../images/avatar.png",
//         comment: userComment,
//         rating: ratingValue,
//         date: getCurrentDate()
//       }

//       productFeedback.push(feedbackObject);
//       localStorage.setItem('updatedProductList',productList);
//       var updatedProductList =localStorage.getItem('updatedProductList');
//       displayComments(selectedProductId,updatedProductList);
//     }
//   }


  // reviewsList.push(test);
  // addedArray = reviewsList.reverse();
  // commentsCard();
});

// $("#stars li").on("click", function () {
//   var onStar = parseInt($(this).data("value"), 10);
//   var stars = $(this).parent().children("li.star");

//   for (i = 0; i < stars.length; i++) {
//     $(stars[i]).removeClass("selected");
//   }

//   for (i = 0; i < onStar; i++) {
//     $(stars[i]).addClass("selected");
//   }

//   ratingValue = parseInt($("#stars li.selected").last().data("value"), 10);
// });
// $.fn.stars = function () {
//   return $(this).each(function () {
//     const rating = $(this).data("rating");
//     const numStars = $(this).data("numStars");
//     const fullStar = '<i class="fas fa-star"></i>'.repeat(Math.floor(rating));
//     const halfStar =
//       rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : "";
//     const noStar = '<i class="far fa-star"></i>'.repeat(
//       Math.floor(numStars - rating)
//     );
//     $(this).html(`${fullStar}${halfStar}${noStar}`);
//   });
// };

// });

// function getCurrentDate(){
//   today = new Date();
//   var dd = today.getDate();
//   var mm = today.getMonth()+1; 
//   var yyyy = today.getFullYear();

//   if(dd<10) dd='0'+dd;
//   if(mm<10) mm='0'+mm;  

//   return (dd+'/'+mm+'/'+yyyy);
// }

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

