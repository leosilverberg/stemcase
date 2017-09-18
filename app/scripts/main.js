$(document).ready(function(){
    $(document).on('scroll', onScroll);
    // Add smooth scrolling to all links
    $('.linker').on('click', function(event) {
  console.log('click');
      // Make sure this.hash has a value before overriding default behavior
      if (this.getAttribute('data')  !== '') {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.getAttribute('data');
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });



  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $(' .menu-link>div').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.getAttribute('data'));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu-link>div').removeClass('active');
            currLink.addClass('active');
        }
        else{
            currLink.removeClass('active');
        }
    });
}


function showCase(){
    console.log("showcase");
  

}