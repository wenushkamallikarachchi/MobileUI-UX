$(document).ready(function () {
    localStorage.setItem("product", "product1");
  
    var selectedProductIdIpad = localStorage.getItem("product");
    displayProductIpad(selectedProductIdIpad);
    commentsCardIpad();


$('.favme').click(function() {
  $(this).toggleClass('active');
  localStorage.setItem('favourites',selectedProductIdIpad);
});

/* when a user clicks, toggle the 'is-animating' class */
$(".favme").on('click touchstart', function(){
  $(this).toggleClass('is_animating');
});

/*when the animation is over, remove the class*/
$(".favme").on('animationend', function(){
  $(this).toggleClass('is_animating');
});
  });
  
  function displayProductIpad(productId) {
    var productsIpad = JSON.parse(data);
  
    var output = "";
  
    for (var i = 0; i < productsIpad.length; i++) {
      if (productsIpad[i].id == productId) {
        output+= '<div class="ui-block-a ipad-column1"><img src="' + productsIpad[i].image + '" alt="beetroot"></div>';
        output+= '<div class="ui-block-b ipad-column2"><div class="product-details"><div class="ui-grid-a">';
        output+= '<div class="ui-block-a product-name-block"><p class="product-name">' + productsIpad[i].name + '</p></div>';
        output+= '<div class="ui-block-b"><div class="flexbox"><div class="fav-btn"><span href="" class="favme dashicons dashicons-heart"></span></div></div></div></div>';
        output+= '<div class="star-rating-avg"><span class="stars" data-rating=4 data-num-stars="5"></span> <span class="product-rating">0.4</span></div>';
        output+= '<p class="product-price">' + productsIpad[i].price + '</p><br>';
        output+= '<p class="description-heading">Description</p>';
        output+= '<p class="product-description">' + productsIpad[i].description+ '</p></div></div>';
      }
    }
  
    document.getElementById("product-detail-ipad").innerHTML = output;
  }
  
var reviewsListIpad = JSON.parse(customer);
var ratingValueIpad;
var addedArrayIpad = reviewsListIpad;

$(".comment-btn-ipad").click(function () {
  var messageIpad = $("#ipad-textarea").val();
  var testIpad = {
    id: 4,
    name: "David Spade",
    image: "../images/avatar.png",
    rating: ratingValueIpad,
    comment: messageIpad,
    date: getCurrentDateIpad()
  };
  reviewsListIpad.push(testIpad);
  addedArrayIpad = reviewsListIpad.reverse();
  commentsCardIpad();

  $("#ipad-textarea").val("");
  var stars = $("#stars li").parent().children("li.star");

  if(stars != null){
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
    }
  }
});

$("#stars li").on("click", function () {
  var onStar = parseInt($(this).data("value"), 10);
  var stars = $(this).parent().children("li.star");

  for (i = 0; i < stars.length; i++) {
    $(stars[i]).removeClass("selected");
  }

  for (i = 0; i < onStar; i++) {
    $(stars[i]).addClass("selected");
  }

  ratingValueIpad = parseInt($("#stars li.selected").last().data("value"), 10);
});
$.fn.stars = function () {
  return $(this).each(function () {
    const rating = $(this).data("rating");
    const numStars = $(this).data("numStars");
    const fullStar = '<i class="fas fa-star"></i>'.repeat(Math.floor(rating));
    const halfStar =
      rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : "";
    const noStar = '<i class="far fa-star"></i>'.repeat(
      Math.floor(numStars - rating)
    );
    $(this).html(`${fullStar}${halfStar}${noStar}`);
  });
};

function commentsCardIpad() {
  var reviewIpad = "";

  if (addedArrayIpad.length != []) {
    for (var i = 0; i < addedArrayIpad.length; i++) {
      $(function () {
        $(".stars").stars();
      });

      // reviewIpad += '<li class="comment-details-ipad"><div class="product-detail-section-ipad">';
      // reviewIpad += '<div class="avatar-ipad"><img class="user-avatar-ipad" src="' + addedArrayIpad[i].image + '" alt = "profile-picture">';
      // reviewIpad += '<div class="name-ipad"><span class="user-name-ipad">' + addedArrayIpad[i].name + '</span>';
      reviewIpad += '<div class="date-ipad"><span class="stars" data-rating="' + addedArrayIpad[i].rating + '" data-num-stars="5" ></span>Posted on ' + addedArrayIpad[i].date + ' </div><br><p class="user-comment-ipad">"' + addedArrayIpad[i].comment + '"</p> </div></div></div></li><br>';
    }
  }
  document.getElementById("review-card-ipad").innerHTML = reviewIpad;
}

function getCurrentDateIpad(){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
  
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;  
  
    return (dd+'/'+mm+'/'+yyyy);
  }



