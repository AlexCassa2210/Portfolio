$(document).ready(function(){
    /* SELECTOR TEMA EN */
    var themeEN = $("#themeEN"); 

    $("#to-dark-neaon-en").click(()=>{
      themeEN.attr("href", "../css/to-dark-neaon.css");
    });
    $("#to-commerce-green-en").click(()=>{
      themeEN.attr("href", "../css/to-commerce-green.css");
    });
    $("#to-warm-pastel-en").click(()=>{
      themeEN.attr("href", "../css/to-warm-pastel.css");
    });
});