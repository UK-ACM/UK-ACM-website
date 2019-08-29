// JavaScript Document


$(document).ready(function(){
	calculateHomeSize();
	affix();

     $(".whiteBox").mouseover(function(e){
         $(this).find( "hr" ).css("width", "80px");
		 $(this).find(".innerContainer").css("margin-top","-50px");
		 //$(this).css("background-color","#8a8a8a");
		 $(this).find( "hr" ).css("border-color", "#a1acb2");
		 $(this).find("h1").css("color","#a1acb2");

});

$(".whiteBox").mouseleave(function(e){
         $(this).find( "hr" ).css("width", "0px");
		 $(this).find(".innerContainer").css("margin-top","150px");

		 $(this).find( "hr" ).css("border-color", "#fff");
		//$(this).css("background-color","#fff");
		$(this).find("h1").css("color","#3f3f3f");
		
		

});


});

$(document).scroll(function() {
	affix();
});
function calculateHomeSize() {
	if (window.innerWidth <= 767) {
        $('#home').css('height', window.innerHeight);
    } else {
        $('#home').css('height', window.innerHeight - $('#nav-wrapper').height());
		//$('.particles-js-canvas-el').css('width', )
    }
	
}

function affix() {
	if ($(window).scrollTop() > $('#navbarAffix').position().top) {
        $('#navid').addClass('navbar-fixed-top');
    } else {
        $('#navid').removeClass('navbar-fixed-top');
    }	
}

$(window).resize(function() {
    var viewportWidth = $(window).width();
	calculateHomeSize();
	

		//$('#nav-wrapper').height($("#navid").height());
//$("#nav-wrapper").css({"min-height":$("#navid").height()+"px"});

});


$("#navid li").click(function(e) {
	e.preventDefault();
		var idName = "#" + $(this).attr('id').toLowerCase();
		if (idName == "#home" || idName == "#sponsors" || idName=="#apply"){
			$('html, body').animate({
				scrollTop: $(idName).offset().top -99
			}, 1000);
		}
		else if (idName == "#faq"){
			idName+="id";
			$('html, body').animate({
				scrollTop: $(idName).offset().top - .24*$(window).height()
			}, 1000);
		}
		else {
			idName+="id";
			$('html, body').animate({
				scrollTop: $(idName).offset().top - .35*$(window).height()
			}, 1000);
		}
});


particlesJS("home", {
  "particles": {
    "number": {
      "value": 60, //60
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#b5b5b5"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.3,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 8,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#b5b5b5", //c6c6c6 //e1e0e0
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.1
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



