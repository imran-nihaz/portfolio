   //preloader 60px
   $(window).on('load', function(){

    setTimeout(() => {
    preloader();
}, 500);

function preloader(){
  setTimeout(() => {  
    scrollTrigger();
  }, 3800);
  let circumference = 2 * Math.PI * 299; // r = 299

let percent1 = Math.round(Math.random() * 25 + 25); 
let percent2 = Math.round(Math.random() * 25 + 50); 
let percent3 = 100;  

let dashOffset1 = circumference * (1 - percent1 / 100);
let dashOffset2 = circumference * (1 - percent2 / 100);
let dashOffset3 = 0; 

function appendPercentage() {
    let displayDiv = document.querySelector(".percent-display");
    let percentages = [0, percent1, percent2, percent3]; 

    percentages.forEach((percent) => {
        let percentageText = document.createElement("div");
        percentageText.classList.add("number"); 

        percent.toString().padStart(2, "0").split("").forEach((digit) => {
            let span = document.createElement("span");
            span.textContent = digit;
            percentageText.appendChild(span);
        });

        displayDiv.appendChild(percentageText);
    });
}

appendPercentage();

 let tl = gsap.timeline({ repeat: 0, repeatDelay: 0.5 });

  tl.to(".circle", { strokeDashoffset: dashOffset1, duration: .3, ease: "expo.inOut" }, 0.3)
    .to(".preloader svg", { rotate: '+=15', duration: .2, ease: "power1.inOut" }, 0.3)
    .to(".percent-display .number > span", { y: "-=100%", duration: .2, stagger: .05, ease: "power1.inOut" }, 0.3)
    .to(".circle", { strokeDashoffset: dashOffset2, duration: .3, ease: "expo.inOut" }, "+=.4")
    .to(".preloader svg", { rotate: '+=15', duration: .2, ease: "power1.inOut" }, "-=0.3")
    .to(".percent-display .number > span", { y: "-=100%", duration: .2, stagger: .05, ease: "power1.inOut" }, "-=.3")
    .to(".circle", { strokeDashoffset: dashOffset3, duration: .3, ease: "expo.inOut" }, "+=0.3")
    .to(".preloader svg", { rotate: '+=15', duration: .2, ease: "power1.inOut" }, "-=0.3")
    .to(".percent-display .number > span", { y: "-=100%", duration: .2, stagger: .05, ease: "power1.inOut" }, "-=.3")
    .to(".circle, .circle-bg", { strokeDashoffset: '-1884', duration: 1, ease: "expo.inOut" }, "+=.3")
    .to(".percent-display .number > span", { y: "-=100%", duration: .3, stagger: .05, ease: "expo.inOut" }, "-=.9")
    .to(".preloader .loading", { autoAlpha: 0, duration: .5, ease: "expo.inOut" }, "-=.9")
    .to(".preloader", { y: "-=100%", 'pointer-events': 'none', duration: 1, ease: "expo.inOut", }, "-=.5");
}

  //SCROLL trigger

  function scrollTrigger(){

    $('.text-anime').each(function(){
      gsap.to( $(this).find('.text-lines'),{ 
        y: 0,
        stagger:.1,
        delay : $(this).data('delay') ? $(this).data('delay') : 0,
        duration:1.1,
          scrollTrigger: {
            trigger: $(this),
            start: "top bottom-=20%",
            end: "center 100px",
            }
      });
    });
  
    $('.fade-up-anime').each(function(){
      gsap.to( $(this),{ 
        y: 0,
        autoAlpha:1,
        stagger:.1,
        duration:1.1,
          scrollTrigger: {
            trigger: $(this),
            start: "top bottom-=20%",
            end: "center 100px",
            }
      });
    });
    
  
  
      
  }

});





$(document).ready(function() {


  function splitText(){
 
  
    splitLines = new SplitText(".text-anime", {
      type: "lines",
      linesClass: "text-lines"
    });
  
  
    
  
    $(".text-anime .text-lines").wrap('<div class="line-wrapper">');
  
  }
  
  splitText();

        const ua = navigator.userAgent;
    
        // Only Safari (macOS or iOS Safari)
        const isSafari =
          /^((?!chrome|android).)*safari/i.test(ua);
    
        if (isSafari) {
          document.documentElement.classList.add("safari-browser");
        }


    // ACCORDION
    $('.accordion-header').on('click', function(){
      

        $(this).toggleClass('active');
        $(this).next('.accordion-content').slideToggle();

        $('.accordion-header').not($(this)).removeClass('active');
        $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
    });


    if($('.commentSlider').length){
      var swiper = new Swiper(".commentSlider", {
        slidesPerView: 2.8,
        spaceBetween: 30,
        autoplay: {
          delay: 1,
          disableOnInteraction: false
        },
        speed: 10000,
        loop: true,
      loopAdditionalSlides: 3,
        breakpoints: {
          0: {
            slidesPerView: 1.5
          },
          768: {
            slidesPerView: 2.8
          }
        }
      });
    }

    if( $('.lightbox').length ){

      $('.lightbox img').magnificPopup({
            type:'image',
            closeOnContentClick: true,
            gallery:{enabled:true},
            zoom:{enabled: true, duration: 300}
        });
        
    }

    const sidebar = gsap.timeline({yoyo: false,reversed: true});
    sidebar.pause();

      sidebar.to(".sidebar", {
        autoAlpha: 1,
        'pointer-events': 'all',
        duration: .3
      })
      .to(".sidebar .right-bar", {
        x: 0,
        duration: .3
      });

    $('.hamburger').on('click', function(){
        sidebar.reversed() ? sidebar.play(): sidebar.reverse();
    });

    
    $('.sidebar').on('click', function(){
      sidebar.reversed() ? sidebar.play(): sidebar.reverse();
  });



  
  $(window).on("scroll", function () {
    let scrollPos = $(window).scrollTop();
    let offset = 150;
  
    $("section").each(function () {
      let top = $(this).offset().top - offset;
      let bottom = top + $(this).outerHeight();
      let id = $(this).attr("id");
  
      if (scrollPos >= top && scrollPos < bottom) {
        $(".icon-bar a.active, .sidebar a.active").removeClass("active");
        $('.icon-bar a[href="#' + id + '"], .sidebar a[href="#' + id + '"]').addClass("active");
        return false; // loop break
      }
    });
  });

});




