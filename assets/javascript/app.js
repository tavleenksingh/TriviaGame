$(document).ready(function(){

	//var totalNumberOfQuestions = 10;
	var correctAnswer = 0;
	var incorrectAnswer = 0;
	var totalTime = 10;
	var counter ;
	var unansweredQuestions = 0;


	function start(){
		counter = setInterval(decrement, 1000);
		$("#quizSection").show();
		$("#startButton").hide();
	};

	function submit(){
		clearInterval(counter);
	};

	function decrement() {
    //  Decrease number by one.
      totalTime--;
      //  Show the number in the #show-number tag.
      $("#timeDisplay").html("<h2>" + "Time Remaining: " + totalTime + "</h2>");
      //  Once number hits zero...
      if (totalTime === 0) {
        //  ...run the stop function.
        submit();
        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }


    $(document).on("click", "#startButton", function(){
		start();
	});

	$(document).on("click", "#submitButton", function(){
		submit();
	});











});