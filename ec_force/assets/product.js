$(function(){
  $(document).on('click', '.close', function() {
    setTimeout(function(){
      $(".l-wrapper").removeClass('is-remove')
      $(".l-wrapper-none").removeClass('is-remove')
    }, 500);
  })
});
