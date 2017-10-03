$(document).ready(function() {

	$('[data-toggle="tooltip"]').tooltip();

	$('.dropdown-toggle').dropdown();

	$('.consultant-btn__title').on('click', function() {
		var modal = $('.consultant-modal');
		modal.hasClass('open') ? modal.removeClass('open') : modal.addClass('open');
	});
	$('.consultant-modal__close').on('click', function(e) {
		e.preventDefault();
		$('.consultant-modal').removeClass('open');
	});


	$('.rating.clickable').children('.rating__star').on('click', function() {
		var stars = $(this).siblings('.rating__star').add( $(this) );
		var indx = stars.index( $(this) ) + 1;
		if ( $(this).closest('.rating').hasClass('fill') ) {
			stars.addClass('empty');
			stars.slice(0, indx).removeClass('empty');			
		} else {
			stars.removeClass('fa-star').addClass('fa-star-o');
			stars.slice(0, indx).removeClass('fa-star-o').addClass('fa-star');
		}

		$(this).siblings([type="hidden"]).val(indx);
	});


	// Counter
	(function(buttonPrev, buttonNext) {
		var int = $('[data-type="counter"]');
		var min = +int.attr('data-min') || 0;
		var max = +int.attr('data-max') || 100;

		int.addClass('counter-int').wrap('<div class="counter"></div>');
		$('.counter').prepend([
			'<button class="',
			(buttonPrev ? buttonPrev : 'counter-less'),
			'">-</button>'
		].join(''));

		$('.counter').append([
			'<button class="',
			(buttonNext ? buttonNext : 'counter-more'),
			'">+</button>'
		].join(''));

		if ( !int.val() ) {
			int.val(min);
		}

		var less = int.prev();
		var more = int.next();

		int.on('change', function() {
			var val = $(this).val();
			if ( val < min || !isNumeric(val) ) {
				$(this).val(min);
			}
			if ( val > max ) {
				$(this).val(max);
			}
		});

		less.on('click', function() {
			var val = $(this).next();
			if( val.val() > min ) {
				val.val( +val.val() - 1 );
			}
		});

		more.on('click', function() {
			var val = $(this).prev();
			if( val.val() < max ) {
				val.val( +val.val() + 1 );
			}
		});	

		var isNumeric = function(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}
	})('number-picker__left', 'number-picker__right');


	$('.donut').peity('donut')


	new Swiper('.dish-weight__container', {
		nextButton: '.dish-weight__left',
		prevButton: '.dish-weight__right',
		spaceBetween: 30,
		slidesPerView: 1,
		loop: true
	});

	// reviews
	new Swiper('.reviews__container', {
		slidesPerView: 3,
		paginationClickable: true,
		pagination: '.reviews__pagination',
		nextButton: '.reviews__button-next',
		prevButton: '.reviews__button-prev',
		spaceBetween: 30,
		hashnavWatchState: true,
		breakpoints: {
			1199: {
				slidesPerView: 2
			},
			991: {
				slidesPerView: 1
			}
		}
	});

});