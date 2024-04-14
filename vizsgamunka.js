$(document).ready(function () {
  $("#monsterCM").click(function () {

    $("#monsterszovegCM").slideToggle();

    $("#monsterszovegCM").css("display", "inline-block", "text-align", "center").css("display", "inline-block", "text-align", "center").animate({
      width: "460px", 
      left: "-=100px"  }, "slow");

    

  });

  $(".visszagomb1").click(function(){ $("#monsterszovegCM").hide(1000)});

  $("#monsterNT").click(function () {
    $("#monsterszovegNT").slideToggle();

    $("#monsterszovegNT").css("display", "inline-block", "text-align", "center").css("display", "inline-block", "text-align", "center").animate({
      width: "460px", 
      left: "-=100px"  }, "slow");
   
  });
  $(".visszagomb2").click(function(){ $("#monsterszovegNT").hide(1000)});




  $("#monsterZCM").click(function () {
    $("#monsterszovegZCM").slideToggle();

    $("#monsterszovegZCM").css("display", "inline-block", "text-align", "center").css("display", "inline-block", "text-align", "center").animate({
      width: "460px", 
      left: "-=100px"  }, "slow");
    
  });
  $(".visszagomb3").click(function(){ $("#monsterszovegZCM").hide(1000)});

  $("#monsterUF").click(function () {
    $("#monsterszovegUF").slideToggle();

    $("#monsterszovegUF").css("display", "inline-block", "text-align", "center").css("display", "inline-block", "text-align", "center").animate({
      width: "460px", 
      left: "-=100px"  }, "slow");
   
  });

  $(".visszagomb4").click(function(){ $("#monsterszovegUF").hide(1000)});
  $("#monsterUP").click(function () {
    $("#monsterszovegUP").slideToggle();

    $("#monsterszovegUP").css("display", "inline-block", "text-align", "center").css("display", "inline-block", "text-align", "center").animate({
      width: "460px", 
      left: "-=100px"  }, "slow");
   
  });

  $(".visszagomb5").click(function(){ $("#monsterszovegUP").hide(1000)});
  $("#monsterUV").click(function () {
    $("#monsterszovegUV").slideToggle();

    $("#monsterszovegUV").css("display", "inline-block", "text-align", "center").css("display", "inline-block", "text-align", "center").animate({
      width: "460px", 
      left: "-=100px"  }, "slow");
  
  });
  $(".visszagomb6").click(function(){ $("#monsterszovegUV").hide(1000)});

  $("#monsterRC").click(function () {
    $("#monsterszovegRC").slideToggle();


    $("#monsterszovegRC").css("display", "inline-block", "text-align", "center").css("display", "inline-block", "text-align", "center").animate({
      width: "460px", 
      left: "-=100px"  }, "slow");
    
  });
  $(".visszagomb7").click(function(){ $("#monsterszovegRC").hide(1000)});

  $("#monsterUM").click(function () {
    $("#monsterszovegUM").slideToggle();


    $("#monsterszovegUM").css("display", "inline-block", "text-align", "center").css("display", "inline-block", "text-align", "center").animate({
      width: "460px", 
      left: "-=100px"  }, "slow");;
   
  });

  $(".visszagomb8").click(function(){ $("#monsterszovegUM").hide(1000)});


});
