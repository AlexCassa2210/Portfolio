$(document).ready(function(){

    /* Slider */
    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200
        });
      });


      /* Skills */
      var icons =[
        {
          icon: "fab fa-html5",
          name: "HTML5",
          title: "HTML5"
        },
        {
          icon: "fab fa-css3-alt",
          name: "CSS3",
          title: "CSS3"
        },
        {
          icon: "fab fa-js",
          name: "JS",
          title: "JavaScript"
        },
        {
          icon: "fab fa-angular",
          name: "Angular",
          title: "Angular"
        },
        {
          icon: "fab fa-node-js",
          name: "NodeJS",
          title: "NodeJS"
        },
        {
          icon: "fas fa-database",
          name: "MongoDB",
          title: "MongoDB"
        },
        {
          icon: "fas fa-code",
          name: "C#",
          title: "C Sharp"
        },
        {
          icon: "fas fa-server",
          name: "SQL Server",
          title: "SQL Server"
        },
        {
          icon: "fab fa-git-alt",
          name: "Git",
          title: "Git"
        }
      ];

      icons.forEach((element, index) => {
        var icon = `
        <div class="skill-item" title="${element.title}">
          <i class="${element.icon}" aria-hidden="true" ></i>
          <div class="skill-name">${element.name}</div>
        </div>
        `;
        $("#skills").append(icon);
      });


        /* SELECTOR DE TEMA */
        var theme = $("#theme");
        $("#to-dark-neaon").click(()=>{
          theme.attr("href", "css/to-dark-neaon.css");
        });
        $("#to-commerce-green").click(()=>{
          theme.attr("href", "css/to-commerce-green.css");
        });
        $("#to-warm-pastel").click(()=>{
          theme.attr("href", "css/to-warm-pastel.css");
        });

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

        /* SELECTOR DE IDIOMA */
        /* var language = $("#language"); */
        $("#to-Spanish").click(()=>{
          location.href="../index.html";
        });
        $("#to-English").click(()=>{
          location.href="../index_en.html";
        });
        $("#to-Portuguese").click(()=>{
          location.href="../index_pt.html";
        });

        /*Scroll arriba */
        $(".up").click((e)=>{
          e.preventDefault();

          $('html, body').animate({
            scrollTop:0
          }, 500);

          return false;
        });

});