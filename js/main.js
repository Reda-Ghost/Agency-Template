$(document).ready(function () {

  // click Menu Button to show Mobile Nav Menu
  $(".menu-btn").on("click", function(){
      $(".mobile-nav").toggleClass("right")
      // if((".mobile-nav").has('.right')){
      //   $(this).children('.fa-bars').fadeIn(500)
      // }
      // else {
      //   $(this).children('.fa-times').fadeIn(500)
      // }
  });

  // add shadow on scroll Nav Mobile
  $(window).on("scroll", function () { 
    if ($(window).scrollTop() > 0 ) {
      $(".flex-bar").addClass("shadow");
    } else {
      $(".flex-bar").removeClass("shadow");
    }
  });

  // scroll To Content desktop nav
  $(".nav-menu ul li:not(:last-of-type) a").click(function (e) { 
    e.preventDefault();
    $(window).scrollTop($("#" + $(this).data("scroll")).offset()
      .top -= 150);
  });

  // scroll To Content mobile Nav
  $(".mobile-nav ul li a").click( function(e) {
    e.preventDefault();
    $(window).scrollTop($("#" + $(this).data("scroll")).offset().top -= 150);
  })

  // calculate Margin of Mobile Menu bar
  if ($(window).outerWidth() < 992) {
    if ($(".flex-bar").height() > 80) {
      $(".home-content").css("margin-top", $(".flex-bar").height() + 30 + "px");
    } else {
      $(".home-content").css("margin-top", $(".flex-bar").height() + 20 + "px");
    }
  }

  // colorize selected item Desktop nav menu 
  $(".nav-menu ul li").click(function() {
    $(".nav-menu li").removeClass("active")
    $(this).addClass("active");
  });

  // colorize selected item Mobile nav menu 
  $(".mobile-nav ul li").click(function() {
    $(".mobile-nav li").removeClass("active");
    $(this).addClass("active");
    $(this).parents('.mobile-nav').toggleClass('right')
    // condition check if menu-btn has class times to remove it
    if ($('.menu-btn').has("i.fa-times")) {
      $(".menu-btn i").removeClass('fa-times').addClass('fa-bars')
    }
    
  });

  // toggle icon Menu in menu btn
  $(".header .menu-btn i").click(function(){
    $(this).toggleClass("fa-bars fa-times")
  })
  

  // all scrolling works here
  $(window).scroll(function() {

    // Sync link of nav bar with section
    let parentContainer = $(".container").parent();
    parentContainer.each(function() {
      if ($(window).scrollTop() > ($(this).offset().top -= 250)) {
        $(".nav-menu li").removeClass("active");
        $(".mobile-nav li").removeClass("active");

        let parentContainerId = $(this).attr("id");
        
        $(".nav-menu a[data-scroll='"+ parentContainerId +"']").parent().addClass("active");
        $(".mobile-nav a[data-scroll='"+ parentContainerId +"']").parent().addClass("active");
      }
    });

    // scrolling to top 
    let scrollingTop = $(".scroll-top");
    if ($(window).scrollTop() > 900) {
      if(scrollingTop.is(":hidden")) {
        scrollingTop.fadeIn(600).css("display","flex");
      }
    } else {
      scrollingTop.fadeOut(600);
    }
    scrollingTop.click(function() {
      $(window).scrollTop($("#home").offset().top -= 300)
    })
  })

  // input plugins
  // $('.info-contact input, .text textarea').one('keydown',
  // function(e) {
  //   // condition user must click a letter or number
  //   // letter or number buttons with keycode condition
  //   $(this).val('' + e.key.slice(1))
  // })
  $('.info-contact input, .text textarea').on({
    focus : function(){
      $(this).val('')
    },
    blur : function(){
      if($(this).val().length == 0) {
        $(this).val($(this).data('default'));
      }
    }
  })
  // remove default event of anchors
  $('a').click(function(e){
    e.preventDefault()
  })
});

