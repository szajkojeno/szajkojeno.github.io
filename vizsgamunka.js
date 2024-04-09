$(document).ready(function () {
  $("#monsterCM").click(function () {

    $("#monsterszovegCM").slideToggle();
    
    $("#monsterszovegCM").css("display", "inline-block", "text-align", "center").css("display", "inline-block", "text-align", "center").animate({       width: "400px", // Szélesség növelése
      "border-bottom-width": "50px", // Alsó szél szélességének növelése
      left: "-=100px" // Balra mozgatás
  }, "slow");


  });


  $("#monsterNT").click(function () {
    $("#monsterszovegNT").slideToggle();

    $("#monsterszovegNT").css("display", "inline-block", "text-align", "center").animate({ paddinBottom: "100px", });
  });





  $("#monsterZCM").click(function () {
    $("#monsterszovegZCM").slideToggle();

    $("#monsterszovegZCM").css("display", "inline-block", "text-align", "center").animate({ paddinBottom: "100px", });
  });


  $("#monsterUF").click(function () {
    $("#monsterszovegUF").slideToggle();

    $("#monsterszovegUF").css("display", "inline-block", "text-align", "center").animate({ paddinBottom: "100px", });
  });


  $("#monsterUP").click(function () {
    $("#monsterszovegUP").slideToggle();

    $("#monsterszovegUP").css("display", "inline-block", "text-align", "center").animate({ paddinBottom: "100px" });
  });


  $("#monsterUV").click(function () {
    $("#monsterszovegUV").slideToggle();

    $("#monsterszovegUV").css("display", "inline-block", "text-align", "center").animate({ paddinBottom: "100px" });
  });


  $("#monsterRC").click(function () {
    $("#monsterszovegRC").slideToggle();


    $("#monsterszovegRC").css("display", "inline-block", "text-align", "center").animate({ paddinBottom: "100px"});
  });


  $("#monsterUM").click(function () {
    $("#monsterszovegUM").slideToggle();

        
        $("#monsterszovegUM").css("display", "inline-block", "text-align", "center",).animate({ paddinBottom: "100px"});
    });




  });
