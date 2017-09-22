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

///story 1
    $( '#frame-s1f1' ).hover(
        function() {
          $( '#sub-s1f1' ).show();
        }, function() {
            $( '#sub-s1f1' ).hide();
        }
      );
      $( '#sub-s1f1' ).hover(
        function() {
          $( '#sub-s1f1' ).show();
        }, function() {
            $( '#sub-s1f1' ).hide();
        }
      );


      $( '#frame-s1f2' ).hover(
        function() {
          $( '#sub-s1f2' ).show();
        }, function() {
            $( '#sub-s1f2' ).hide();
        }
      );
      $( '#sub-s1f2' ).hover(
        function() {
          $( '#sub-s1f2' ).show();
        }, function() {
            $( '#sub-s1f2' ).hide();
        }
      );


      $( '#frame-s1f3' ).hover(
        function() {
          $( '#sub-s1f3' ).show();
        }, function() {
            $( '#sub-s1f3' ).hide();
        }
      );
      $( '#sub-s1f3' ).hover(
        function() {
          $( '#sub-s1f3' ).show();
        }, function() {
            $( '#sub-s1f3' ).hide();
        }
      );


      ///story 2
    $( '#frame-s2f1' ).hover(
        function() {
          $( '#sub-s2f1' ).show();
        }, function() {
            $( '#sub-s2f1' ).hide();
        }
      );
      $( '#sub-s2f1' ).hover(
        function() {
          $( '#sub-s2f1' ).show();
        }, function() {
            $( '#sub-s2f1' ).hide();
        }
      );


      $( '#frame-s2f2' ).hover(
        function() {
          $( '#sub-s2f2' ).show();
        }, function() {
            $( '#sub-s2f2' ).hide();
        }
      );
      $( '#sub-s2f2' ).hover(
        function() {
          $( '#sub-s2f2' ).show();
        }, function() {
            $( '#sub-s2f2' ).hide();
        }
      );


      $( '#frame-s2f3' ).hover(
        function() {
          $( '#sub-s2f3' ).show();
        }, function() {
            $( '#sub-s2f3' ).hide();
        }
      );
      $( '#sub-s2f3' ).hover(
        function() {
          $( '#sub-s2f3' ).show();
        }, function() {
            $( '#sub-s2f3' ).hide();
        }
      );

       ///story 3
    $( '#frame-s3f1' ).hover(
        function() {
          $( '#sub-s3f1' ).show();
        }, function() {
            $( '#sub-s3f1' ).hide();
        }
      );
      $( '#sub-s3f1' ).hover(
        function() {
          $( '#sub-s3f1' ).show();
        }, function() {
            $( '#sub-s3f1' ).hide();
        }
      );


      $( '#frame-s3f2' ).hover(
        function() {
          $( '#sub-s3f2' ).show();
        }, function() {
            $( '#sub-s3f2' ).hide();
        }
      );
      $( '#sub-s3f2' ).hover(
        function() {
          $( '#sub-s3f2' ).show();
        }, function() {
            $( '#sub-s3f2' ).hide();
        }
      );


      $( '#frame-s3f3' ).hover(
        function() {
          $( '#sub-s3f3' ).show();
        }, function() {
            $( '#sub-s3f3' ).hide();
        }
      );
      $( '#sub-s3f3' ).hover(
        function() {
          $( '#sub-s3f3' ).show();
        }, function() {
            $( '#sub-s3f3' ).hide();
        }
      );
  });

  function showStory2(){
      console.log('showing 2');
    $('#story1').hide();
    $('#story3').hide();
    $('#story2').show();
    $('#story-button-1').removeClass('button-active');
    $('#story-button-3').removeClass('button-active');
    $('#story-button-2').addClass('button-active');
  }

  function showStory1(){
    console.log('showing 1');
  $('#story2').hide();
  $('#story3').hide();
  $('#story1').show();
  $('#story-button-2').removeClass('button-active');
  $('#story-button-3').removeClass('button-active');
  $('#story-button-1').addClass('button-active');
}

function showStory3(){
    console.log('showing 3');
  $('#story2').hide();
  $('#story1').hide();
  $('#story3').show();
  $('#story-button-1').removeClass('button-active');
  $('#story-button-2').removeClass('button-active');
  $('#story-button-3').addClass('button-active');
}



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
    console.log('showcase');
  

}

function showFabTab(){
    $('#fab-tab-button').addClass('active');
    $('#electronic-tab-button').removeClass('active');
    $('#electronic-tab').hide();
    $('#fab-tab').show();
}

function showElectronicTab(){
    $('#fab-tab-button').removeClass('active');
    $('#electronic-tab-button').addClass('active');
    $('#fab-tab').hide();
    $('#electronic-tab').show();
}

