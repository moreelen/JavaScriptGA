$(function() {
  // Initiate Fancybox
  $('.fancybox a').fancybox();

  // Initiate Slick
  $('.carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});

  // Initiate Data Tables
  $('#example').DataTable();

  $(function(){
    console.log('test');
  });
});
