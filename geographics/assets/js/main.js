$(document).ready(function () {
    console.log("Hello world");
    
    $(".infobutton").click(function() {
        $(".infopanel").addClass("active");
    });
    
    $(".close").click(function() {
        $(this).closest(".panel").removeClass("active");
    });  

    $(".earthbutton").click(function() {
      $(".earthpanel").addClass("active");
  });

  $(".close").click(function() {
    $(this).closest(".panel2").removeClass("active");
}); 
    
  });
  