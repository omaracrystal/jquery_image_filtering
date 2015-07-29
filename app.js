$(document).ready(function() {
	console.log("The document is ready!");
})

$(".image-container").append("<article class= 'home' data-price='80000'> <img src= 'img/lawn.jpg'><h4>$80,000</h4></article>")

$(".image-container").append("<article class= 'home' data-price='10000'> <img src= 'img/old.jpg'><h4>$10,000</h4></article>")

$(".image-container").append("<article class= 'home' data-price='800000'> <img src= 'img/stones.jpg'><h4>$800,000</h4></article>")

$(".dark").on("click", function() {
  $("body").css("background-image", "url('img/dark_wood.png')");
})

$(".light").on("click", function() {
  $("body").css("background-image", "url('img/tileable_wood_texture.png')");
})

$(".textures").append("<span class= 'forest'></span>")

$('.textures').css('width', '133px');

$('.forest').css('background', "url('img/forest.jpg')");

$('.forest').on('click', function() {
  $('body').css("background-image", "url('img/forest.jpg')").css('background-size', 'cover');
})



//creating an array of prices and sorting them
$('.low').on('click', function(){
  var pricesArray = []
  for (var i = 0; i < $('article').length; i++) {
    var price = ($($('article')[i]).attr('data-price'));
    console.log(price);
    pricesArray.push(Number(price));
  }
    pricesArray.sort(function(a,b){
      return a - b;
    });
    console.log(pricesArray);

  $('.image-container').html = "";
  for (var i = 0; i < pricesArray.length; i++) {
    for (var j = 0; j < $('article').length; j++) {
      var price = parseInt(($($('article')[j]).attr('data-price')));
      if (pricesArray[i] === price) {
        $('.image-container').append($('article')[j]);
      }
    }
  };

});
