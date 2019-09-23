var j = 1;

$(function () {
    var options = '';
  for (var i = 22; i <= 26; i++) {
    if (i % 2 == 0)
      if (j == 0)
        j = 1;
      else
        j = 0;
      if(j==1)
        options += '<div class="test" data-aos="fade-left"><a href="img/' + i + '.jpg" data-toggle="lightbox" data-gallery="image"><img src="img/' + i + '.jpg" class="img-fluid"></a></div>';
      else
        options += '<div class="test" data-aos="fade-right"><a href="img/' + i + '.jpg" data-toggle="lightbox" data-gallery="image"><img src="img/' + i + '.jpg" class="img-fluid"></a></div>';
    
      }
    $('#gallery').html(options);
    
  });


  $(function() {
    var options = '';
    for (var i = 27; i <= 83; i++) {
      if (i % 2 == 0)
      if (j == 0)
        j = 1;
      else
        j = 0;
            if(j==1)
              options += '<div class="test" data-aos="fade-left"><a href="img/' + i + '.jpg" data-toggle="lightbox" data-gallery="image"><img src="img/' + i + '.jpg" class="img-fluid"></a></div>';
            else
              options += '<div class="test" data-aos="fade-right"><a href="img/' + i + '.jpg" data-toggle="lightbox" data-gallery="image"><img src="img/' + i + '.jpg" class="img-fluid"></a></div>';
      }
    $('#news').html(options);
    
  });