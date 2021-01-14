
$(document).ready(function() {
  
})


$.fn.stars = function() {
  return $(this).each(function() {
      const rating = $(this).data("rating");
      const numStars = $(this).data("numStars");
      const fullStar = '<i class="fas fa-star"></i>'.repeat(Math.floor(rating));
      const halfStar = (rating%1!== 0) ? '<i class="fas fa-star-half-alt"></i>': '';
      const noStar = '<i class="far fa-star"></i>'.repeat(Math.floor(numStars-rating));
      $(this).html(`${fullStar}${halfStar}${noStar}`);
  });
}

window.onload = function commentsCard() {
  var reviewsList = JSON.parse(customer);
  var review = '';

  if(reviewsList.length != []) {
    // var date = new Date('yyyy/mm/dd');
    // console.log(date);
    for (var i = 0 ; i < reviewsList.length; i++) {
      $(function(){
        $('.stars').stars();
    });
       review += '<li class="comment-details-iphone">';
       review += '<fieldset class="ui-grid-a product-detail-section-iphone">'
       review += '<div class="ui-block-a avatar-iphone">'
       review += '<img class="user-avatar-iphone" src="../images/user-picture.jpg" alt = "profile-picture"> </div>'
       review += '<div class="ui-block-b user-comment-display">'
       review += '<p class="user-name-iphone">' +  reviewsList[i].name + '</p>'
       review += '<span class="stars" data-rating="' + reviewsList[i].rating + '" data-num-stars="5" ></span>'
       review += '<div class="rating-iphone"></div>'
       review += '<p class="user-comment-iphone"> + “' + reviewsList[i].comment +'”  </p> </div> </fieldset> </li> <br>'
    } 
}
  document.getElementById("review-card").innerHTML = review;
}