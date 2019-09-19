var i = 1;
showSlides();

function showSlides() {
    var options = '';
        options += '<img src="img/00'+i+'.jpg">';
    $('#banner').html(options);
    i++;
    if (i >= 4) {
        i = 1;
    }
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}