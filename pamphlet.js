$(function() {
    var options = '';
    for (var i = 22; i < 26; i++) {
        options += '<div class="test"><a href="img/' + i + '.jpg" data-toggle="lightbox" data-gallery="image"><img src="img/' + i + '.jpg" class="img-fluid"></a></div>';
      }
    $('#gallery').html(options);
    
  });


  $(function() {
    var options = '';
    for (var i = 26; i < 62; i++) {
        options += '<div class="test"><a href="img/' + i + '.jpg" data-toggle="lightbox" data-gallery="image"><img src="img/' + i + '.jpg" class="img-fluid"></a></div>';
      }
    $('#news').html(options);
    
  });