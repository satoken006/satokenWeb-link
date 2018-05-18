$(function(){
    $("tr:not(:nth-child(1))").mouseenter(function(){
        $(this).css("background-color","#4ECCBF");
        $(this).find("td").css("color","white");
        $(this).find("td").find("img").css("filter","invert(100%)");

    }).mouseleave(function(){
        $(this).css("background-color","rgba(255, 255, 255, 0.5)");
        $(this).find("td").css("color","black");        
        $(this).find("td").find("img").css("filter","none");

    }).click(function(){
        window.location = $(this).attr("data-href");
    });
});