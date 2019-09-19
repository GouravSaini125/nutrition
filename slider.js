var i = 1;
showSlides();

function showSlides() {
    var options = '';
        options += '<img src="img/00'+i+'.jpg" class="img-fluid">';
    $('#banner').html(options);
    i+=1;
    if (i >= 5) {
        i = 1;
    }
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}