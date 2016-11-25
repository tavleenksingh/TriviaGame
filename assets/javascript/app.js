$(document).ready(function(){

	// setting my global variables
	var counter;
	var totalQuestions = 10;
	var correctAnswer = 0;
	var incorrectAnswer = 0;
	var totalTime = 60;
	var unansweredQuestions = 0;


	// this function will rum when user presses the start button
	function start(){
		counter = setInterval(decrement, 1000);
		$("#quizSection").show();
		$("#startButton").hide();
	};


	// this function will decrement the counter as the quiz progresses
	function decrement() {
      totalTime--;
      $("#timeDisplay").html("<h2>" + "Time Remaining: " + totalTime + "</h2>");
      if (totalTime === 0) {
        submit();
        alert("Time Up!");
      };
    };


    // this function will reset the game 
    function reset(){
	correctAnswer = 0;
	incorrectAnswer = 0;
	unansweredQuestions = 0;
	$("#resultsSection").hide();
	$("#startButton").show();
	$('input[type="radio"]:checked').prop('checked', false);
	$("#results").html("<h3> Your Results</h3><p>Correct Answers : "+ correctAnswer + "</p> <p>Incorrect Answers: " + incorrectAnswer + "</p><p>Unanswered Questions: " + unansweredQuestions + "</p>")
	};


	// this function will display the quiz results and check user input
	function submit(){
	$("#quizSection").hide();
	$("#resultsSection").show();
	$("input:checked").each(function(){
		if($(this).val() == "true"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		};
		unansweredQuestions = totalQuestions - (correctAnswer + incorrectAnswer);
		$("#results").html("<h3> Your Results</h3><hr><p>Correct Answers : "+ correctAnswer + "</p> <p>Incorrect Answers: " + incorrectAnswer + "</p><p>Unanswered Questions: " + unansweredQuestions + "</p>")
		});
	clearInterval(counter);
	totalTime = 60;
	};


	//this will start the game and dispaly all the questions
    $(document).on("click", "#startButton", function(){
		start();
	});

    // this will display the results on pressing submit button
	$(document).on("click", "#submitButton", function(){
		submit();
	});

	// this will start over the game by running the function reset.
	$(document).on("click", "#startOverButton", function(){
		reset();
	});

});