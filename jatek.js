$(document).ready(function () {
    var kor="url(img/kor.jpg)";
    var x="url(img/X.jpg)";
    var koratlos1="url(img/kor-atlos1.jpg)";
    var koratlos2="url(img/kor-atlos2.jpg)";
    var korvizstintes="url(img/kor-vizszint.jpg)";
    var korfuggoleges="url(img/kor-fuggoleges.jpg)";

    var xatlos1="url(img/x-atlos1.jpg)";
    var xatlos2="url(img/x-atlos2.jpg)";
    var xvizstintes="url(img/x-vizszint.jpg)";
    var xfuggoleges="url(img/x-fuggo.jpg)";

    let currentPlayer = "O"; // Kezdjük "O"-val
    
    $(".negyzet1, .negyzet2, .negyzet3, .negyzet4, .negyzet5, .negyzet6, .negyzet7, .negyzet8, .negyzet9").click(function () {
        if ($(this).text() === "t") { // Ellenőrizzük, hogy az adott négyzet üres-e
            $(this).text(currentPlayer); // Beállítjuk az elem szövegét az aktuális játékosnak megfelelően

            // Váltunk a következő játékosra
            currentPlayer = (currentPlayer === "O") ? "X" : "O";

            $(this).off("click"); // Távolítsuk el az eseménykezelőt az adott négyzetről

        }
        
        if($(this).text()==="O"){$(this).css("background-image", kor)}
        if($(this).text()==="X"){$(this).css("background-image", x)}
        if($(".negyzet1, .negyzet2, .negyzet3, .negyzet4, .negyzet5, .negyzet6, .negyzet7, .negyzet8, .negyzet9").text()==="X"){$(this).css("background-image", x)}
        if($(".negyzet1, .negyzet2, .negyzet3").text()==="OOO"){$("h2").text("A kör nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet1, .negyzet2, .negyzet3").css("background-image",  korvizstintes ),setTimeout(function() {location.reload();},3000)}
        if($(".negyzet4, .negyzet5, .negyzet6").text()==="OOO"){$("h2").text("A kör nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet4, .negyzet5, .negyzet6").css("background-image",  korvizstintes ),setTimeout(function() {location.reload();},3000)}
        if($(".negyzet7, .negyzet8, .negyzet9").text()==="OOO"){$("h2").text("A kör nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet7, .negyzet8, .negyzet9").css("background-image",  korvizstintes ),setTimeout(function() {location.reload();},3000)}

        if($(".negyzet1, .negyzet4, .negyzet7").text()==="OOO"){$("h2").text("A kör nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet1, .negyzet4, .negyzet7").css("background-image", korfuggoleges),setTimeout(function() {location.reload();},3000) }
        if($(".negyzet2, .negyzet5, .negyzet8").text()==="OOO"){$("h2").text("A kör nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet2, .negyzet5, .negyzet8").css("background-image", korfuggoleges),setTimeout(function() {location.reload();},3000) }
        if($(".negyzet3, .negyzet6, .negyzet9").text()==="OOO"){$("h2").text("A kör nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet3, .negyzet6, .negyzet9").css("background-image", korfuggoleges),setTimeout(function() {location.reload();},3000) }
        
        if($(".negyzet1, .negyzet5, .negyzet9").text()==="OOO"){$("h2").text("A kör nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet1, .negyzet5, .negyzet9").css("background-image", koratlos2),setTimeout(function() {location.reload();},3000)}
        if($(".negyzet3, .negyzet5, .negyzet7").text()==="OOO"){$("h2").text("A kör nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet3, .negyzet5, .negyzet7").css("background-image",koratlos1),setTimeout(function() {location.reload();},3000)}

        if($(".negyzet1, .negyzet2, .negyzet3").text()==="XXX"){$("h2").text("A X nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet1, .negyzet2, .negyzet3").css("background-image", xvizstintes),setTimeout(function() {location.reload();},3000)}
        if($(".negyzet4, .negyzet5, .negyzet6").text()==="XXX"){$("h2").text("A X nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet4, .negyzet5, .negyzet6").css("background-image", xvizstintes),setTimeout(function() {location.reload();},3000)}
        if($(".negyzet7, .negyzet8, .negyzet9").text()==="XXX"){$("h2").text("A X nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet7, .negyzet8, .negyzet9").css("background-image", xvizstintes),setTimeout(function() {location.reload();},3000)}

        if($(".negyzet1, .negyzet4, .negyzet7").text()==="XXX"){$("h2").text("A X nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet1, .negyzet4, .negyzet7").css("background-image", xfuggoleges),setTimeout(function() {location.reload();},3000)}
        if($(".negyzet2, .negyzet5, .negyzet8").text()==="XXX"){$("h2").text("A X nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet2, .negyzet5, .negyzet8").css("background-image", xfuggoleges),setTimeout(function() {location.reload();},3000)}
        if($(".negyzet3, .negyzet6, .negyzet9").text()==="XXX"){$("h2").text("A X nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet3, .negyzet6, .negyzet9").css("background-image", xfuggoleges),setTimeout(function() {location.reload();},3000)}

        if($(".negyzet1, .negyzet5, .negyzet9").text()==="XXX"){$("h2").text("A X nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet1, .negyzet5, .negyzet9").css("background-image",  xatlos2),setTimeout(function() {location.reload();},3000)}
        if($(".negyzet3, .negyzet5, .negyzet7").text()==="XXX"){$("h2").text("A X nyert! Az oldal 3 másodperc mulva újraindul"),$(".negyzet3, .negyzet5, .negyzet7").css("background-image",  xatlos1),setTimeout(function() {location.reload();},3000)}

       
    });
});