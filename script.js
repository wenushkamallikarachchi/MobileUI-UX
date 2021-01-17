$(document).ready(function () {
  commentsCard();
});

var reviewsList = JSON.parse(customer);
var ratingValue;
var addedArray = reviewsList;

$(".popup-btn").click(function () {
  var message = $("#popup-textarea").val();
  var test = {
    id: 4,
    name: "David Spade",
    image: "../images/avatar.png",
    rating: ratingValue,
    comment: message,
    date: getCurrentDate()
  };
  reviewsList.push(test);
  addedArray = reviewsList.reverse();
  commentsCard();
 
  document.getElementById("popupComment").style.display = "none";
 
  
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
  console.log("Printed");
  if (addedArray.length != []) {
    for (var i = 0; i < addedArray.length; i++) {
      $(function () {
        $(".stars").stars();
      });

      review += '<li class="comment-details-iphone"><div class="product-detail-section-iphone">';
      review += '<div class="avatar-iphone"><img class="user-avatar-iphone" src="' + addedArray[i].image + '" alt = "profile-picture">';
      review += '<div class="name-iphone"><span class="user-name-iphone">' + addedArray[i].name + '</span>';
      review += '<div class="date-iphone"><span class="stars" id="" data-rating="' + addedArray[i].rating + '" data-num-stars="5" ></span>Posted on ' + addedArray[i].date + ' </div><br><p class="user-comment-iphone">"' + addedArray[i].comment + '"</p> </div></div></div></li><br>';
    }
  }
  document.getElementById("review-card").innerHTML = review;
}

function getCurrentDate(){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
  
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;  
  
    return (dd+'/'+mm+'/'+yyyy);
  }


