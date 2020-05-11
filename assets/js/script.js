
$(document).ready(function(){
  $('.food-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: null,
    nextArrow: null,
    draggable:true,
    loop:true,
    margin:20,
    rtl:true,
    nav:true,
    responsiveClass:true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(function(){
  $( ".new-offer-input" ).datepicker();
});

var rate1 = true;
var rate2 = true;
var rate3 = true;
var rate4 = true;
var rate5 = true;

$(document).ready(function(){
  $("#s1").click(function(){
    if (rate1==true) {
      $("#s1").css("color","rgb(236, 52, 84)");
      rate1=false;
    }
    else{
      $("#s1,#s2,#s3,#s4,#s5").css("color","rgb(36, 0, 65)");
      rate1=true;
    }
  });
  $("#s2").click(function(){
    if (rate2==true) {
      $("#s1,#s2").css("color","rgb(236, 52, 84)");
      rate2=false;
    }
    else{
      $("#s2,#s3,#s4,#s5").css("color","rgb(36, 0, 65)");
      rate2=true;
    }
  });
  $("#s3").click(function(){
    if (rate3==true) {
      $("#s1,#s2,#s3").css("color","rgb(236, 52, 84)");
      rate3=false;
    }
    else{
      $("#s3,#s4,#s5").css("color","rgb(36, 0, 65)");
      rate3=true;
    }
  });
  $("#s4").click(function(){
    if (rate4==true) {
      $("#s1,#s2,#s3,#s4").css("color","rgb(236, 52, 84)");
      rate4=false;
    }
    else{
      $("#s4,#s5").css("color","rgb(36, 0, 65)");
      rate4=true;
    }
  });
  $("#s5").click(function(){
    if (rate5==true) {
      $("#s1,#s2,#s3,#s4,#s5").css("color","rgb(236, 52, 84)");
      rate5=false;
    }
    else{
      $("#s5").css("color","rgb(36, 0, 65)");
      rate5=true;
    }
  });
});

var rate6 = true;
var rate7 = true;
var rate8 = true;
$(document).ready(function(){
  $("#circle1").click(function(){
    if (rate6==true) {
      $("#circle1").css("color","rgb(36, 0, 65)");
      $("#circle2,#circle3").css("color","#ffffff");
      rate6=false;
    }
    else{
      $("#circle1").css("color","#ffffff");
      rate6=true;
    }
  });
  $("#circle2").click(function(){
    if (rate7==true) {
      $("#circle2").css("color","rgb(36, 0, 65)");
      $("#circle1,#circle3").css("color","#ffffff");
      rate7=false;
    }
    else{
      $("#circle2").css("color","#ffffff");
      rate7=true;
    }
  });
  $("#circle3").click(function(){
    if (rate8==true) {
      $("#circle3").css("color","rgb(36, 0, 65)");
      $("#circle2,#circle1").css("color","#ffffff");
      rate8=false;
    }
    else{
      $("#circle3").css("color","#ffffff");
      rate8=true;
    }
  });
});