// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable



// on scroll, 
$(document).ready(function(){
  console.log(window.location.pathname);
  if (window.location.pathname.split('/')[1]=="explore"){
    console.log("qua");
    $('.navigation').addClass('explore-color');
  } else if (window.location.pathname.split('/')=="blog"){
    $('.navigation').addClass('blog-color');
  } else {
  $('.navigation').removeClass('explore-color');
  $('.navigation').removeClass('blog-color');
  $(window).on('scroll',function(){
    var exploretop = $('#explore').offset().top-25;
    var blogtop = $('#blog').offset().top-25;
    var gittop = $('#contact-us').offset().top-90;
    stop = Math.round($(window).scrollTop());
    if (stop > exploretop) {
      $('.navigation').addClass('explore-color');
    } else {
      $('.navigation').removeClass('explore-color');
    }
    if (stop > blogtop) {
      $('.navigation').addClass('blog-color');
    } else {
      $('.navigation').removeClass('blog-color');
    }
    if (stop > gittop) {
      $('.navigation').addClass('git-color');
    } else {
      $('.navigation').removeClass('git-color');
    }
  });
  };
});
