var reviewsList = JSON.parse(customer);
var ratingValue;
var productDisplayed = localStorage.getItem("product-page-item");

$(document).ready(function () {
  commentsCard();
});


$(".popup-btn").click(function () {
  var message = $("#popup-textarea").val();
  var test = {
    id: 11,
    name: "David Spade",
    image: "../images/avatar.png",
    comment: message,
    rating: ratingValue,
    date: getCurrentDateIpad(),
    productId: productDisplayed
  };
  reviewsList.push(test);
  addedArray = reviewsList.reverse();
  commentsCard();
  displayProduct(productDisplayed)
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

  ratingValue = parseInt($("#stars li.selected").last().data("value"), 10);
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

function commentsCard() {
  var review = "";
  localStorage.setItem("comments-iphone",JSON.stringify(reviewsList));
  var commentsIphone = JSON.parse(localStorage.getItem("comments-iphone"));
  if (reviewsList != []) {
    for (var i = 0; i < commentsIphone.length; i++) {
      if(commentsIphone[i].productId === productDisplayed) {
        $(function () {
          $(".stars").stars();
        });
        review += '<li class="comment-details-iphone">';
        review += '<fieldset class="ui-grid-a product-detail-section-iphone">';
        review += '<div class="ui-block-a avatar-iphone">';
        review += '<img class="user-avatar-iphone" src="../images/user-picture.jpg" alt = "profile-picture"> </div>';
        review += '<div class="ui-block-b user-comment-display">';
        review += '<p class="user-name-iphone">' + commentsIphone[i].name + "</p>";
        review += '<div class="date-iphone"><span class="stars" data-rating="' + commentsIphone[i].rating + '" data-num-stars="5" ></span>Posted on ' + commentsIphone[i].date + ' </div>';
        review += '<p class="user-comment-iphone">“' + commentsIphone[i].comment +
  "”  </p> </div> </fieldset> </li> <br>";
      }
    }
  }
  document.getElementById("review-card").innerHTML = review;
}

function getCurrentDateIpad(){
  todayIpad = new Date();
  var dd = todayIpad.getDate();
  var mm = todayIpad.getMonth()+1; 
  var yyyy = todayIpad.getFullYear();

  if(dd<10) dd='0'+dd;
  if(mm<10) mm='0'+mm;  

  return (dd+'/'+mm+'/'+yyyy);
}
