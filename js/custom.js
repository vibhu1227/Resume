 function loadScrollScripts(){
     var timer=600;
    $("#aAbout").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, timer);
    });

        $("#aExperience").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#experience").offset().top
        }, timer);
    });

         $("#aTechnical").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#technicalSkills").offset().top
        }, timer);
    });
        $("#aWkExp").click(function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#wkExp").offset().top
            }, timer);
     });
     $("#aExp").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#education").offset().top
        }, timer);
 });
 $("#aAward").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#awards").offset().top
    }, timer);
});
    } 

        