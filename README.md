# quiz-app
Reference (Video tutorials samples I used to help with this)
a.	Class recording
b.	From Web Dev Simplify: https://youtu.be/riDzcEQbX6k
c.	I also used multiple tutorials for the countdown.
Challenges:
A.	Workflow or process.
B.	HTML & CSS Locators, which after some intense reverse engineering I feel more comfortable with by now and it should show on future homework.
C.	Event listening & capturing selection.  I got the initial click to work as well as the “Next button” but not the choices.
The tutorial use and array with objects as their data structure of choice, but till this day I am not sure how to loop through it so I decided to work with just basic arrays.

Declaration of the arrays:
question0 = ["Please press the next button to start", "Option 1", "Option 2", "Option 3", "Option 4"]
question1 = ["Which option has the correct file extension for a Java Script files?", "file.php", "file.js", "file.py", "file.css", "file.js"]
question2 = ["Which option has the correct file extension for a Cascading Style Sheet file?", "file.php", "file.js", "file.py", "file.css", "file.css"]
question3 = ["What does HTML stand for?", "Hyper Text Markup Language", "Hyper Text Many Languages", 'Home Type Markup Language', 'Hyper Type Max Language']
question4 = ["Which option has the correct file extension for an HTML file?", "file.php", "file.html", "file.py", "file.css", "file.html"]
question5 = ["What color is Napoleon's white hourse?", "Black", "Pinto", "White", "Brown", "White"]

Position [0] was reserved for the question.

I used a questionCounter which incremented on “Next”, the counter was then use as the leading indicator to selected the right array variable and hunt for the question as well as the “multiple Choices”

document.getElementById('next-btn').addEventListener('click', function() {
    questionCounter++
    console.log(questionCounter)
    if (questionCounter === 1) {
        var correctAnswer1 = question1[2]
        console.log(correctAnswer1)
        console.log('1-true')
        document.getElementById("questions").innerHTML = question1[0];
        document.getElementById('btn-1').innerHTML = question1[1];
        document.getElementById('btn-2').innerHTML = question1[2];
        document.getElementById('btn-3').innerHTML = question1[3];
        document.getElementById('btn-4').innerHTML = question1[4];
        document.getElementById("btn").addEventListener("click", function() {
            var selection = document.getElementById('btn').in;
            console.log("selection");
        });
    } else if (questionCounter === 2) {
        console.log('2-true')
        document.getElementById("questions").innerHTML = question2[0];
        document.getElementById('btn-1').innerHTML = question2[1];
        document.getElementById('btn-2').innerHTML = question2[2];
        document.getElementById('btn-3').innerHTML = question2[3];
        document.getElementById('btn-4').innerHTML = question2[4];
    } else if (questionCounter === 3) {
        console.log('3-true')
        document.getElementById("questions").innerHTML = question3[0];
        document.getElementById('btn-1').innerHTML = question3[1];
        document.getElementById('btn-2').innerHTML = question3[2];
        document.getElementById('btn-3').innerHTML = question3[3];
        document.getElementById('btn-4').innerHTML = question3[4];
    } else if (questionCounter === 4) {
        console.log('4-true')
        document.getElementById("questions").innerHTML = question4[0];
        document.getElementById('btn-1').innerHTML = question4[1];
        document.getElementById('btn-2').innerHTML = question4[2];
        document.getElementById('btn-3').innerHTML = question4[3];
        document.getElementById('btn-4').innerHTML = question4[4];
    } else if (questionCounter === 5) {
        console.log('5-true')
        document.getElementById("questions").innerHTML = question5[0];
        document.getElementById('btn-1').innerHTML = question5[1];
        document.getElementById('btn-2').innerHTML = question5[2];
        document.getElementById('btn-3').innerHTML = question5[3];
        document.getElementById('btn-4').innerHTML = question5[4];
    } else if (questionCounter === 6) {
        window.location.href = "index.html";
    }
});





/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
Plan twice (or more) code once.

This project was a challenge, and after some reflection it was not because we did not discuss the atomics components which I used in the solution but rather I had to learned how to organize and plan the solution.  What I am submitting is version 8th, and their will be a version 9th (working on the timer).
Learning outcome:
As it turns out starting with the end in mind (wire framing) and properly planning your selector will save you time and head egg, in fact, after a great deal of pain I found that starting with the end in mind and articulating what I wanted to happen (visually as well as programmatically) helped me organize and place the selectors in the right place.

High level description & pseudo code.

-Open on a page with clear visual indicators of the fact that you are about to start a quiz.
a.	Change the web tab name / title to “Quiz App”
b.	In case they missed that – adjust the body color (another visual indicator) and big button in the middle of page (it should adjust-flex) called “Start Quiz”.
c.	When the person hits the button “Start Quiz”
a.	We will change to the actual quiz.
i.	This will require some sort of event listener (research)

-	What we want to happen when the user transition to the actual quiz?
o	Keep the background as close to the original background – this would help the user – provides continuity.
o	This might require some sort of container – so we can do a single style for both – research.
o	Adjust the element in the middle of the page to present the question with options.

The HTML Code I ended with, after days of planning and watching videos.
<div class="container">
        <div class='timer'>
            <div id="question-container" class="hide">
                <div id="question">Question</div>
                <div id="answer-buttons" class="btn-grid">
                    <button class="btn">Answer 1</button>
                    <button class="btn">Answer 2</button>
                    <button class="btn">Answer 3</button>
                    <button class="btn">Answer 4</button>
                </div>
            </div>
        </div>
        <div class="controls">
            <button id="start-btn" class="start-btn btn">Start Quiz</button>
            <button id="next-btn" class="next-btn btn hide">Next</button>
        </div>


Styling
-We will use a common style for the background
- Thanks to YouTube I learn that you could create classes selector (pre-plan, lots of it) style them, keep them hidden and then use them based on events – I am using this to adjust the quiz background based on correct or incorrect answer (giving the user some sort of visual feedback)
*,
*::before,
*::after {
    box-sizing: border-box;
    font-family: cursive;
    font-size: 40px;
}

:root {
    --hue-neutral: 200;
    --hue-wrong: 0;
    --hue-correct: 145;
}

/* We are going to style this so the body of the box changes to green if you selected the right answer and red if you select the incorrect */

/* First we do want to remove the padding and marging */

body {
    --hue: var(--hue-neutral);
    padding: 0;
    margin: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: hsl(var(--hue), 100%, 20%);
}

body.correct {
    --hue: var(--hue-correct);
}

body.wrong {
    --hue: var(--hue-wrong);
}


I then move to the visual content in the middle of the page.  This took forever and it was the challenge which helped me realized “starting with the end in mind” is the key.

What I want to happen – Visually:
a.	I want a nice box – card looking square in the middle of the page (focused of attention)
b.	I want it to have rounded corners.
c.	I want the content inside the square to be organized (placement) as:
a.	A sentence at top – question (String)
b.	Answers bellow, arrange in columns and rows (need to research how to do this)
i.	What would be the right HTML element which I could use to bind a script to help me track the state (click) – Bottom.
ii.	Some sort of cool – visual effect which help users realized they are selecting a specific button, and the fact that they selected the right or incorrect option.
It also took me some time to realized HTML hierarchical nature.  Meaning, this grid would be place insight the square container, again making my selector placement planning key.

.btn-grid {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px;
    margin: 20px 0;
}

.btn {
    --hue: var(--hue-neutral);
    border: 3px solid hsl(var(--hue), 100%, 40%);
    background-color: hsl(var(--hue), 100%, 50%);
    border-radius: 5px 10px;
    color: white;
    outline: none;
}

/* Hover effect */

.btn:hover {
    border-color: black;
}

.btn.correct {
    --hue: var(--hue-correct);
    color: black;
}

.btn.wrong {
    --hue: var(--hue-wrong);
}

.start-btn,
.next-btn {
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 20px;
}

.controls {
    display: flex;
    justify-content: center;
    align-items: center;
}

.hide {
    display: none;
}



