// JavaScript Document
$(document).ready(function () {
  var loc = window.location.pathname;
  $(".back-icon").click(function () {
    window.history.back();
    console.log("Clicked");
  });
  $("#logout").click(function () {
    window.location.href =
      loc.substring(0, loc.lastIndexOf("/")) + "/login.html";
    localStorage.setItem("isuserLogged", false);
  });

  //Shereen
  var favouriteProducts = JSON.parse(localStorage.getItem("favourites"));
  if (favouriteProducts != null) {
    var storedFavouriteProducts = [];
    storedFavouriteProducts = favouriteProducts;
    storedFavouriteProducts.push("product2");
    localStorage.setItem("favourites", JSON.stringify(storedFavouriteProducts));
  } else {
    var favouriteProducts = [];
    favouriteProducts.push("product2");
    localStorage.setItem("favourites", JSON.stringify(favouriteProducts));
  }
});
