var sliderWidth = $('.sliders').width();
$('.sliders:last-child').prependTo('#inner');

$('#next').on('click', function (){
    $('#inner').animate({
      left: "-=" + sliderWidth
    }, {
      complete: function (){
        $('.sliders:first-child').appendTo('#inner');
        $('#inner').css('left', '+=' + sliderWidth);
      }
    });

})

$('#prev').on('click', function (){
  $('#inner').animate({
    left: '+=' + sliderWidth
  }, {
    complete: function (){
      $('.sliders:last-child').prependTo('#inner');
      $('#inner').css('left', '-=' + sliderWidth);
    }
  });

})
