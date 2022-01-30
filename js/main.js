$(document).ready(function () {

  // click Menu Button to show Mobile Nav Menu
  $(".menu-btn").on("click", function(){
      $(".mobile-nav").toggleClass("right")
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
  });

  // toggle icon Menu in menu btn
  $(".header .menu-btn .fa-bars").click(function(){
    $(this).fadeOut();
    $(".header .menu-btn .fa-times").fadeIn();
  })
  $(".header .menu-btn .fa-times").click(function(){
    $(this).fadeOut();
    $(".header .menu-btn .fa-bars").fadeIn();
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
      $(window).scrollTop($("#home").offset().top -= 250)
    })
  })
});

