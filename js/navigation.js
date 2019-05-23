// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable



// on scroll, 
$(document).ready(function(){
  $(window).on('scroll',function(){
    // we round here to reduce a little workload
    var exploretop = $('#explore').offset().top;
    var blogtop = $('#blog').offset().top;
    var gittop = $('#contact-us').offset().top;
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
});
