var rightAnswer = Math.floor((Math.random() * 3));

$(function() {

  $(".block").click(function() {
    var numberGuessed = parseInt($(this).attr("id"));

    if (numberGuessed === rightAnswer) {
      $(this).addClass("right");
      alert("You win!");
    } else {
      $(this).addClass("wrong");
    }

  })

});



