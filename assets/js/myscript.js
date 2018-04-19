$(document).ready(function(){
  var scrlls1img= 0;

  $(window).scroll(function(){
    var num = $(window).scrollTop();
      if(num>scrlls1img){
        $(".headerNav").addClass("fixed");
      }else{
        $(".headerNav").removeClass("fixed");
      }
    });
    $(window).scroll(function(){
      var num = $(window).scrollTop();
          $(".logoC").css({
            "opacity": 1 - Math.min(num/500, 0.55) ,
            "transform": "scale(" + (1 - Math.min(num/1000, 0.2)) + ")",
            });
      });

    $(window).scroll(function(){
      var num = $(window).scrollTop();
          $(".parallax-hero").css({
            "transform": "translateY(" + Math.max(- num, -200) + "px)",
            });
      });


    $(".logobox").click(function(){
      $("html, body").animate({
        scrollTop: $("#page").offset().top
      },1100);
    })

    $(".di1").click(function(){
      $(this).css({
        "width": '3000px',
        "cursor": "inherit",
      });
      $(".di2,.di3").css({
        "left": '3000px',
        "width": '0px',
      });
    });

    $(".di2").click(function(){
      $(this).css({
        "width": '3000px',
        "left": '0px',
        "cursor": "inherit",
      });
      $(".di1").css({
        "left": '-33.33%',
      });
      $(".di3").css({
        "left": '3000px',
        "width": '0px',
      });
    })

    $(".di3").click(function(){
      $(this).css({
        "width": '3000px',
        "left": '0px',
        "cursor": "inherit",
      });
      $(".di1").css({
        "left": '-33.33%',
      });
      $(".di2").css({
        "left": '-33.33%',
      });
    })


    var getRandomColor = function(){
      var color2 = ["#b3a3ca","#f080ae","#F48583","#D5E59F","#5ccae8","#f7f061","#d8d1c7","#e184b9","#f29222"];
      var randomColor = Math.floor(Math.random() * 9);
      return color2[randomColor];
    };

    $(".img-hover").css({
      "background": getRandomColor,
    });

    $(".randomcolor").css({
      "background": getRandomColor,
    });


});
