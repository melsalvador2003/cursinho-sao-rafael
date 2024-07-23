document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' , {
        type   : 'loop',
        drag   : 'free',
        snap   : true,
        perPage: 2,
      } );
    

    splide.mount();
  } );