$(function(){
//a 속성제거
$('a[href="#"]').on('click',function(e){
  e.preventDefault();
});

// toggle
// recipe swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 2.5,
  spaceBetween: 30,
  freeMode: true,
  loop: true
});

//  aos
AOS.init();

//bg 마우스휠
$(window).mousewheel(function(e,delta){
  if(delta > 0){//마우스 휠을 올렸을 때
    $('.bg1').stop().animate({
      top:-279
    },500)
  } else if(delta < 0){//마우스 휠을 내렸을 때
    $('.bg1').stop().animate({
      top:'-=15'
    },500)
  }
});
$(window).mousewheel(function(e,delta){
  if(delta > 0){//마우스 휠을 올렸을 때
    $('.bg2').stop().animate({
      bottom: -36
    },1000)
  } else if(delta < 0){//마우스 휠을 내렸을 때
    $('.bg2').stop().animate({
      bottom:'+=25'
    },500)
  }
});
// product hover
$('.container .product1-wrap .strawberry .product_img1 a').on('mouseenter',function(){
  $(this).animate({
    marginRight:-800,
  },800)
  $('.container .product1-wrap .strawberry .event_img1').stop().animate({
    width:'100%',
    height:444,
    opacity:1
  },800);
});
$('.container .product1-wrap .strawberry .event_img1').on('mouseleave',function(){
  $(this).animate({
    width:0,
    height:252,
    opacity:0
  },800)
  $('.container .product1-wrap .strawberry .product_img1 a').animate({
    marginRight:10
  },800);
});

$('.container .product2-wrap .blueberry .product_img2 a').stop().on('mouseenter',function(){
  $(this).animate({
    marginLeft:-800,
  },800)
  $('.container .product2-wrap .blueberry .event_img2').stop().animate({
    width:'100%',
    height:444,
    opacity:1
  },800);
});
$('.container .product2-wrap .blueberry .event_img2').stop().on('mouseleave',function(){
  $(this).animate({
    width:0,
    height:252,
    opacity:0
  },800)
  $('.container .product2-wrap .blueberry .product_img2 a').stop().animate({
    marginLeft:20
  },800);
});







  // 딸기, 블루베리 bg 움직임 효과
  $('.container .product1-wrap').on('mousemove',function(e){
    let x = e.pageX
    let y = e.pageY
    $('.berry1').css({
      right: -62 -x/50, 
      top: -168 -y/100
    });
  });
  $('.container .product2-wrap').on('mousemove',function(e){
    let x = e.pageX
    let y = e.pageY
    $('.berry2').css({
      left: -27 +x/55, 
      top: -42 +y/100
    });
  });
});
