$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip(),$(".dropdown-toggle").dropdown(),$(".consultant-btn__title").on("click",function(){var t=$(".consultant-modal");t.hasClass("open")?t.removeClass("open"):t.addClass("open")}),$(".consultant-modal__close").on("click",function(t){t.preventDefault(),$(".consultant-modal").removeClass("open")}),$(".rating.clickable").children(".rating__star").on("click",function(){var t=$(this).siblings(".rating__star").add($(this)),e=t.index($(this))+1;$(this).closest(".rating").hasClass("fill")?(t.addClass("empty"),t.slice(0,e).removeClass("empty")):(t.removeClass("fa-star").addClass("fa-star-o"),t.slice(0,e).removeClass("fa-star-o").addClass("fa-star")),$(this).siblings([type="hidden"]).val(e)}),function(t,e){var a=$('[data-type="counter"]'),n=+a.attr("data-min")||0,i=+a.attr("data-max")||100;a.addClass("counter-int").wrap('<div class="counter"></div>'),$(".counter").prepend(['<button class="',"number-picker__left",'">-</button>'].join("")),$(".counter").append(['<button class="',"number-picker__right",'">+</button>'].join("")),a.val()||a.val(n);var s=a.prev(),o=a.next();a.on("change",function(){var t=$(this).val();(t<n||!l(t))&&$(this).val(n),t>i&&$(this).val(i)}),s.on("click",function(){var t=$(this).next();t.val()>n&&t.val(+t.val()-1)}),o.on("click",function(){var t=$(this).prev();t.val()<i&&t.val(+t.val()+1)});var l=function(t){return!isNaN(parseFloat(t))&&isFinite(t)}}(),$(".donut").peity("donut"),new Swiper(".dish-weight__container",{nextButton:".dish-weight__left",prevButton:".dish-weight__right",spaceBetween:30,slidesPerView:1,loop:!0}),new Swiper(".reviews__container",{slidesPerView:3,paginationClickable:!0,pagination:".reviews__pagination",nextButton:".reviews__button-next",prevButton:".reviews__button-prev",spaceBetween:30,hashnavWatchState:!0,breakpoints:{1199:{slidesPerView:2},991:{slidesPerView:1}}})});