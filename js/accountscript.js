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
});
