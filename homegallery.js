
$(function() {
    var options = '';
    for (var i = 1; i < 9; i++) {
        options += '<div class="test"><a href="img/' + i + '.jpg" data-toggle="lightbox" data-gallery="image"><img src="img/' + i + '.jpg" class="img-fluid"></a></div>';
      }
    $('#gallery').html(options);
    
  });