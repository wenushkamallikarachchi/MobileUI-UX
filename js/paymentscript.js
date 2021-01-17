// JavaScript Document

$(document).ready(function () {
  var total = localStorage.getItem("cartTotal");
  if(total == null) {
    total = "1101.00"
  }
  document.getElementById("card-button").innerHTML = '<button class="payment-btn" id="submit" data-role="none">Pay Rs.'+ total +'</button>';
});
// Create a Stripe client.
var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// Create an instance of Elements.
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
var style = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

// Create an instance of the card Element.
var card = elements.create('card', {
  style: style
});

// Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');
// Handle real-time validation errors from the card Element.
card.on('change', function (event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

$("#submit").click(function (event) {
  event.preventDefault();
  var name = $('#name').val();

  $("span.error").remove();

  if (name === "") {
    $('#name').after('<span style="color: red" class="error">Please enter the name on the card!</span>');
  }
  else{
    stripe.createToken(card).then(function (result) {
      if (result.error) {
        showErrorToast();
        // Inform the user if there was an error.
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        showSuccessToast();
        var loc = window.location.pathname;
        console.log(loc.substring(0, loc.lastIndexOf('/')));
        setTimeout(function () {
          window.location.href = loc.substring(0, loc.lastIndexOf('/')) + '/OrderSummary/OrderSummary.html';
        }, 3000);
      }
    });
  }
});

function showSuccessToast() {
  var x = document.getElementById("success-toast");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function showErrorToast() {
  var x = document.getElementById("error-toast");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
