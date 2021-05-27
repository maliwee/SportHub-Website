var total_seconds = 120;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);
var timer;

function TimeCheck() {
  document.getElementById("quiz-time-left").innerHTML = 'Time Left: ' + c_minutes + ' Minutes ' + c_seconds + ' Seconds ';

  if (total_seconds <= 0) {
    check();
  } else {
    total_seconds = total_seconds - 1;
    c_minutes = parseInt(total_seconds / 60);
    c_seconds = parseInt(total_seconds % 60);
    timer = setTimeout(TimeCheck, 1000);
  }
}
timer = setTimeout(TimeCheck, 1000);

function check() {

    clearInterval(timer)

    var marks = 0;
    var answer1 = document.quiz.question1.value;
    var answer2 = document.quiz.question2.value;
    var answer3 = document.quiz.question3.value;
    var answer4 = document.quiz.question4.value;
    var answer5 = document.quiz.question5.value;
    var answer6 = document.quiz.question6.value;
    var answer7 = document.quiz.question7.value;
    var answer8 = document.quiz.question8.value;
    var answer9 = document.quiz.question9.value;
    var answer10 = document.quiz.question10.value;

    document.querySelector("#quiz").style.display = "none"
    document.querySelector(".ans-container").style.display = "block"

    if(answer1 == "Los Angeles"){
        marks += 2
        document.querySelector("#q1Ans").innerHTML = "&#10004; Correct Answer"
        document.querySelector("#q1Ans").classList.add("correct")
    }else{
        marks -= 1
        document.querySelector("#q1Ans").innerHTML = "&#10008; Incorrect Answer"
        document.querySelector("#q1Ans").classList.add("incorrect")
    }

    if (answer2=="Monaco") 
        
		{
            marks += 2
            document.querySelector("#q2Ans").innerHTML = "&#10004; Correct Answer"
            document.querySelector("#q2Ans").classList.add("correct")
		} else  { 
            marks -= 1
            document.querySelector("#q2Ans").innerHTML = "&#10008; Incorrect Answer"
            document.querySelector("#q2Ans").classList.add("incorrect")
        }

    if (answer3==82) 
        
		{
            marks += 2
            document.querySelector("#q3Ans").innerHTML = "&#10004; Correct Answer"
            document.querySelector("#q3Ans").classList.add("correct")
		} else  { 
            marks -= 1
            document.querySelector("#q3Ans").innerHTML = "&#10008; Incorrect Answer"
            document.querySelector("#q3Ans").classList.add("incorrect")
        }

    if (answer4=="Alan Shearer") 
        
		{
            marks += 2
            document.querySelector("#q4Ans").innerHTML = "&#10004; Correct Answer"
            document.querySelector("#q4Ans").classList.add("correct")
		} else  { 
            marks -= 1
            document.querySelector("#q4Ans").innerHTML = "&#10008; Incorrect Answer"
            document.querySelector("#q4Ans").classList.add("incorrect")
        }
    
    if (answer5=="Serena Williams") 
        
		{
            marks += 2
            document.querySelector("#q5Ans").innerHTML = "&#10004; Correct Answer"
            document.querySelector("#q5Ans").classList.add("correct")
		} else  { 
            marks -= 1
            document.querySelector("#q5Ans").innerHTML = "&#10008; Incorrect Answer"
            document.querySelector("#q5Ans").classList.add("incorrect")
        }

    if (answer6=="Pakistan") 
        
		{
            marks += 2
            document.querySelector("#q6Ans").innerHTML = "&#10004; Correct Answer"
            document.querySelector("#q6Ans").classList.add("correct")
		} else  { 
            marks -= 1
            document.querySelector("#q6Ans").innerHTML = "&#10008; Incorrect Answer"
            document.querySelector("#q6Ans").classList.add("incorrect")
        }

    if (answer7=="Gary Lineker") 
        
		{
            marks += 2
            document.querySelector("#q7Ans").innerHTML = "&#10004; Correct Answer"
            document.querySelector("#q7Ans").classList.add("correct")
		} else  { 
            marks -= 1
            document.querySelector("#q7Ans").innerHTML = "&#10008; Incorrect Answer"
            document.querySelector("#q7Ans").classList.add("incorrect")
        }

    if (answer8=="Sri Lanka") 
        
		{
            marks += 2
            document.querySelector("#q8Ans").innerHTML = "&#10004; Correct Answer"
            document.querySelector("#q8Ans").classList.add("correct")
		} else  { 
            marks -= 1
            document.querySelector("#q8Ans").innerHTML = "&#10008; Incorrect Answer"
            document.querySelector("#q8Ans").classList.add("incorrect")
        }

    if (answer9=="Four") 
        
		{
            marks += 2
            document.querySelector("#q9Ans").innerHTML = "&#10004; Correct Answer"
            document.querySelector("#q9Ans").classList.add("correct")
		} else  { 
            marks -= 1
            document.querySelector("#q9Ans").innerHTML = "&#10008; Incorrect Answer"
            document.querySelector("#q9Ans").classList.add("incorrect")
        }

    if (answer10=="45 seconds") 
        
		{
            marks += 2
            document.querySelector("#q10Ans").innerHTML = "&#10004; Correct Answer"
            document.querySelector("#q10Ans").classList.add("correct")
		} else  { 
            marks -= 1
            document.querySelector("#q10Ans").innerHTML = "&#10008; Incorrect Answer"
            document.querySelector("#q10Ans").classList.add("incorrect")

        }

    document.querySelector("body").classList.remove("back-image")
    console.log(marks.toString)
    document.querySelector("#score").innerHTML = marks.toString()
    var elapsedSeconds = 119 - Math.floor(total_seconds)
    var min = 1 - c_minutes
    var secs = 60- c_seconds

    document.querySelector("#time").innerHTML = (min + " Minutes and "+ secs + " Seconds").toString()
        
    if (marks < 10)
        {
            document.body.style.backgroundColor="lightcoral"
        } else {
            document.body.style.backgroundColor="lightskyblue"
        }

   



    

}
