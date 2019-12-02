$(".mini-item .mcar").animate({
      "margin-right":130
      
},800)

$(".mini-item .mlight").animate({
    opacity:"1"
},1200)

$(".benz-car .benz-mercedes img").animate({
  
  width:"614px",
  height:"505px",

},1200)
$(".benz-car .benz-light img").show(1700)




$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 100000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  

    $('.tlt').textillate({ in: { effect: 'rollIn' } },500);
    
    
  
  });

  $('#arrival .multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // dots:true,

  });
  $('.first .multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots:true,

  });
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay:true
    
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

  


  $(document).ready(function() {
    var seviye = 55;
    var yukseklik = seviye / $(window).height();
    var genislik = seviye / $(window).width();
    $("body").mousemove(function(e){
        var sayfaX = e.pageX - ($(window).width() / 4);
        var sayfaY = e.pageY - ($(window).height() / 4);
        var yenidegerX = genislik * sayfaX * -1 - 0 ;
        var yenidegerY = yukseklik * sayfaY * -1 - 50;
        $('div.dinamik-background').css("background-position", yenidegerX+"px     "+yenidegerY+"px");
    });
});



// $(document).ready(function(){
   
//   // $(window).scrollTop(function(){
//   //   if((this).scroll() > 50 ){
//   //     $(".scroolTop").fadeIn();
//   //   } else {
//   //     $(".scroolTop").fadeOut();
//   //   }
//   // });
//   $(".scroolTop").click(function(){
//     $('html,body').animate({
//       scrollTop:0,
      
//     },800);
   
//   });
// });


$(document).ready(function(){
   
  
  $(".scroolTop").click(function(){
    $(this).css({"bottom":"100%"}) 
    $('html,body').animate({
      scrollTop:50
    },800);
    

  });

  $(window).scroll(function(){
   
    if($(window).scrollTop() > 50 ){
      $(".scroolTop").fadeIn();
    
    } else {
      $(".scroolTop").css("bottom","40px");
      $(".scroolTop").hide();
    }
  });
});
