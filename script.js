$(document).ready(function() {
    // Show h3 on hover
    $(".img-container, .img-container2").hover(
      function() {
        $(this).find(".text-light").stop(true,true).fadeIn();
      },
      function() {
        $(this).find(".text-light").stop(true,true).fadeOut();
      });
      
    $(".img-container").click(function() {
        // Toggle visibility of recipe details
        $(".recipe-details").not($(this).find(".recipe-details")).slideUp();
        $(this).find(".recipe-details").slideToggle();
      });

    $(".img-container2").click(function() {
      // Toggle visibility of recipe details
      $(".recipe-details").not($(this).find(".recipe-details")).slideUp();
      $(this).find(".recipe-details").slideToggle();
    });

    $('#searchInput').on('input', function(){
      var searchTerm = $(this).val().toLowerCase();
      
      $('.img-container, .img-container2').each(function(){
          var recipeName = $(this).find('h3').text().toLowerCase();
          
          if(recipeName.includes(searchTerm)){
              $(this).show();
          } else {
              $(this).hide();
          }
      });
  });

  });
