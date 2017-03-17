var questionNumber = 1;
var score = 0;

function showQuestion(question) {
	$('.questionScreen').hide();
	if ($('.questionScreen:nth-of-type('+ question + ')').length > 0) {
		$('.questionScreen:nth-of-type('+ question + ')').show();
	} else {
		$('#finishedScreen').show();
	}
}

showQuestion(questionNumber);

$('span').click(function(){
	if ($(this).hasClass('correct')) {
	score++;
	$('#scoreTally').html(score);
	}   
	questionNumber++;
	showQuestion(questionNumber);	 
});	

