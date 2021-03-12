# quiz-app

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



