let ratingNumber = 0;

$(document).ready(function () {
	$('.ratings').on('click', function () {
		$('.ratings').removeClass('activeRating');
		$(this).addClass('activeRating');
        ratingNumber = this.innerText
        $('.rating_number').html(ratingNumber);
	});
    $('.submit_btn').on('click', function(){
        $('.feedback_wrap').removeClass('active_feedback_card');
        $('.thank_you_card').addClass('active_ty_card');
    });
});
