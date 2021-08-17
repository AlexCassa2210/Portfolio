$(document).ready(function(){
    /* SELECTOR TEMA PT */
    var themePT = $("#themePT"); 

    $("#to-dark-neaon-pt").click(()=>{
      themePT.attr("href", "../css/to-dark-neaon.css");
    });
    $("#to-commerce-green-pt").click(()=>{
      themePT.attr("href", "../css/to-commerce-green.css");
    });
    $("#to-warm-pastel-pt").click(()=>{
      themePT.attr("href", "../css/to-warm-pastel.css");
    });
});