$(document).ready(function () {
    console.log("Hello world");
    
    $(".infobutton").click(function() {
        $(".infopanel").addClass("active");
    });
    
    $(".close").click(function() {
        $(this).closest(".panel").removeClass("active");
    });  
    
      $(".bookbutton").click(function() {
        $(".bookpanel").addClass("active");
    });
    
  });
  