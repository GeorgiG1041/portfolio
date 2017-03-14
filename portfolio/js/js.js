$(document).ready(function(){



  setTimeout(function() {
    $('.logo').fadeIn().removeClass('hidden');
  }, 1000);

   $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1800);
        return false;
      }
    }
  });

var documentElement = $(document),
nav = $('nav'),
lastScrollTop= 0;


documentElement.on('scroll', function() {

  var currentScrollTop = $(this).scrollTop();


    if (currentScrollTop > lastScrollTop) nav.addClass('hidden').slideDown("slow");

    else nav.removeClass('hidden').slideDown("slow");

    lastScrollTop = currentScrollTop;
});

function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}


    var clicks = $(".clicks");
    var aboutUs = $(".inform");
    var text = $(".text");
    var blog = $(".blogs");

    text.on('mouseover', function(event) {
        event.preventDefault('display:none');
        aboutUs.fadeIn(3000);
    });


    clicks.on('click', function(event) {
	event.preventDefault('display:none');
	aboutUs.fadeIn(5000);
});



});

