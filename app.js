$(document).ready( () => {

  const arrowImg = document.querySelector('.down-arrow');
  const billContent = document.querySelector('.history');

  $(".animsition").animsition({
    inClass: 'fade-in-right',
    outClass: 'fade-out-right',
    linkElement: '.bill-intro-div',
    inDuration: 1000,
    outDuration: 500
  });

  //Make Nav sticky after scroll
  $(window).scroll(function () {
    console.log($(window).scrollTop());

    //2K Display
    if($(window).scrollTop() > 1090 && $(window).width() > 1400) {
      console.log($(window).width());
      //For desktop displays
      $('.bill-nav').addClass('nav-2k');
    } else if ($(window).scrollTop() < 1091 && $(window).width() > 1400) {
      $('.bill-nav').removeClass('nav-2k');
    }

    //Desktop Display
    if($(window).scrollTop() > 1090 && $(window).width() > 1026 && $(window).width() < 1399) {
      console.log($(window).width());
      //For desktop displays
      $('.bill-nav').addClass('nav-desktop');
    } else if ($(window).scrollTop() < 1091 && $(window).width() > 1026 && $(window).width() < 1399) {
      $('.bill-nav').removeClass('nav-desktop');
    }


    //for mobile displays
    if($(window).scrollTop() > 1030 && $(window).width() > 768 && $(window).width() < 1025) {
      //For laptop displays
      $('.bill-nav').addClass('nav-sticky');
    } else if ($(window).scrollTop() < 1031 && $(window).width() > 768 && $(window).width() < 1025) {
      $('.bill-nav').removeClass('nav-sticky');
    }

    //Tablet display
    if($(window).scrollTop() > 1090 && $(window).width() > 767 && $(window).width() < 850) {
      //For desktop displays
      $('.bill-nav').addClass('nav-tablet');
    } else if ($(window).scrollTop() < 1091 && $(window).width() > 767 && $(window).width() < 850) {
      $('.bill-nav').removeClass('nav-tablet');
    }




  });

  //for mobile displays
  $(window).scroll(function () {

    if ($(window).scrollTop() > 770 && $(window).width() < 426) {
      $('.bill-nav').addClass('nav-mobile');
    } else if ($(window).scrollTop() < 771 && $(window).width() < 426) {
      $('.bill-nav').removeClass('nav-mobile');
    }
  });

}); //End document ready
