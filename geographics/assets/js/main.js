$(document).ready(function () {
    console.log("Hello world");
    
    $(".infobutton").click(function() {
        $(".infopanel").addClass("active");
    });
    
    $(".close").click(function() {
        $(this).closest(".panel").removeClass("active");
    });  

    $(".earth").click(function() {
      $(".earthpanel").addClass("active");
  });

  $(".close").click(function() {
    $(this).closest(".panel2").removeClass("active");
}); 

$(".cloud").click(function() {
  $(".cloudpanel").addClass("active");
});

$(".close").click(function() {
$(this).closest(".panel3").removeClass("active");
}); 

$(".city").click(function() {
  $(".citypanel").addClass("active");
});

$(".close").click(function() {
$(this).closest(".panel4").removeClass("active");
}); 

$(".address").click(function() {
  $(".addresspanel").addClass("active");
});

$(".close").click(function() {
$(this).closest(".panel5").removeClass("active");
}); 

$(".interface").click(function() {
  $(".interfacepanel").addClass("active");
});

$(".close").click(function() {
$(this).closest(".panel6").removeClass("active");
}); 

$(".user").click(function() {
  $(".userpanel").addClass("active");
});

$(".close").click(function() {
$(this).closest(".panel7").removeClass("active");
}); 
    
  });
  