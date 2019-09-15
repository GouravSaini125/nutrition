
$(function() {
    var options = '';
    for (var i = 1; i < 27; i++) {
        options += '<div class="test col-md-3 col-sm-5 col-xs-10"><a href="img/' + i + '.jpg" data-toggle="lightbox" data-gallery="image"><img src="img/' + i + '.jpg" class="img-fluid"></a></div>';
      }
    $('#gallery').html(options);
    
  });