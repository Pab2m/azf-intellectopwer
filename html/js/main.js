$(document).ready(function(){

    $("#email-button").add("#entry").hover(function(){
    $(this).find(".glyphicon").css({color:"#108F91",
    transition:"all 0.6s ease 0s"});
    },
    function(){
      $(this).find(".glyphicon").css({color:"#CCC",
      transition:"all 0.6s ease 0s"});
    });
     $("#input-search").focus(function(){
       $("#search").css({border:"1px solid #60ADE4"});
       $(this).blur(function(){
        $("#search").css({border:"1px solid #CCC"});
       });
     });



});
