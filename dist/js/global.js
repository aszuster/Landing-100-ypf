// FOOTER YPF

function initializeFooter() {
    const buttons = document.querySelectorAll("#footer button");

    const handleClick = ({ currentTarget }) =>

      buttons.forEach((button) => {
        const list = document.querySelector(
          `#footer ul[data-index="${button.dataset.index}"]`
        );
        if (button.dataset.index === currentTarget.dataset.index) {
          list.classList.toggle("active");
          button.classList.toggle("active");
        } else {
          list.classList.remove("active");
          button.classList.remove("active");
        }
      });

    buttons.forEach((button) => button.addEventListener("click", handleClick));
  }

  initializeFooter();


// SLIDER INSCRIPCION

$('.owl-inscripcion').owlCarousel({
  center: true,
  items: 1,
  loop: false,
  nav: false,
  stagePadding: 20,
  margin: 5,
  autoplayHoverPause:true,
  dots: false,
  responsive:{
      768:{
          items: 3,
          center: false,
          stagePadding: 0,
          margin: 0
      }
  }
});

$('.owl-nos-cuidamos').owlCarousel({
  center: true,
  items: 1,
  loop: false,
  nav: false,
  stagePadding: 30,
  margin: 5,
  autoplayHoverPause:true,
  dots: false,
  responsive:{
    992:{
        items: 4,
        center: false,
        stagePadding: 0,
        margin: 0
    },
    768:{
        items: 2,
        center: false,
        stagePadding: 0,
        margin: 0
    }
  }
});





// SLIDER MAPAS

$('.owl-como-llegar').on('initialized.owl.carousel changed.owl.carousel', function(e) {
  if (!e.namespace)  {
    return;
  }
  var carousel = e.relatedTarget;
  $('.slider-counter').text(carousel.relative(carousel.current()) + 1);
}).owlCarousel({
  items: 1,
  loop: false,
  nav: true,
  navText: ["<img src='images/como-llegar/arrow.png'>","<img src='images/como-llegar/arrow.png'>"],
  autoplayHoverPause:true,
  dots: false,
});


$('.owl-como-llegar-vehicular').on('initialized.owl.carousel changed.owl.carousel', function(e) {
  if (!e.namespace)  {
    return;
  }
  var carousel = e.relatedTarget;
  $('.slider-counter-vehicular').text(carousel.relative(carousel.current()) + 1);
}).owlCarousel({
  items: 1,
  loop: false,
  nav: true,
  navText: ["<img src='images/como-llegar/arrow.png'>","<img src='images/como-llegar/arrow.png'>"],
  autoplayHoverPause:true,
  dots: false,
});




//MOVEMOS DE LUGAR LOS OWL-NAV
	
$( "#aca" ).append( $(".owl-como-llegar .owl-nav") );
$( "#aca2" ).append( $(".owl-como-llegar-vehicular .owl-nav") );



// ACCORDION FAQS

const accordionList = document.querySelectorAll(".accordion-item");

accordionList.forEach((event) =>
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      accordionList.forEach((event2) => event2.classList.remove("active"));
      event.classList.add("active");
    }
  })
);

// MOVEMOS DE LUGAR LOS BOTONES

const mediaQuery = window.matchMedia('(max-width: 768px)')
function handleTabletChange(e) {
  if (e.matches) {
    $( "#video" ).append( $("#botones") );
  } else {
    $( ".box-blue-app__col p" ).append( $("#botones") );
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery);

//YOUTUBE VIDEO

var url = $("#videoyoutube").attr('src');

// Open Modal
jQuery('.to-recorridos').click(function() {
  jQuery('.modal').show();
  $("#videoyoutube").attr('src', url);
  $('body').addClass('stop');
});

// Close Modal
jQuery('.modal .close').click(function() {
  jQuery('.modal').hide();
  $("#videoyoutube").attr('src', '');
  $('body').removeClass('stop');
});


// TABS

function openTab(evt, paso) {
  var i, x, tablinks;
  x = document.getElementsByClassName("mapa");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeTab", "");
  }
  document.getElementById(paso).style.display = "block";
  evt.currentTarget.className += " activeTab";
}


$(document).ready(function() {
  if ( $(window).width() < 767 ) {
    startCarousel();
  } else {
    $('.owl-disfrutar').addClass('off');
  }
});

$(window).resize(function() {
    if ( $(window).width() < 767 ) {
      startCarousel();
    } else {
      stopCarousel();
    }
});


function startCarousel(){
$('.owl-disfrutar').on('initialized.owl.carousel changed.owl.carousel', function(e) {
  if (!e.namespace)  {
    return;
  }
  var carousel = e.relatedTarget;
  $('.slider-counter-disfrutar').text(carousel.relative(carousel.current()) + 1);
}).owlCarousel({
  items: 1,
  loop: false,
  autoplay: false,
  nav: true,
  navText: ["<img src='images/como-llegar/arrow.png'>","<img src='images/como-llegar/arrow.png'>"],
  autoplayHoverPause:true,
  dots: false,
  center: true,
  stagePadding: 20,
  margin: 5,
});

$( "#aca3" ).append( $(".owl-disfrutar .owl-nav") );
}

function stopCarousel() {
  var owl = $('.owl-disfrutar');
  owl.trigger('destroy.owl.carousel');
  owl.addClass('off');
}




// Show Mapas

$('#peatonal-lasalle-mapa').show();
$('#peatonal-constituyentes-mapa').hide();
$('#vehicular-lasalle-mapa').hide();
$('#vehicular-constituyentes-mapa').hide();

$('#peatonal-lasalle-boton').click(function() {
  $('#peatonal-lasalle-mapa').show();
  $('#peatonal-constituyentes-mapa').hide();
  $('#vehicular-lasalle-mapa').hide();
  $('#vehicular-constituyentes-mapa').hide();
});

$('#peatonal-constituyentes-boton').click(function() {
  $('#peatonal-lasalle-mapa').hide();
  $('#peatonal-constituyentes-mapa').show();
  $('#vehicular-lasalle-mapa').hide();
  $('#vehicular-constituyentes-mapa').hide();
});

$('#vehicular-lasalle-boton').click(function() {
  $('#peatonal-lasalle-mapa').hide();
  $('#peatonal-constituyentes-mapa').hide();
  $('#vehicular-lasalle-mapa').show();
  $('#vehicular-constituyentes-mapa').hide();
});

$('#vehicular-constituyentes-boton').click(function() {
  $('#peatonal-lasalle-mapa').hide();
  $('#peatonal-constituyentes-mapa').hide();
  $('#vehicular-lasalle-mapa').hide();
  $('#vehicular-constituyentes-mapa').show();
});