// $(document).ready(function () {
//   commentsCard();
// });

// var reviewsList = JSON.parse(customer);
// var ratingValue;
// var addedArray = reviewsList;

// $(".popup-btn").click(function () {
//   var message = $("#popup-textarea").val();
//   var test = {
//     id: 4,
//     name: "David Spade",
//     image: "../images/avatar.png",
//     rating: ratingValue,
//     comment: message,
//     date: getCurrentDate()
//   };
//   console.log(test);
//   reviewsList.push(test);
//   addedArray = reviewsList.reverse();
//   commentsCard();
 
//   document.getElementById("popupComment").style.display = "none";
 
  
// });


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

// function commentsCard() {
//   var review = "";
//   if (addedArray != []) {
//     for (var i = 0; i < addedArray.length; i++) {
//       $(function () {
//         $(".stars").stars();
//       });

//       // review += '<li class="comment-details-iphone"><div class="product-detail-section-iphone">';
//       // review += '<div class="avatar-iphone"><img class="user-avatar-iphone" src="' + addedArray[i].image + '" alt = "profile-picture">';
//       // review += '<div class="name-iphone"><span class="user-name-iphone">' + addedArray[i].name + '</span>';
//       // review += '<div class="date-iphone"><span class="stars" data-rating="' + addedArray[i].rating + '" data-num-stars="5" ></span>Posted on ' + addedArray[i].date + ' </div><br><p class="user-comment-iphone">"' + addedArray[i].comment + '"</p> </div></div></div></li><br>';

//       review += '<li class="comment-details-iphone">';
//       review += '<fieldset class="ui-grid-a product-detail-section-iphone">';
//       review += '<div class="ui-block-a avatar-iphone">';
//       review +=
//         '<img class="user-avatar-iphone" src="../images/user-picture.jpg" alt = "profile-picture"> </div>';
//       review += '<div class="ui-block-b user-comment-display">';
//       review += '<p class="user-name-iphone">' + addedArray[i].name + "</p>";
//       review +=
//         '<span class="stars" data-rating="' +
//         addedArray[i].rating +
//         '" data-num-stars="5" ></span>';
//       review += '<div class="rating-iphone"></div>';
//       review +=
//         '<p class="user-comment-iphone">“' +
//         addedArray[i].comment +
//         "”  </p> </div> </fieldset> </li> <br>";
//     }
//   }
//   document.getElementById("review-card").innerHTML = review;
// }

// function getCurrentDate(){
//     today = new Date();
//     var dd = today.getDate();
//     var mm = today.getMonth()+1; 
//     var yyyy = today.getFullYear();
  
//     if(dd<10) dd='0'+dd;
//     if(mm<10) mm='0'+mm;  
  
//     return (dd+'/'+mm+'/'+yyyy);
//   }

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
    image: "../images/user-picture.jpg",
    rating: ratingValue,
    comment: message,
  };
  reviewsList.push(test);
  addedArray = reviewsList.reverse();
  commentsCard();
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
  if (addedArray != []) {
    for (var i = 0; i < addedArray.length; i++) {
      $(function () {
        $(".stars").stars();
      });
      review += '<li class="comment-details-iphone">';
      review += '<fieldset class="ui-grid-a product-detail-section-iphone">';
      review += '<div class="ui-block-a avatar-iphone">';
      review +=
        '<img class="user-avatar-iphone" src="../images/user-picture.jpg" alt = "profile-picture"> </div>';
      review += '<div class="ui-block-b user-comment-display">';
      review += '<p class="user-name-iphone">' + addedArray[i].name + "</p>";
      review +=
        '<span class="stars" data-rating="' +
        addedArray[i].rating +
        '" data-num-stars="5" ></span>';
      review += '<div class="rating-iphone"></div>';
      review +=
        '<p class="user-comment-iphone">“' +
        addedArray[i].comment +
        "”  </p> </div> </fieldset> </li> <br>";
    }
  }
  document.getElementById("review-card").innerHTML = review;
}