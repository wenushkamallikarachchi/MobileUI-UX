$(document).ready(function () {
    var loc = window.location.pathname;

    $('.back-icon').click(function () {
      window.history.back();
      console.log("Clicked");
    });

    $('#home-icon').click(function (){
        window.location.href = loc.substring(0, loc.lastIndexOf('/')) + '/index.html';
    });

    $('#cart-icon').click(function (){
        window.location.href = loc.substring(0, loc.lastIndexOf('/')) + '/cart.html';
    });

    $('#promo-icon').click(function (){
        window.location.href = loc.substring(0, loc.lastIndexOf('/')) + '/promo.html';
    });

    $('#game-icon').click(function (){
        window.location.href = loc.substring(0, loc.lastIndexOf('/')) + '/Game/Game.html';
    });

    $('#user-icon').click(function (){
        var isUserLogged = localStorage.getItem("isuserLogged");
        if(isUserLogged == "true") {
            window.location.href = loc.substring(0, loc.lastIndexOf('/')) + '/account.html';
        }
        else {
            window.location.href = loc.substring(0, loc.lastIndexOf('/')) + '/login.html';
        }
    });

  });