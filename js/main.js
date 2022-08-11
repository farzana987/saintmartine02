
$(document).ready(function(){

$('.item-hotel').show();
$('.item-ticket').hide();
$('.item-place').hide();

$('#hotel span').addClass('line');


// for hotel
$('#hotel').click(function(){
	$('.item-hotel').show();
	$('.item-ticket').hide();
	$('.item-place').hide();

	$('#hotel span').addClass('line');
	$('#ticket span').removeClass('line');
	$('#place span').removeClass('line');
});


// for ticket
$('#ticket').click(function(){
	$('.item-hotel').hide();
	$('.item-ticket').show();
	$('.item-place').hide();


	$('#hotel span').removeClass('line');
	$('#ticket span').addClass('line');
	$('#place span').removeClass('line');
});


// for place
$('#place').click(function(){
	$('.item-hotel').hide();
	$('.item-ticket').hide();
	$('.item-place').show();

	$('#hotel span').removeClass('line');
	$('#ticket span').removeClass('line');
	$('#place span').addClass('line');
});





})