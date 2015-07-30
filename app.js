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



//creating an array of prices and sorting them in assending order
$('.low').on('click', function(event){
  event.preventDefault();
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

  // $('.image-container').html = "";
  for (var i = 0; i < pricesArray.length; i++) {
    for (var j = 0; j < $('article').length; j++) {
      var price = parseInt(($($('article')[j]).attr('data-price')));
      if (pricesArray[i] === price) {
        $('.image-container').append($('article')[j]);
      }
    }
  };

});


//creating an array of prices and sorting them in desending order
$('.high').on('click', function(event){
  event.preventDefault();
  var pricesArray = []
  for (var i = 0; i < $('article').length; i++) {
    var price = ($($('article')[i]).attr('data-price'));
    console.log(price);
    pricesArray.push(Number(price));
  }
    pricesArray.sort(function(a,b){
      return b - a;
    });
    console.log(pricesArray);

  // $('.image-container').html = "";
  for (var i = 0; i < pricesArray.length; i++) {
    for (var j = 0; j < $('article').length; j++) {
      var price = parseInt(($($('article')[j]).attr('data-price')));
      if (pricesArray[i] === price) {
        $('.image-container').append($('article')[j]);
      }
    }
  };

});



//creating an array of prices and sorting them
$('input').on('change', function(event){
  event.preventDefault();
  var checkedArray = [];
  for (var i = 0; i < $('input').length; i++) {
    var checked= $($('input')[i]).is(":checked")
    // console.log(checked);
    if (checked === true){
      checkedArray.push(parseInt($('input')[i].value));
    }
  }
  // console.log(checkedArray);
// if(checkedArray.length) {

var cabinArray = [];
  for (var i = 0; i < checkedArray.length; i++) {
    for (var j = 0; j < $('article').length; j++) {
      var cabin = $($('article')[j]);
      var price = parseInt(cabin.attr("data-price"));
      // console.log(cabin);
      // console.log(price);
      if (checkedArray[i] === 50000) {
        if (price >= 0 && price <= 50000) {
          cabinArray.push(cabin);
        }

      } else if (checkedArray[i] === 100000) {
        if (price > 50000 && price <= 100000) {
          cabinArray.push(cabin);
        }
      } else if(checkedArray[i] === 200000) {
        if (price > 100000 && price <= 200000) {
          cabinArray.push(cabin);
        }
      } else if(checkedArray[i] === 300000) {
        if (price > 200000 && price <= 300000) {
          cabinArray.push(cabin);
        }
      } else if(checkedArray[i] === 500000) {
        if (price > 300000 && price <= 500000) {
          cabinArray.push(cabin);
        }
      } else if(checkedArray[i] === 1000000) {
        if (price > 500000 && price <= 1000000) {
          cabinArray.push(cabin);
        }
      }
    };
  }; console.log(cabinArray);
    $('.image-container').children().hide();
    for (var k = 0; k < cabinArray.length; k++) {
          console.log(cabinArray[k]);
          $('.image-container').append($(cabinArray[k]).show());

        }

    if (checkedArray.length === 0) {
      $('.image-container').children().show();
    };

// }
});

  // var pricesArray = []
  // for (var i = 0; i < $('article').length; i++) {
  //   var price = parseInt(($($('article')[i]).attr('data-price')));
  //   console.log(price);
  //     if (checkedArray[j] >= priceArray[i])
  //     for (var j = 0; j < checkedArray.length; j++) {
  //       {
  //         show articles in that range

  //       }
  //   };


  //   if (price >= 0 && price <= 50000)

  //   pricesArray.push(Number(price));
  // }
  //   pricesArray.sort(function(a,b){
  //     return b - a;
  //   });
  //   console.log(pricesArray);



