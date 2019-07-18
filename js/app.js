;(function($) {
    "use strict";
    
	$('.ba-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
        arrows: false,
        infinity: true,
        // autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'ease-out',
        speed: 1500
    });

    $('.ba-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide);
      });

      $('#btn-play').on('click', function(){
        $('.ba-slider').slick('slickPlay');
      })
      $('#btn-pause').on('click', function(){
        $('.ba-slider').slick('slickPause');
      })

      $('#btn-next').on('click', function(){
        $('.ba-slider').slick('slickNext');
      })

      $('#btn-prev').on('click', function(){
        $('.ba-slider').slick('slickPrev');
      })


      $('#btn-CurrentSlide').on('click', function(){
        alert($('.ba-slider').slick('slickCurrentSlide'));
      });

      $('#goToSlide').on('change', function(){
          var numberOfSlide = $(this).val();
          $('.ba-slider').slick('slickGoTo', numberOfSlide);
      })

})(jQuery); 
    
    
   



 









/*

	$('.portfolio-examp').masonry({
		itemSelector: '.portfolio-item',
	});

	$('.portfolio-examp').isotope();

	var filters = [];

	$('.portfolio-navi').on('click', 'a', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');

		var isChecked = $(this).hasClass('active');

		var filter = $(this).attr('data-filter');

		if (isChecked) {
			addFilter(filter);
		} else {
			removeFilter(filter);
		}

		console.log(filters);
		$('.portfolio-examp').isotope({
			filter: filters.join(',')
		});
	});

	function addFilter( filter ) {
	  if ( filters.indexOf( filter ) == -1 ) {
	    filters.push( filter );
	  }
	}

	function removeFilter( filter ) {
	  var index = filters.indexOf( filter);
	  if ( index != -1 ) {
	    filters.splice( index, 1 );
	  }
	}
*/