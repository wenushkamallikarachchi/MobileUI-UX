// JavaScript Document
$(document).ready(function () {
  $('.back-icon').click(function () {
    window.history.back();
    console.log("Clicked");
  });
  $('.signin-btn').click(function (e) {
    e.preventDefault();
    validateLoginForm();
  });
});

function validateLoginForm() {
  var email = $('#email').val();
  var password = $('#password').val();
  console.log(email);
  console.log(password);
  var isValid = false;

  $("span.error").remove();

  // if (email === "") {
  //   $('#email').after('<span style="color: red" class="error">Please enter the email!</span>');
  // }
  // if (password === "") {
  //   $('#password').after('<span style="color: red" class="error">Please enter the password!</span>');
  // }

  if (email === "davidspade@gmail.com" && password === "david123") {
    localStorage.setItem("isuserLogged", true);
    var loc = window.location.pathname;
    window.location = loc.substring(0, loc.lastIndexOf('/')) + '/account.html';
  }
  else {
    if (email === "") {
      $('#email').after('<span style="color: red" class="error">Please enter the email!</span>');
    }
    if (password === "") {
      $('#password').after('<span style="color: red" class="error">Please enter the password!</span>');
    }
    else{
      $('#password').after('<span style="color: red" class="error">The email and password you entered did not match our records, Please try again.</span>');
    }
    // $('#password').after('<span style="color: red" class="error">The email and password you entered did not match our records, Please try again.</span>');
    localStorage.setItem("isuserLogged", false);
  }
}
