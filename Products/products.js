var qty = 1;
$(document).ready(function () {
  pagination();
  productListing();

  // $(".iconify.increase").click(function() {
  //     alert('I got a click');
  // });
});
var productList = JSON.parse(data);
// reset funtion for sorting
function resetSort() {
  $("#vegitable").css("text-align", "right");
  $("#meat").css("text-align", "right");
  $("#snack").css("text-align", "right");
  $("#beverage").css("text-align", "right");

  localStorage.setItem("type", "");
  productListing();
}

function displaySorted() {
  var product = "";
  console.log(productList);
  var sortType = localStorage.getItem("type");
  console.log(sortType);

  if (sortType != null) {
    for (var i = 0; i < productList.length; i++) {
      if (productList[i].type == sortType) {
        console.log("Iphone portrait");
        product += '<div class="ui-block-a item">';
        product += '<a href="#" class="ui-btn ui-shadow">';
        product +=
          '<img class="product-img1" src="' +
          productList[i].url +
          '" alt="product-img">';
        product += '<div class="btn-details">';
        product += '<p class="product-name"> ' + productList[i].name + "</p>";
        product +=
          '<p class="product-detail">' + productList[i].price + "</p></div>";
        product += '<div class="add-cart">';
        product +=
          '<span class="iconify decrease" data-icon="ant-design:minus-circle-outlined" data-inline="false"></span>';
        product += '<span class="item-qty">' + qty + "</span>";
        product +=
          '<span class="iconify increase" data-icon="carbon:add-alt" data-inline="false"></span>';
        product +=
          '<button class="ui-btn cart-btn"><span class="iconify cart" data-icon="ic:outline-add-shopping-cart" data-inline="false"></span></button></div></a>';
        product += "</div>";
      }
    }
  }
  document.getElementById("ui-grid-a").innerHTML = product;
}

function productListing() {
  var product = "";
  if (productList != []) {
    for (var i = 0; i < productList.length; i++) {
      console.log("Iphone portrait");
      product += '<div class="ui-block-a item">';
      product += '<a href="#" class="ui-btn ui-shadow">';
      product +=
        '<img class="product-img1" src="' +
        productList[i].url +
        '" alt="product-img">';
      product += '<div class="btn-details">';
      product += '<p class="product-name"> ' + productList[i].name + "</p>";
      product +=
        '<p class="product-detail">' + productList[i].price + "</p></div>";
      product += '<div class="add-cart">';
      product +=
        '<span class="iconify decrease" data-icon="ant-design:minus-circle-outlined" data-inline="false"></span>';
      product += '<span class="item-qty">' + qty + "</span>";
      product +=
        '<span class="iconify increase" data-icon="carbon:add-alt" data-inline="false"></span>';
      product +=
        '<button class="ui-btn cart-btn"><span class="iconify cart" data-icon="ic:outline-add-shopping-cart" data-inline="false"></span></button></div></a>';
      product += "</div>";
    }
  }
  document.getElementById("ui-grid-a").innerHTML = product;
}

function pagination() {
  $(".ui-pagination .page_num a").on("click", function () {
    if (!$(this).parent().hasClass("active")) {
      $(".ui-pagination .page_num.active").removeClass("active");
      $(this).parent().addClass("active");
    }
  });
  $(".next").on("click", function () {
    $(".ui-pagination").find(".page_num.active").next().addClass("active");
    $(".ui-pagination").find(".page_num.active").prev().removeClass("active");
  });
  $(".prev").on("click", function () {
    $(".ui-pagination").find(".page_num.active").prev().addClass("active");
    $(".ui-pagination").find(".page_num.active").next().removeClass("active");
  });
}
